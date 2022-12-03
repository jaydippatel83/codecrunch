import React from "react";

function BadgesOnHomepage (){
    return(
<div
                        className="tab-pane fade"
                        id="badges"
                        role="tabpanel"
                        aria-labelledby="badges-tab"
                      >
                        <div className="filters pb-4">
                          <h3 className="fs-17 fw-medium pb-2">Badges</h3>
                          <p className="fs-15 lh-24 pb-4">
                            Besides gaining reputation with your questions and answers,
                            you receive badges for being especially helpful. Badges
                            appears on your profile page, questions &amp; answers.
                          </p>
                          <div className="filter-option-box w-20">
                            <select className="select-container">
                              <option value="all" selected="selected">
                                All
                              </option>
                              <option value="bronze">Bronze</option>
                              <option value="silver">Silver</option>
                              <option value="gold">Gold</option>
                            </select>
                          </div>
                        </div>
                        <div className="badges-main-bar">
                          <div className="badges-snippet">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="card card-item">
                                  <div className="card-body p-3">
                                    <div className="badge-item">
                                      <a
                                        href="#"
                                        className="badge badge-md badge-dark d-inline-flex align-items-center"
                                      >
                                        <span className="ball" /> Altruist
                                      </a>
                                      <span className="item-multiplier fs-13 fw-medium">
                                        <span>×</span>
                                        <span>32924</span>
                                      </span>
                                      <p className="fs-13 lh-18 pt-2 text-black-50">
                                        First bounty you manually award on another
                                        person's question
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="card card-item">
                                  <div className="card-body p-3">
                                    <div className="badge-item">
                                      <a
                                        href="#"
                                        className="badge badge-md badge-dark d-inline-flex align-items-center"
                                      >
                                        <span className="ball" /> Analytical
                                      </a>
                                      <span className="item-multiplier fs-13 fw-medium">
                                        <span>×</span>
                                        <span>43587</span>
                                      </span>
                                      <p className="fs-13 lh-18 pt-2 text-black-50">
                                        Visited every section of the FAQ
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="card card-item">
                                  <div className="card-body p-3">
                                    <div className="badge-item">
                                      <a
                                        href="#"
                                        className="badge badge-md badge-dark d-inline-flex align-items-center"
                                      >
                                        <span className="ball" /> Announcer
                                      </a>
                                      <span className="item-multiplier fs-13 fw-medium">
                                        <span>×</span>
                                        <span>227641</span>
                                      </span>
                                      <p className="fs-13 lh-18 pt-2 text-black-50">
                                        Share a link to a post later visited by 25
                                        unique IP addresses
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 pb-40px">
                                <div className="collapse" id="collapseMoreBadges">
                                  <div className="row">

                                  </div>
                                </div>
                                <a
                                  className="collapse-btn btn theme-btn theme-btn-sm text-white w-100"
                                  data-toggle="collapse"
                                  href="#collapseMoreBadges"
                                  role="button"
                                  aria-expanded="false"
                                  aria-controls="collapseMoreBadges"
                                >
                                  <span className="collapse-btn-hide">
                                    Show more
                                    <i className="la la-angle-down ml-1 fs-11" />
                                  </span>
                                  <span className="collapse-btn-show">
                                    Show less
                                    <i className="la la-angle-up ml-1 fs-11" />
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
    )
}

export default BadgesOnHomepage;