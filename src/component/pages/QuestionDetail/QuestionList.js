import React from 'react'
import UserInfo from './UserInfo'

function QuestionList({ data }) { 
    return (
        <div className="question d-flex">
            <div className="votes votes-styled w-auto">
                <div id="vote" className="upvotejs">
                    <a
                        className="upvote upvote-on"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="This question is useful"
                    />
                    <span className="count">1</span>
                    <a
                        className="downvote"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="This question is not useful"
                    />
                    <a
                        className="star"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Bookmark this question."
                    />
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
                <UserInfo  profile={data?.profile} time={data?.createdAt}/>
            </div>
        </div>
    )
}

export default QuestionList