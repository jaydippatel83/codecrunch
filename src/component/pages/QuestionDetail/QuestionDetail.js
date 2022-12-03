import React, { useEffect, useState } from 'react' 
import DetailBanner from './DetailBanner'
import QuestionHeader from './QuestionHeader'
import QuestionList from './QuestionList'
import DetailsSidebar from './DetailsSidebar'
import { useParams } from 'react-router-dom'
import { LensAuthContext } from '../../../Context/MainContext'
import { getpublicationById } from '../../../lensprotocol/post/get-publicationById'
import { toast } from 'react-toastify'
import AnswerList from './AnswerList'
import { getComments } from '../../../lensprotocol/post/get-post'
import { createComment, createCommentByDis } from '../../../lensprotocol/post/comments/create-comment'
import { create } from 'ipfs-http-client'
import { Buffer } from 'buffer';
 
const auth =
    "Basic " +
    Buffer.from(
        process.env.REACT_APP_INFURA_PID + ":" + process.env.REACT_APP_INFURA_SECRET
    ).toString("base64");

const client = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
        authorization: auth,
    },
}); 
 

export default function QuestionDetail() {

  const param = useParams();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const lensAuthContext = React.useContext(LensAuthContext);
  const { login, loginCreate ,profile} = lensAuthContext;
  const [update,setUpdate]= useState(false);

  const [count, setCount] = useState(0);
  const [fileType, setFileType] = useState("img")
  const [displayCmt, setDisplayCmt] = useState([]);
  const [file, setFile] = React.useState("");
  const [comment, setComments] = useState("");

  const handleUploadImage = async (e) => { 
    const file = e.target.files[0];
    const ipfsResult = await client.add(file);
    const imageURI = `https://superfun.infura-ipfs.io/ipfs/${ipfsResult.path}`; 
    setFile(imageURI);
  
  }

  async function get_posts() {
      try {
          const pst = await getpublicationById(param.id);
          setData(pst.data.publication);
          if (pst.data.publication?.metadata?.media[0]?.original?.mimeType === 'image/jpeg') {
              setFileType("img");
          } else {
              setFileType("text");
          }
      } catch (error) {
          toast.error(error);
      } 
  } 

  useEffect(() => {
      get_posts();
      getComm()
  }, [param.id]) 

  async function getComm() {

    let arr = [];
    const cmt = await getComments(param.id);
    cmt && cmt.map((com) => {
      // let obj = {
      //   typename: com?.__typename,
      //   avtar: com?.profile?.picture?.original?.url,
      //   name: com?.profile?.handle,
      //   comment: com?.metadata?.content
      // }
      arr.push(com);
    })

    setDisplayCmt(arr);
  }
 
  const handleComment = async () => {
    console.log(profile,"profile");
    if(!profile){
        toast.error("Please login First!");
        return;
    }
    var pId  ;
    if(data.__typename === "Comment"){
        pId = data?.mainPost?.id;
    } else if(data.__typename === "Mirror"){
        pId = data?.mirrorOf?.id;
    } else {
        pId = data?.id;
    }
    console.log(pId,"pId");
    if(comment.length === 0){
        toast.error("Please Fill up this field!");
        return;
    }
    try {
        let arr = [...displayCmt];
        const id = window.localStorage.getItem("profileId");
        setLoading(true);

        const obj = {
            address: profile.ownedBy,
            comment: comment,
            login: profile?.dispatcher?.canUseRelay ? login : loginCreate,
            profileId: id,
            publishId: pId,
            image:  file,
            user: profile.name ? profile.name : profile.handle
        }
        var result;

        if (profile?.dispatcher?.canUseRelay) {
            result = await createCommentByDis(obj);
        } else {
            result = await createComment(obj);
        }
        if (result) {
            let obj = {
                typename: "Comment",
                avtar: profile?.picture?.original?.url,
                name: profile?.handle,
                comment: comment 
            }
            arr[arr.length] = obj;
            setComments("");
            setDisplayCmt(arr)
            // setCommUp(!commUp);
            setLoading(false);
            setUpdate(!update);
            

        }
        setUpdate(!update); 
        setLoading(false);
    } catch (error) {
        toast.error(error);
        setUpdate(!update);
        setLoading(false); 
    }
}

console.log(data,"data");


  return (
    <>  
    <DetailBanner/>
      <section className="question-area pt-40px pb-40px">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="question-main-bar mb-50px">
                <QuestionHeader data={data}/>
                {/* end question-highlight */}
               <QuestionList data={data}/>
                {/* end question */}
                <div className="subheader d-flex align-items-center justify-content-between">
                  <div className="subheader-title">
                    <h3 className="fs-16">Answers</h3>
                  </div>
                  {/* end subheader-title */}
                  
                  {/* end subheader-actions */}
                </div>
                {/* end subheader */}
               {
                displayCmt.length != 0 ?  
                displayCmt.map((cmt)=>{
                  return (
                    <AnswerList data={cmt}/>
                  )
                })
                 : <p>No answer available</p>
               } 
                {/* end answer-wrap */}
                <div className="subheader">
                  <div className="subheader-title">
                    <h3 className="fs-16">Your Answer</h3>
                  </div>
                  {/* end subheader-title */}
                </div>
                {/* end subheader */}
                <div className="post-form"> 
                    <div className="input-box">
                      <label className="fs-14 text-black lh-20 fw-medium">
                        Body
                      </label>
                      <div className="form-group">
                        <textarea
                          className="form-control form--control form-control-sm fs-13 "
                          name="message"
                          rows={6}
                          onChange={(e)=>setComments(e.target.value)}
                          placeholder="Your answer here..."
                          defaultValue={"Your answer here..."}
                        />
                      </div>
                    </div>
                    <div className="input-box">
                      <label className="fs-14 text-black fw-medium">Image</label>
                      <div className="form-group">
                        <div className="file-upload-wrap file-upload-layout-2">
                          <input
                            type="file"
                            name="files[]"
                            className="file-upload-input"
                            onChange={(e)=>handleUploadImage(e)}
                          />
                          <span className="file-upload-text d-flex align-items-center justify-content-center">
                            <i className="la la-cloud-upload mr-2 fs-24" />
                            Drop files here or click to upload.
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* end input-box */}
                    <button className="btn theme-btn theme-btn-sm"  onClick={handleComment}>
                      Post Your Answer
                    </button> 
                </div>
              </div>
              {/* end question-main-bar */}
            </div>
            {/* end col-lg-9 */}
           <DetailsSidebar/>
          </div>
        </div>
      </section>
    </>
  )
}
