import React from 'react'
import { useNavigate } from 'react-router-dom';

function TopBanner() {
    const navigate = useNavigate(); 

    const handleNavigate = () => {
        navigate('/ask');
      }

    return (
        <section className="hero-area pt-80px pb-80px hero-bg-1">
            <div className="overlay" />
            <span className="stroke-shape stroke-shape-1" />
            <span className="stroke-shape stroke-shape-2" />
            <span className="stroke-shape stroke-shape-3" />
            <span className="stroke-shape stroke-shape-4" />
            <span className="stroke-shape stroke-shape-5" />
            <span className="stroke-shape stroke-shape-6" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-9">
                        <div className="hero-content">
                            <h2 className="section-title pb-3 text-white">
                               Developer first Q&amp;A platform
                            </h2>
                            <p className="section-desc text-white">
                            On a mission to make sure developers should gain real value for answering questions, 
                            <br />   sharing knowledge and open source contributions.
                               
                            </p>

                            <div className="hero-btn-box py-4">
                                <a onClick={handleNavigate} className="btn theme-btn theme-btn-white"
                                >
                                    Ask a Question <i className="la la-arrow-right icon ml-1" />
                                </a>
                            </div>
                        </div>
                        {/* end hero-content */}
                    </div>
                    {/* end col-lg-9 */}
                    <div className="col-lg-3">
                        <div className="hero-list hero-list-bg">
                            <div className="d-flex align-items-center pb-30px">
                                <img
                                    src="../../../assets/images/anonymousHeroAnswers.svg"
                                    alt="question icon"
                                    className="mr-3"
                                />
                                <p className="fs-15 text-white lh-20">
                                Ask Questions! Help others by Answering!
                                </p>
                            </div>
                            <div className="d-flex align-items-center pb-30px">
                                <img
                                    src="../../../assets/images/anonymousHeroQuestions.svg"
                                    alt="question answer icon"
                                    className="mr-3"
                                />
                                <p className="fs-15 text-white lh-20">On chain profile reputation for your skills!</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <img
                                    src="../../../assets/images/anonymousHeroUpvote.svg"
                                    alt="vote icon"
                                    className="mr-3"
                                />
                                <p className="fs-15 text-white lh-20">
                                Best answers earn "Crypto" rather than "illusionary value of Upvotes"! 😉
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end row */}
            </div>
            {/* end container */}
        </section>
    )
}

export default TopBanner