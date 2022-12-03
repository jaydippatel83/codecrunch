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
 
 

export default function QuestionDetail() {

  const param = useParams();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const lensAuthContext = React.useContext(LensAuthContext);
  const { profile } = lensAuthContext;
  const [count, setCount] = useState(0);
  const [fileType, setFileType] = useState("img")
  const [displayCmt, setDisplayCmt] = useState([]);

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
      let obj = {
        typename: com?.__typename,
        avtar: com?.profile?.picture?.original?.url,
        name: com?.profile?.handle,
        comment: com?.metadata?.content
      }
      arr.push(obj);
    })

    setDisplayCmt(arr);
  }

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
                displayCmt.length != 0 ?  <AnswerList data={displayCmt}/> : <p>No answer available</p>
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
                  <form method="post" className="pt-3">
                    <div className="input-box">
                      <label className="fs-14 text-black lh-20 fw-medium">
                        Body
                      </label>
                      <div className="form-group">
                        <textarea
                          className="form-control form--control form-control-sm fs-13 user-text-editor"
                          name="message"
                          rows={6}
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
                            multiple=""
                          />
                          <span className="file-upload-text d-flex align-items-center justify-content-center">
                            <i className="la la-cloud-upload mr-2 fs-24" />
                            Drop files here or click to upload.
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* end input-box */}
                    <button className="btn theme-btn theme-btn-sm" type="submit">
                      Post Your Answer
                    </button>
                  </form>
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
