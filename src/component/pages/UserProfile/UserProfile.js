import React from 'react'
import RarestBadges from './Badges'
import Header from '../Header'
import Footer from '../Footer'
import TrendingQuestion from '../HomePage/TrandingQuestion'
import UserPanel from './PanelUser'
import UserActivity from './UserActivity'
import NumberAchievement from '../NumberAchievement'
import TrendingTags from '../TrendingTags'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { profileById } from '../../../Context/query'
import { useState } from 'react'

export default function UserProfile() {
  const params = useParams();
  const [data, setData] = useState(); 
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = React.useState(0);

  console.log(data, "params");

  useEffect(() => {
    getProfile();
  }, [params.id])

  async function getProfile() { 
    if (params.id) {
      const user = await profileById(params.id);
      setData(user);
      setFollowingCount(user.stats.totalFollowing);
      setFollowerCount(user.stats.totalFollowers);
    }
  };

  const replaceUrl = (e) => {
    const str = e && e.startsWith("ipfs://");
    if (str) {
        const res = 'https://superfun.infura-ipfs.io/ipfs/' + e.slice(7);
        return res;
    }
    return e;
}

  return (
    <>
      <section className="hero-area bg-white shadow-sm overflow-hidden pt-60px">
        {/* <span className="stroke-shape stroke-shape-1" />
        <span className="stroke-shape stroke-shape-2" />
        <span className="stroke-shape stroke-shape-3" />
        <span className="stroke-shape stroke-shape-4" />
        <span className="stroke-shape stroke-shape-5" />
        <span className="stroke-shape stroke-shape-6" /> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-content">
                <div className="media media-card align-items-center shadow-none p-0 mb-0 rounded-0 bg-transparent">
                  <div className="media-img media--img">
                    <img src={ data?.picture != null ? replaceUrl(data?.picture?.original?.url) : '/assets/images/bg.png'} alt="avatar" />
                  </div>
                  <div className="media-body">
                    <h5>{data && data?.name != null ? data?.name : data?.handle}</h5>
                    <small className="meta d-block lh-20 pb-2">
                      <span>{data && data?.bio != null ? data?.bio : ""}</span>
                    </small>
                    <div className="stats fs-14 fw-medium d-flex align-items-center lh-18">
                      <span className="text-black pr-2" title="Reputation">
                      {data?.stats?.totalPublications}
                      </span>
                      <span
                        className="pr-2 d-inline-flex align-items-center"
                        title="Gold"
                      >
                        <span className="ball ml-1 gold" />
                         {data?.stats?.totalPosts}
                      </span>
                      <span
                        className="pr-2 d-inline-flex align-items-center"
                        title="Silver"
                      >
                        <span className="ball ml-1 silver" />
                         {data?.stats?.totalComments}
                      </span>
                      <span
                        className="pr-2 d-inline-flex align-items-center"
                        title="Bronze"
                      >
                        <span className="ball ml-1" />
                         {data?.stats?.totalMirrors}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-btn-box text-right py-3">
                <a
                  href="setting.html"
                  className="btn theme-btn theme-btn-outline theme-btn-outline-gray"
                >
                  <i className="la la-gear mr-1" /> Edit Profile
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <ul
                className="nav nav-tabs generic-tabs generic--tabs generic--tabs-2 mt-4"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="user-profile-tab"
                    data-toggle="tab"
                    href="#user-profile"
                    role="tab"
                    aria-controls="user-profile"
                    aria-selected="true"
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="user-activity-tab"
                    data-toggle="tab"
                    href="#user-activity"
                    role="tab"
                    aria-controls="user-activity"
                    aria-selected="false"
                  >
                    Activity
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="user-details-area pt-30px pb-60px">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="user-profile"
                  role="tabpanel"
                  aria-labelledby="user-profile-tab"
                >
                  <div className="user-panel-main-bar">
                    <div className="user-panel mb-30px">
                      <p className="pb-2">
                        I am a programmer. My principal language is C++. I've also
                        done commercial work in Java, C, Perl, Python, Javascript
                        and APL. I've also been known to dabble in lisp, Haskell,
                        assembler (ARM, x86, amd64) and probably a few other
                        languages that haven't left as big a mark.
                      </p>
                      <p className="pb-2">
                        Programmer at{" "}
                        <a href="#" className="text-color hover-underline">
                          Bloomberg
                        </a>
                        . Posts and commments are my opinions and are not sponsored
                        or endorsed by my employer.
                      </p>
                      <p>
                        If my answers helped you can{" "}
                        <a href="#" className="text-color hover-underline">
                          buy me a coffee.
                        </a>
                      </p>
                    </div>
                    <div className="user-panel mb-30px pt-30px border-top border-top-gray">
                      <ul className="generic-list-item generic-list-item-bullet">
                        <li className="pl-3">
                          <a href="#" className="d-inline-block">
                            ardensmith.com
                          </a>
                        </li>
                        <li className="pl-3">
                          <a href="#" className="d-inline-block">
                            Facebook
                          </a>
                        </li>
                        <li className="pl-3">
                          <a href="#" className="d-inline-block">
                            Twitter
                          </a>
                        </li>
                        <li className="pl-3">
                          <a href="#" className="d-inline-block">
                            Instagram
                          </a>
                        </li>
                      </ul>
                    </div>
                    <UserPanel />

                    <div className="user-panel mb-30px">
                      <div className="bg-gray p-3 rounded-rounded d-flex align-items-center justify-content-between">
                        <h3 className="fs-17">
                          Top posts <span>(865)</span>
                        </h3>
                      </div>
                      <div className="vertical-list">
                        <div className="item p-0">
                          <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                            <div className="votes py-2 answered-accepted">
                              <div
                                className="vote-block d-flex align-items-center justify-content-between"
                                title="Votes"
                              >
                                <span className="vote-counts">6475</span>
                                <span className="vote-icon" />
                              </div>
                              <div
                                className="answer-block d-flex align-items-center justify-content-between"
                                title="Answers"
                              >
                                <span className="vote-counts">22</span>
                                <span className="answer-icon" />
                              </div>
                            </div>
                            <div className="media-body">
                              <h5>
                                <a href="question-details.html">
                                  How to make Git “forget” about a file that was
                                  tracked but is now in .gitignore?
                                </a>
                              </h5>
                              <small className="meta">
                                <span>May 12 '20</span>
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className="item p-0">
                          <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                            <div className="votes py-2 answered-accepted">
                              <div
                                className="vote-block d-flex align-items-center justify-content-between"
                                title="Votes"
                              >
                                <span className="vote-counts">4711</span>
                                <span className="vote-icon" />
                              </div>
                              <div
                                className="answer-block d-flex align-items-center justify-content-between"
                                title="Answers"
                              >
                                <span className="vote-counts">-2</span>
                                <span className="answer-icon" />
                              </div>
                            </div>
                            <div className="media-body">
                              <h5>
                                <a href="question-details.html">
                                  Undoing a git rebase
                                </a>
                              </h5>
                              <small className="meta">
                                <span>May 12 '20</span>
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className="item p-0">
                          <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                            <div className="votes py-2 answered-accepted">
                              <div
                                className="vote-block d-flex align-items-center justify-content-between"
                                title="Votes"
                              >
                                <span className="vote-counts">4448</span>
                                <span className="vote-icon" />
                              </div>
                              <div
                                className="answer-block d-flex align-items-center justify-content-between"
                                title="Answers"
                              >
                                <span className="vote-counts">11</span>
                                <span className="answer-icon" />
                              </div>
                            </div>
                            <div className="media-body">
                              <h5>
                                <a href="question-details.html">
                                  Difference between “git add -A” and “git add .”
                                </a>
                              </h5>
                              <small className="meta">
                                <span>May 12 '20</span>
                              </small>
                            </div>
                          </div>
                        </div>

                        <div className="view-more pt-3 px-3">
                          <a href="#" className="btn-text fs-15">
                            View all questions and answers{" "}
                            <i className="la la-arrow-right icon ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <RarestBadges />
                  </div>
                </div>
                <UserActivity />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="sidebar">
                <NumberAchievement />
                {/* end card */}
                <div className="card card-item">
                  <div className="card-body">
                    <h3 className="fs-17 pb-3">Trending Questions</h3>
                    <div className="divider">
                      <span />
                    </div>
                    <TrendingQuestion />
                    {/* end sidebar-questions */}
                  </div>
                </div>
                {/* end card */}
                <TrendingTags />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
