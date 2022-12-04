import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LensAuthContext } from '../../../Context/MainContext';
import { addReaction, getReactions, removeReaction } from '../../../lensprotocol/reactions/add-reaction';

function HomeQuestionCard({item,i}) { 
    const lensAuthContext = React.useContext(LensAuthContext);
    const { profile, login } = lensAuthContext;

    const [pid, setPid] = useState(item?.id);
    const [count, setCount] = useState(0);
    const [likeUp, setLikeUp] = useState(0); 
    const [update, setUpdate] = useState(false); 
    const navigate = useNavigate(); 
    
    const handleNavigateDetails = (id) => { 
      navigate(`/question/${id}`)
    }


    // useEffect(() => {
    //     getReact();
    // }, [ update])

 
    
    const addReactions = async (data) => {
        if(!profile){
            toast.error("Please Login first!")
            return;
        }
        const id = window.localStorage.getItem("profileId");
        const pId = data && data.__typename === "Comment" ? data?.mainPost?.id : data?.id;
        const dd = {
            id: id,
            address: profile.ownedBy,
            publishId: pId,
            login: login
        }
        let res;
        if (likeUp === false) {
            res = await addReaction(dd);
        } else {
            res = await removeReaction(dd);
        }

        if (res === undefined) {
            setUpdate(!update);
        }
    }

    const getReact = async () => {
        const res = await getReactions(pid)
        if (profile) {
            const like = res.items && res.items.filter((e) => e.profile.id === profile.id);
            if (like.length === 0) {
                setLikeUp(false)
            } else {
                setLikeUp(true)
            }
        }
        setCount(res.items.length);
    }
 
 

    return (
        <div key={i} className="question-main-bar">
            <div className="questions-snippet">
                <div className="media media-card media--card align-items-center">
                    <div className="votes">
                        <div
                            className="vote-block d-flex align-items-center justify-content-between"
                            title="Votes"
                            onClick={()=>addReactions(item)}
                        >
                            <span className="vote-counts">{count}</span>
                            <span className="vote-icon" />
                        </div>
                        <div
                            className="answer-block d-flex align-items-center justify-content-between"
                            title="Answers"
                        >
                            <span className="vote-counts">{item?.stats?.totalAmountOfComments}</span>
                            <span className="answer-icon" />
                        </div>
                    </div>
                    <div className="media-body">
                        <h5>
                            <a onClick={() => handleNavigateDetails(item.id)}>
                                {item?.metadata?.content}
                            </a>
                        </h5>
                        <small className="meta">

                            <span className="pr-1">{moment(item?.createdAt, "YYYYMMDD").fromNow()}</span>
                            <a   className="author">
                                 By {item?.profile?.handle}
                            </a>
                        </small>

                        <div className="tags">
                            {
                                item && item?.metadata?.tags?.map((e, i) => { 
                                    return (
                                        <a key={i} c className="tag-link">
                                            {e}
                                        </a>

                                    )
                                })
                            }
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeQuestionCard