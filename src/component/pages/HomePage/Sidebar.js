import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import NumberAchievement from '../NumberAchievement'
import TrendingTags from '../TrendingTags'
import BadgesOnHomepage from './BadgesOnHome'
import HomePageQuestion from './HomepageQuestion'
import JobsOnHomeapge from './JobsHomePage'
import RelatedQuestion from './RelatedQuestion'
import TagsOnHomepage from './TagsHomepage'
import TrendingQuestion from './TrandingQuestion'
import UsersOnHomepage from './UserOnHome'
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
  return (
    <section className="question-area pt-80px pb-40px">
    <div className="container">
      <div className="row">
        <div className="col-lg-2">
          <div className="sidebar pb-45px position-sticky top-0 mt-2">
            <ul className="generic-list-item generic-list-item-highlight fs-15">
              <li className="lh-26 active">
                <a href="home-2.html">
                  {/* <i className="la la-home mr-1 text-black" />  */}
                  <FontAwesomeIcon className='la la-home mr-1 text-black' icon={faHouse} />
                  Home
                </a>
              </li>
              <li className="lh-26">
                <a >
                  <i className="la la-flask mr-1 text-black" /> Solidity
                </a>
              </li>
              <li className="lh-26">
                <a >
                  <i className="la la-pencil mr-1 text-black" /> Rust
                </a>
              </li>
              <li className="lh-26">
                <a >
                  <i className="la la-globe mr-1 text-black" /> Cairo
                </a>
              </li>
              <li className="lh-26">
                <a >
                  <i className="la la-book-open mr-1 text-black" /> ReactJs
                </a>
              </li>
              <li className="lh-26">
                <a >
                  <i className="la la-laptop mr-1 text-black" /> NodeJs
                </a>
              </li>
              <li className="lh-26">
                <a >
                  <i className="la la-dumbbell mr-1 text-black" /> Go
                </a>
              </li>
              <li className="lh-26">
                <a >
                  <i className="la la-gavel mr-1 text-black" /> Polkadot
                </a>
              </li>
              <li className="lh-26">
                <a >
                  <i className="la la-briefcase mr-1 text-black" /> Cosmos
                </a>
              </li> 
            </ul>
          </div>
          {/* end sidebar */}
        </div>
        {/* end col-lg-2 */}
        <div className="col-lg-7">
          <div className="question-tabs mb-50px">
            <ul
              className="nav nav-tabs generic-tabs justify-content-center"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <div className="anim-bar" />
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="questions-tab"
                  data-toggle="tab"
                  href="#questions"
                  role="tab"
                  aria-controls="questions"
                  aria-selected="true"
                >
                  Questions
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="jobs-tab"
                  data-toggle="tab"
                  href="#jobs"
                  role="tab"
                  aria-controls="jobs"
                  aria-selected="false"
                >
                  Jobs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="tags-tab"
                  data-toggle="tab"
                  href="#tags"
                  role="tab"
                  aria-controls="tags"
                  aria-selected="false"
                >
                  Tags
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="users-tab"
                  data-toggle="tab"
                  href="#users"
                  role="tab"
                  aria-controls="users"
                  aria-selected="false"
                >
                  Users
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="badges-tab"
                  data-toggle="tab"
                  href="#badges"
                  role="tab"
                  aria-controls="badges"
                  aria-selected="false"
                >
                  Badges
                </a>
              </li>
            </ul>
            <div className="tab-content pt-40px" id="myTabContent">


              <HomePageQuestion />

              <JobsOnHomeapge />

              <TagsOnHomepage />

              <UsersOnHomepage />


              <BadgesOnHomepage />
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="sidebar">
            <NumberAchievement />
            <div className="card card-item">
              <div className="card-body">
                <h3 className="fs-17 pb-3">Related Questions</h3>
                <div className="divider">
                  <span />
                </div>
                <RelatedQuestion />
              </div>
            </div>
            <div className="card card-item">
              <div className="card-body">
                <h3 className="fs-17 pb-3">Trending Questions</h3>
                <div className="divider">
                  <span />
                </div>
                <TrendingQuestion />
              </div>
            </div>
            <TrendingTags />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Sidebar