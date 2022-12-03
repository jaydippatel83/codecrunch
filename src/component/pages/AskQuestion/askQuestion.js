import React,{useState} from 'react';
import Cards from '../Cards';
import Footer from '../Footer';
import Header from '../Header';
import RightNav from './RightNav';
import SvgImg from './Svg';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select'; 
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { AbortedDeferredError } from 'react-router-dom';
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";
import { api, utils } from "@epnsproject/frontend-sdk-staging";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { create } from 'ipfs-http-client';
import { LensAuthContext } from '../../../Context/MainContext';
import { createPost, createPostViaDis } from '../../../lensprotocol/post/create-post';
import { toast } from 'react-toastify';
import { Buffer } from 'buffer';
import { CircularProgress, IconButton, Tooltip } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

 
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

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

export default function AskQuestion() { 
  const lensAuthContext = React.useContext(LensAuthContext);
    const { profile, login, update, setUpdate } = lensAuthContext;
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const [file, setFile] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  console.log(title,"title");
  console.log(description,"description");
  console.log(tags,"tags");


  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // const codesterContext = React.useContext(CodesterContext);
  // const { sendNotification } = codesterContext;
// let title = 'Question added';
// let msg = "New question added help it out"

const addTags = event => {
  if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
  }
};

const removeTags = index => {
  setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
};
 
 const handleUploadImage = async (e) => { 
  const file = e.target.files[0];
  const ipfsResult = await client.add(file);
  const imageURI = `https://superfun.infura-ipfs.io/ipfs/${ipfsResult.path}`;
  console.log(imageURI,"imageURI");
  setFile(imageURI);

}

const handleRemoveVideo = () => { 
  setFile("");
}

