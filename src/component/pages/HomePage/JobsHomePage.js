import React from "react";

function JobsOnHomeapge(){
    return(
        <div
        className="tab-pane fade"
        id="jobs"
        role="tabpanel"
        aria-labelledby="jobs-tab"
      >
        <p className="fs-15 pb-2">
          <span className="fw-medium text-black">
            Developers first.
          </span>{" "}
          You’ll never receive recruiter spam or see fake job listings
          on our site.
        </p>
        <p className="fs-15 pb-4">
          <span className="fw-medium text-black">Find a job by</span>{" "}
          <a href="companies.html" className="btn-text">
            companies
            <i className="la la-arrow-right icon ml-1 fs-14" />
          </a>
        </p>
        <div className="filters pb-4">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <form method="post" className="flex-grow-1 mr-3">
              <div className="form-group mb-0">
                <input
                  className="form-control form--control form-control-sm h-auto lh-34"
                  type="text"
                  name="search"
                  placeholder="Type here to find jobs..."
                />
                <button className="form-btn" type="button">
                  <i className="la la-search" />
                </button>
              </div>
            </form>
            <div className="filter-option-box">
              <a
                className="btn theme-btn theme-btn-outline theme-btn-outline-gray"
                data-toggle="collapse"
                href="#collapseSearchAdvanced"
                role="button"
                aria-expanded="false"
                aria-controls="collapseSearchAdvanced"
              >
                <i className="la la-gear mr-1" /> Filters
              </a>
            </div>
          </div>
        </div>
        <div className="jobs-main-bar">
          <div className="jobs-snippet">
            <div className="media media-card media--card align-items-center">
              <div className="media-body border-left-0">
                <h5 className="pb-1">
                  <a href="career-details.html">
                    React Native Engineer at sustainable mobility
                    Start-up (m/f/x)
                  </a>
                </h5>
                <small className="meta d-block lh-20 pb-1">
                  <a href="company-details.html" className="author">
                    Fintech Firm
                  </a>
                  <span className="px-1">-</span>
                  <span>Amsterdam, Netherlands</span>
                  <span className="px-1">-</span>
                  <span>20 mins ago</span>
                </small>
                <small className="meta d-block lh-20">
                  <span className="pr-1 text-success fw-medium">
                    £30k - 50k
                  </span>
                  <span className="pr-1 text-success">| Equity</span>
                  <span className="pr-1 text-danger">Visa sponsor</span>
                  <span className="text-info">Paid relocation</span>
                </small>
                <div className="tags pt-2">
                  <a href="#" className="tag-link">
                    javascript
                  </a>
                  <a href="#" className="tag-link">
                    react-native
                  </a>
                  <a href="#" className="tag-link">
                    typescript
                  </a>
                  <a href="#" className="tag-link">
                    node.js
                  </a>
                </div>
              </div>
            </div>


          </div>
          <div className="pager d-flex flex-wrap align-items-center justify-content-between pt-30px pb-20px">
            <div>
              <nav aria-label="Page navigation example">
                <ul className="pagination generic-pagination pr-1">
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">
                        <i className="la la-arrow-left" />
                      </span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">
                        <i className="la la-arrow-right" />
                      </span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <p className="fs-13 pt-3">
                Showing 1-10 results of 1,577 jobs
              </p>
            </div>
          
          </div>
          <div className="related-links pb-4">
            <div className="related-links-item fs-13 lh-18 mb-1">
              <span className="text-black fw-medium pr-1">
                Popular Searches:
              </span>
              <ul className="generic-list-item generic-list-item-bullet generic-list-item--bullet d-inline">
                <li className="lh-18 mb-1 d-inline-block">
                  <a href="#" className="hover-underline">
                    javascript developer jobs
                  </a>
                </li>
                <li className="lh-18 mb-1 d-inline-block">
                  <a href="#" className="hover-underline">
                    postgresql developer jobs
                  </a>
                </li>
                <li className="lh-18 mb-1 d-inline-block">
                  <a href="#" className="hover-underline">
                    node.js developer jobs
                  </a>
                </li>
                <li className="lh-18 mb-1 d-inline-block">
                  <a href="#" className="hover-underline">
                    c# developer jobs
                  </a>
                </li>
                <li className="lh-18 mb-1 d-inline-block">
                  <a href="#" className="hover-underline">
                    reactjs developer jobs
                  </a>
                </li>
              </ul>
            </div>
           
            <div className="related-links-item fs-13 lh-18">
              <span className="text-black fw-medium pr-1">
                Top Technologies:
              </span>
              <ul className="generic-list-item generic-list-item-bullet generic-list-item--bullet d-inline">
                <li className="lh-18 mb-1 d-inline-block">
                  <a href="#" className="hover-underline">
                    sql developer jobs
                  </a>
                </li>
                <li className="lh-18 mb-1 d-inline-block">
                  <a href="#" className="hover-underline">
                    android developer jobs
                  </a>
                </li>
                <li className="lh-18 mb-1 d-inline-block">
                  <a href="#" className="hover-underline">
                    typescript developer jobs
                  </a>
                </li>
                <li className="lh-18 mb-1 d-inline-block">
                  <a href="#" className="hover-underline">
                    react-native developer jobs
                  </a>
                </li>
                <li className="lh-18 mb-1 d-inline-block">
                  <a href="#" className="hover-underline">
                    rust developer jobs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default JobsOnHomeapge;