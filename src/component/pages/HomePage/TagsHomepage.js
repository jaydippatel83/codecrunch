import React from "react";

function TagsOnHomepage(){
    return(
        <div
                        className="tab-pane fade"
                        id="tags"
                        role="tabpanel"
                        aria-labelledby="tags-tab"
                      >
                        <div className="filters pb-4">
                          <h3 className="fs-17 fw-medium pb-2">Tags</h3>
                          <p className="fs-15 lh-24 pb-4">
                            A tag is a keyword or label that categorizes your question
                            with other, similar questions. Using the right tags makes it
                            easier for others to find and answer your question.
                          </p>
                          <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <form method="post" className="flex-grow-1 mr-3">
                              <div className="form-group mb-0">
                                <input
                                  className="form-control form--control form-control-sm h-auto lh-34"
                                  type="text"
                                  name="search"
                                  placeholder="Filter by tag name..."
                                />
                                <button className="form-btn" type="button">
                                  <i className="la la-search" />
                                </button>
                              </div>
                            </form>
                            <div className="filter-option-box w-20">
                              <select className="select-container mt-2">
                                <option value="popular" selected="selected">
                                  Popular
                                </option>
                                <option value="name">Name</option>
                                <option value="new">New</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="tags-main-bar">
                          <div className="tags-snippet">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="card card-item">
                                  <div className="card-body">
                                    <div className="tags pb-1">
                                      <a
                                        href="#"
                                        className="tag-link tag-link-md tag-link-blue"
                                      >
                                        javascript
                                      </a>
                                    </div>
                                    <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                                      For questions regarding programming in ECMAScript
                                      (JavaScript/JS) and its various
                                      dialects/implementations (excluding ActionScript).
                                      Please include all relevant tags on your question;
                                      e.g., [node.js],…
                                    </p>
                                    <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                                      <p className="pr-1 lh-18">2177849 questions</p>
                                      <p className="lh-18">
                                        901 asked today, 5319 this week
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="card card-item">
                                  <div className="card-body">
                                    <div className="tags pb-1">
                                      <a
                                        href="#"
                                        className="tag-link tag-link-md tag-link-blue"
                                      >
                                        java
                                      </a>
                                    </div>
                                    <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                                      a high-level programming language. Use this tag
                                      when you're having problems using or understanding
                                      the language itself. This tag is rarely used alone
                                      and is most often used in conjunction with…
                                    </p>
                                    <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                                      <p className="pr-1 lh-18">2177849 questions</p>
                                      <p className="lh-18">
                                        901 asked today, 5319 this week
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                          <div className="pager d-flex align-items-center justify-content-between pt-10px pb-30px">
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
                                Showing 1-10 results of 50,577 tags
                              </p>
                            </div>
                            <div className="filter-option-box w-20">
                              <select className="select-container">
                                <option selected="" value={10}>
                                  10 per page
                                </option>
                                <option value={20}>20 per page</option>
                                <option value={30}>30 per page</option>
                                <option value={40}>40 per page</option>
                                <option value={50}>50 per page</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
    )
}

export default TagsOnHomepage;