const handleUpload = async () => {
  const fId = window.localStorage.getItem("profileId"); 
  if (title.length !== 0 &&   description !== "" && tags.length !== 0) {
      if (fId === undefined) {
          toast.error("Please Login First!");
          return;
      }
      var res;
      var media;
      if (file !== '') {
          media = 'image';
      } else {
          media = 'text';
      } 

      
      try {

          setLoading(true);
          const postData = {
              title: title,
              photo: file,
              tags: tags,
              login: login,
              description: description,
              video: null,
              name: profile.handle,
              profile: profile,
              fileTyepe:  media
          } 
          if (profile?.dispatcher?.canUseRelay) {
              res = await createPostViaDis(postData); 
          } else {
              res = await createPost(postData); 
          } 
          if (res) {
              setUpdate(!update);
              setFile("");
              setTags([]);
              setTitle("");
              setDescription("");
              setLoading(false);
              toast.success("Post is Successfully created!"); 
          }
      } catch (error) {
          toast.error(error);
          setLoading(false);
          setUpdate(!update);
      }
  } else {
      toast.error("Required all the fields!"); 
  }

}

  return (
    <>
      <>
        {/* <Header /> */}
        <section className="hero-area bg-white shadow-sm overflow-hidden">
          <span className="stroke-shape stroke-shape-1" />
          <span className="stroke-shape stroke-shape-2" />
          <span className="stroke-shape stroke-shape-3" />
          <span className="stroke-shape stroke-shape-4" />
          <span className="stroke-shape stroke-shape-5" />
          <span className="stroke-shape stroke-shape-6" />
          <div className="container">
            <div className="hero-content pt-80px pb-80px">
              <h2 className="section-title">Ask a public question</h2>
             <SvgImg/>
            </div>
            {/* end hero-content */}
          </div>
          {/* end container */}
        </section>
        {/*======================================
  END HERO AREA
======================================*/}
        {/* ================================
   START QUESTION AREA
================================= */}
        <section className="question-area pt-80px pb-40px">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="card card-item">
                  <div method="post" className="card-body">
                    <div className="input-box">
                      <label className="fs-14 text-black fw-medium mb-0">
                        Question Title
                      </label>
                      <p className="fs-13 pb-3 lh-20">
                        Be specific and imagine you’re asking a question to another
                        person
                      </p>
                      <div className="form-group">
                        <input
                          className="form-control form--control"
                          type="text"
                          name="text"
                          onChange={(e)=> setTitle(e.target.value)}
                          placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                        />
                      </div>
                    </div>
                    {/* end input-box */}
                    <div className="input-box">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <label className="fs-14 text-black fw-medium mb-0">
                            Tags
                          </label>
                          <p className="fs-13 pb-3 lh-20">
                            Add up to 5 tags to describe what your question is about:
                          </p>
                        </div>
                        <button
                          type="button"
                          className="popover-trigger btn border border-gray py-1 lh-18 px-2"
                          data-container="body"
                          data-toggle="popover"
                          data-placement="top"
                        >
                          <svg
                            aria-hidden="true"
                            className="svg-icon-color-gray"
                            width={14}
                            height={14}
                          >
                            <path d="M7 1a6 6 0 100 12A6 6 0 007 1zm1.06 9.06c-.02.63-.48 1.02-1.1 1-.57-.02-1.03-.43-1.01-1.06.02-.63.5-1.04 1.08-1.02.6.02 1.05.45 1.03 1.08zm.73-3.07l-.47.3c-.2.15-.36.36-.44.6a3.6 3.6 0 00-.08.65c0 .04-.03.14-.16.14h-1.4c-.14 0-.16-.09-.16-.13-.01-.5.11-.99.36-1.42A4.6 4.6 0 017.7 6.07c.15-.1.21-.21.3-.33a1.14 1.14 0 00.02-1.48c-.22-.26-.46-.4-.92-.4-.45 0-.83.23-1.02.52-.19.3-.16.63-.16.94H4.2c0-1.17.31-1.92.98-2.36a3.5 3.5 0 011.83-.44c.88 0 1.58.16 2.2.62.58.42.88 1.02.88 1.82 0 .5-.17.9-.43 1.24-.15.2-.44.47-.86.79h-.01z" />
                          </svg>
                        </button>
                      </div>
                      <div className="form-group">
                        <input
                          className="input-tags input--tags"
                          type="text"
                          name="tags"
                          onKeyUp={event => addTags(event)} 
                          placeholder="e.g. javascript"
                        />
                      </div>
                    </div>

                    <Stack direction="row" spacing={1}>
                        <div style={{ width: '100%' }}>
                            {tags.map((tag, index) => (
                                <Chip label={`#${tag}`}
                                    variant="outlined"
                                    className='m-1'
                                    key={index}
                                    onDelete={() => removeTags(index)}
                                />

                            ))}
                        </div>
                    </Stack>
                    {/* end input-box */} 
                    {/* end input-box */}
                    <div className="input-box">
                      <label className="fs-14 text-black fw-medium mb-0">
                        Details
                      </label>
                      <p className="fs-13 pb-3 lh-20">
                        Include all the information someone would need to answer your
                        question
                      </p>
                      <div className="form-gro up">
                        <textarea
                          className="form-control form--control user-text-editor"
                          rows={10}
                          cols={40} 
                          onChange={(e)=>setDescription(e.target.value)}  
                        />
                        <div className="d-flex align-items-center pt-2">
                          <div className="mr-3">
                            ```{" "}
                            <code className="badge bg-gray border border-gray text-gray">
                              code
                            </code>{" "}
                            ```
                          </div>
                          <div className="mr-3 fw-bold">**bold**</div>
                          <div className="mr-3 font-italic">*italic*</div>
                          <div>&gt;quote</div>
                        </div>
                      </div>
                    </div>
                    {/* end input-box */}
                    <div className="input-box">
                      <label className="fs-14 text-black fw-medium">Image</label>
                      <div className="form-group">
                        <div className="file-upload-wrap file-upload-layout-2">
                          <input
                            type="file"
                            name="files[]"
                            className="file-upload-input"
                            multiple=""
                            onChange={(e)=>handleUploadImage(e)}
                          />
                          <span className="file-upload-text d-flex align-items-center justify-content-center">
                            <i className="la la-cloud-upload mr-2 fs-24" />
                            Drop files here or click to upload.
                          </span>
                        </div>
                      </div>
                    </div>

                    {
                        file !== "" && <div className='d-flex justify-content-between'><img style={{ borderRadius: '10px' }} height="300px" className="p-2" src={file}></img><CancelIcon style={{ fontSize: '24px', }} onClick={handleRemoveVideo} /></div>
                    }
                    
                    {/* end input-box */}
                    <div className="input-box pt-2"> 
                      <div className="btn-box">
                        <button  
                        onClick={handleUpload}
                        className="btn theme-btn">
                           { loading ? <CircularProgress size={20} /> :  "Publish your question" }
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <RightNav />
            </div>
          </div>
        </section>

        {/* =======================  CARDS  ====================== */}
        <Cards />

        {/* =======================  FOOTER AREA  ====================== */}
        {/* <Footer /> */}
      </>

    </>
  )
}
