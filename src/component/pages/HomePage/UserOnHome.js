import React from "react";

function UsersOnHomepage(){
    return(
        <div
        className="tab-pane fade"
        id="users"
        role="tabpanel"
        aria-labelledby="users-tab"
      >
        <div className="filters pb-4">
          <h3 className="fs-17 fw-medium pb-4">Users</h3>
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <form method="post" className="flex-grow-1 mr-3">
              <div className="form-group mb-0">
                <input
                  className="form-control form--control form-control-sm h-auto lh-34"
                  type="text"
                  name="search"
                  placeholder="Filter by user..."
                />
                <button className="form-btn" type="button">
                  <i className="la la-search" />
                </button>
              </div>
            </form>
            <div className="filter-option-box w-20 mt-2">
              <select className="select-container">
                <option value="reputation" selected="selected">
                  Reputation
                </option>
                <option value="new-users">New users</option>
                <option value="voters">Voters</option>
                <option value="editors">Editors</option>
                <option value="moderators">Moderators</option>
              </select>
            </div>
          </div>
        </div>
        <div className="users-main-bar">
          <div className="users-snippet">
            <div className="row">
              <div className="col-lg-6">
                <div className="media media-card p-3">
                  <a href="#" className="media-img d-inline-block">
                    <img
                      src="assets/images/company-logo.png"
                      alt="company logo"
                    />
                  </a>
                  <div className="media-body">
                    <h5 className="fs-16 fw-medium">
                      <a href="user-profile.html">Sector labs</a>
                    </h5>
                    <small className="meta d-block lh-24 pb-1">
                      <span>New York, United States</span>
                    </small>
                    <p className="fw-medium fs-15 text-black-50 lh-18">
                      1,200
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="media media-card p-3">
                  <a href="#" className="media-img d-inline-block">
                    <img
                      src="assets/images/company-logo2.png"
                      alt="company logo"
                    />
                  </a>
                  <div className="media-body">
                    <h5 className="fs-16 fw-medium">
                      <a href="user-profile.html">Barmar</a>
                    </h5>
                    <small className="meta d-block lh-24 pb-1">
                      <span>New York, United States</span>
                    </small>
                    <p className="fw-medium fs-15 text-black-50 lh-18">
                      1,200
                    </p>
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
                Showing 1-20 results of 50,577 users
              </p>
            </div>
            <div className="filter-option-box w-20">
              <select className="select-container">
                <option value={10}>10 per page</option>
                <option selected="" value={20}>
                  20 per page
                </option>
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

export default UsersOnHomepage;