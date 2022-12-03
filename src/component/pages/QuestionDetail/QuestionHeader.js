import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { LensAuthContext } from '../../../Context/MainContext';
import { getpublicationById } from '../../../lensprotocol/post/get-publicationById';

function QuestionHeader({ data }) { 

    return (
        <div className="question-highlight">
            <div className="media media-card shadow-none rounded-0 mb-0 bg-transparent p-0">
                <div className="media-body">
                    <h5 className="fs-20">
                        <a >
                            {data?.metadata?.content}
                        </a>
                    </h5>
                    <div className="meta d-flex flex-wrap align-items-center fs-13 lh-20 py-1">
                        <div className="pr-3">
                            <span>Asked</span>
                            <span className="text-black">{moment(data?.createdAt, "YYYYMMDD").fromNow()}</span>
                        </div> 
                        <div className="pr-3">
                            <span className="pr-1">Answers</span>
                            <span className="text-black">{data?.stats?.totalAmountOfComments}</span>
                        </div>
                    </div>
                    <div className="tags">
                        {
                            data?.metadata?.tags.map((e, i) => {
                                return (
                                    <a key={i} className="tag-link">
                                        {e}
                                    </a>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            {/* end media */}
        </div>
    )
}

export default QuestionHeader