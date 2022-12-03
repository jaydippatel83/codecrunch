import React from "react";

function TrendingQuestion(){
    return(
        <div className="sidebar-questions pt-3">
        <div className="media media-card media--card media--card-2">
          <div className="media-body">
            <h5>
              <a href="question-details.html">
                How did chickenpox get its name?
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
                How can you cut an onion without crying?
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
                Does flu vaccine protect against Coronavirus?
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

export default TrendingQuestion;