import React from "react";

function RightNav (){
    return(
        <div className="col-lg-4">
        <div className="sidebar">
          <div className="card card-item p-4">
            <h3 className="fs-17 pb-3">Step 1: Draft your question</h3>
            <div className="divider">
              <span />
            </div>
            <p className="fs-14 lh-22 pb-2 pt-3">
              The community is here to help you with specific coding,
              algorithm, or language problems.
            </p>
            <p className="fs-14 lh-22">
              Avoid asking opinion-based questions.
            </p>
            <div id="accordion" className="generic-accordion pt-4">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <button
                    className="btn btn-link fs-15"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <span>
                      <span className="text-color pr-2 fs-16">1.</span>{" "}
                      Summarize the problem
                    </span>
                    <i className="la la-angle-down collapse-icon" />
                  </button>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <ul className="generic-list-item generic-list-item-bullet generic-list-item--bullet-2 fs-14">
                      <li className="lh-18 text-black-50">
                        Include details about your goal
                      </li>
                      <li className="lh-18 text-black-50">
                        Describe expected and actual results
                      </li>
                      <li className="lh-18 text-black-50 mb-0">
                        Include any error messages
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* end card */}
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <button
                    className="btn btn-link collapsed fs-15"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <span>
                      <span className="text-color pr-2 fs-16">2.</span>{" "}
                      Describe what you’ve tried
                    </span>
                    <i className="la la-angle-down collapse-icon" />
                  </button>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p className="fs-14 lh-22 text-black-50">
                      Show what you’ve tried and tell us what you found (on
                      this site or elsewhere) and why it didn’t meet your
                      needs. You can get better answers when you provide
                      research.
                    </p>
                  </div>
                </div>
              </div>
              {/* end card */}
              <div className="card">
                <div className="card-header" id="headingThree">
                  <button
                    className="btn btn-link collapsed fs-15"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <span>
                      <span className="text-color pr-2 fs-16">3.</span> Show
                      some code
                    </span>
                    <i className="la la-angle-down collapse-icon" />
                  </button>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p className="fs-14 lh-22 text-black-50">
                      When appropriate, share the minimum amount of code
                      others need to reproduce your problem (also called a
                      <a href="#" className="text-color hover-underline">
                        minimum
                      </a>
                      ,{" "}
                      <a href="#" className="text-color hover-underline">
                        reproducible example
                      </a>
                      )
                    </p>
                  </div>
                </div>
              </div>
              {/* end card */}
            </div>
            {/* end accordion */}
          </div>
          {/* end card */}
          <div id="accordion-two" className="generic-accordion">
            <div className="card mb-3">
              <div className="card-header" id="headingFour">
                <button
                  className="btn btn-link collapsed fs-15"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <span>Have a non-programming question?</span>
                  <i className="la la-angle-down collapse-icon" />
                </button>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion-two"
              >
                <div className="card-body">
                  <p className="fs-14 lh-22 text-black-50 pb-2">
                    <a
                      className="text-color hover-underline d-block"
                      href="#"
                      target="_blank"
                    >
                      Super user
                    </a>
                    Troubleshooting hardware and software issues
                  </p>
                  <p className="fs-14 lh-22 text-black-50 pb-2">
                    <a
                      className="text-color hover-underline d-block"
                      href="#"
                      target="_blank"
                    >
                      Software engineering
                    </a>
                    For software development methods and process questions
                  </p>
                  <p className="fs-14 lh-22 text-black-50 pb-2">
                    <a
                      className="text-color hover-underline d-block"
                      href="#"
                      target="_blank"
                    >
                      Hardware recommendations
                    </a>
                  </p>
                  <p className="fs-14 lh-22 text-black-50 pb-2">
                    <a
                      className="text-color hover-underline d-block"
                      href="#"
                      target="_blank"
                    >
                      Software recommendations
                    </a>
                  </p>
                  <p className="fs-14 lh-22 text-black-50">
                    Ask questions about the site on{" "}
                    <a
                      className="text-color hover-underline"
                      href="#"
                      target="_blank"
                    >
                      meta
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* end card */}
            <div className="card">
              <div className="card-header" id="headingFive">
                <button
                  className="btn btn-link collapsed fs-15"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <span>More helpful links</span>
                  <i className="la la-angle-down collapse-icon" />
                </button>
              </div>
              <div
                id="collapseFive"
                className="collapse"
                aria-labelledby="headingFive"
                data-parent="#accordion-two"
              >
                <div className="card-body">
                  <p className="fs-14 lh-22 text-black-50 pb-2">
                    Find more information about{" "}
                    <a
                      className="text-color hover-underline"
                      href="#"
                      target="_blank"
                    >
                      how to ask a good question here
                    </a>
                  </p>
                  <p className="fs-14 lh-22 text-black-50">
                    Visit the{" "}
                    <a
                      className="text-color hover-underline"
                      href="#"
                      target="_blank"
                    >
                      help center
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* end card */}
          </div>
          {/* end accordion */}
        </div>
        {/* end sidebar */}
      </div>
    )
}

export default RightNav;