import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { LensAuthContext } from '../../../Context/MainContext';
import { addReaction, getReactions, removeReaction } from '../../../lensprotocol/reactions/add-reaction';
import UserInfo from './UserInfo'

function AnswerList({data}) {
    console.log(data,"data");

    const lensAuthContext = React.useContext(LensAuthContext);
    const { profile, login } = lensAuthContext;

    const [pid, setPid] = useState(data?.id);
    const [count, setCount] = useState(0);
    const [likeUp, setLikeUp] = useState(0); 
    const [update, setUpdate] = useState(false); 
    
    useEffect(() => {
        getReact();
    }, [pid, update])

 
    
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
        <div className="question d-flex">
            <div className="votes votes-styled w-auto">
                <div id="vote" className="upvotejs">
                <div
                            className="vote-block d-flex align-items-center justify-content-between"
                            title="Votes"
                            onClick={() => addReactions(data)}
                        >
                            <span className="vote-counts">{count}</span>
                            <span className="vote-icon" />
                        </div> 
                </div>
                {/* <div className="votes">
                        <div
                            className="vote-block d-flex align-items-center justify-content-between"
                            title="Votes"
                            // onClick={() => addReactions(item)}
                        >
                            <span className="vote-counts">{0}</span>
                            <span className="vote-icon" />
                        </div> 
                    </div> */}
            </div>
            {/* end votes */}
            <div className="question-post-body-wrap flex-grow-1">
                <div className="question-post-body">
                    <p> {data?.metadata?.content} </p>
                    <pre className="code-block custom-scrollbar-styled">
                        <code>
                            {data?.metadata?.description}
                        </code>
                    </pre>
                </div>
                {/* end question-post-body */}
                <UserInfo profile={data?.profile} time={data?.createdAt} />
            </div>
        </div>
    )
}

export default AnswerList