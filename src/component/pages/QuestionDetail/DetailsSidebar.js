import React from 'react'
import RelatedQuestion from '../HomePage/RelatedQuestion'
import NumberAchievement from '../NumberAchievement'
import TrendingTags from '../TrendingTags'

function DetailsSidebar() {
    return (
        <div className="col-lg-3">
            <div className="sidebar">
                <NumberAchievement />
                {/* end card */}
                <div className="card card-item">
                    <div className="card-body">
                        <div className="d-flex align-items-center pb-3">
                            <svg
                                className="mr-2"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="#6c727c"
                            >
                                <path d="M1 6l8 5 8-5V4L9 9 1 4c0-1.1.9-2 2-2h12c1.09 0 2 .91 2 2v10c0 1.09-.91 2-2 2H3c-1.09 0-2-.91-2-2V6z" />
                            </svg>
                            <h3 className="fs-17">Love this site?</h3>
                        </div>
                        <div className="divider">
                            <span />
                        </div>
                        <p className="fs-14 lh-20 py-3">
                            Get the{" "}
                            <span className="text-dark fw-medium">
                                weekly newsletter!
                            </span>{" "}
                            In it, you'll get:
                        </p>
                        <ul className="generic-list-item generic-list-item-bullet fs-14 pb-3">
                            <li className="lh-20">
                                The week's top questions and answers
                            </li>
                            <li className="lh-20">Important community announcements</li>
                            <li className="lh-20">Questions that need answers</li>
                        </ul>
                        <button className="btn theme-btn theme-btn-gray w-100">
                            Sign up for the digest
                        </button>
                        <p className="fs-14 pt-1 text-center">
                            See an example newsletter
                        </p>
                    </div>
                </div>
                {/* end card */}
                <div className="card card-item">
                    <div className="card-body">
                        <h3 className="fs-17 pb-3">Related Questions</h3>
                        <div className="divider">
                            <span />
                        </div>
                        <RelatedQuestion />
                    </div>
                </div>
                {/* end card */}
                <TrendingTags />
            </div>
        </div>
    )
}

export default DetailsSidebar