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
                                Share &amp; grow knowledge with us!
                            </h2>
                            <p className="section-desc text-white">
                                If you are going to use a passage of Lorem Ipsum, you need to be
                                sure there
                                <br /> isn't anything embarrassing hidden in the middle of text.
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
                                    Anybody can ask a question
                                </p>
                            </div>
                            <div className="d-flex align-items-center pb-30px">
                                <img
                                    src="../../../assets/images/anonymousHeroQuestions.svg"
                                    alt="question answer icon"
                                    className="mr-3"
                                />
                                <p className="fs-15 text-white lh-20">Anybody can answer</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <img
                                    src="../../../assets/images/anonymousHeroUpvote.svg"
                                    alt="vote icon"
                                    className="mr-3"
                                />
                                <p className="fs-15 text-white lh-20">
                                    The best answers are voted up and rise to the top
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