import React from "react";

function RelatedQuestion (){
    return(
        <div className="sidebar-questions pt-3">
        <div className="media media-card media--card media--card-2">
          <div className="media-body">
            <h5>
              <a href="question-details.html">
                Using web3 to call precompile contract
              </a>
            </h5>
            <small className="meta">
              <span className="pr-1">2 mins ago</span>
              <span className="pr-1">. by</span>
              <a href="#" className="author">
                Sudhir Kumbhare
              </a>
            </small>
          </div>
        </div>
        <div className="media media-card media--card media--card-2">
          <div className="media-body">
            <h5>
              <a href="question-details.html">
                Is it true while finding Time Complexity of the
                algorithm [closed]
              </a>
            </h5>
            <small className="meta">
              <span className="pr-1">48 mins ago</span>
              <span className="pr-1">. by</span>
              <a href="#" className="author">
                wimax
              </a>
            </small>
          </div>
        </div>
        <div className="media media-card media--card media--card-2">
          <div className="media-body">
            <h5>
              <a href="question-details.html">
                image picker and store them into firebase with flutter
              </a>
            </h5>
            <small className="meta">
              <span className="pr-1">1 hour ago</span>
              <span className="pr-1">. by</span>
              <a href="#" className="author">
                Antonin gavrel
              </a>
            </small>
          </div>
        </div>
      </div>
    )
}

export default RelatedQuestion;