import React from "react";

function Cards (){
    return(
        <section className="get-started-area pt-80px pb-50px pattern-bg bg-gray">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">
              CodeCrunch Q&amp;A communities are different. <br /> Here's how
            </h2>
          </div>
          <div className="row pt-50px">
            <div className="col-lg-4 responsive-column-half">
              <div className="card card-item hover-y text-center">
                <div className="card-body">
                  <img src="assets/images/bubble.png" alt="bubble" />
                  <h5 className="card-title pt-4 pb-2">Expert communities.</h5>
                  <p className="card-text">
                    This is just a simple text made for this unique and awesome
                    template, you can easily edit it as you want.
                  </p>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-4 */}
            <div className="col-lg-4 responsive-column-half">
              <div className="card card-item hover-y text-center">
                <div className="card-body">
                  <img src="assets/images/vote.png" alt="vote" />
                  <h5 className="card-title pt-4 pb-2">
                    The right answer. Right on top.
                  </h5>
                  <p className="card-text">
                    This is just a simple text made for this unique and awesome
                    template, you can easily edit it as you want.
                  </p>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-4 */}
            <div className="col-lg-4 responsive-column-half">
              <div className="card card-item hover-y text-center">
                <div className="card-body">
                  <img src="assets/images/check.png" alt="check" />
                  <h5 className="card-title pt-4 pb-2">
                    Share knowledge. Earn trust.
                  </h5>
                  <p className="card-text">
                    This is just a simple text made for this unique and awesome
                    template, you can easily edit it as you want.
                  </p>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-4 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
    )
}

export default Cards;