import moment from 'moment';
import React from 'react'

function UserInfo({profile,time}) {

    const replaceUrl = (e) => {
        const str = e && e.startsWith("ipfs://");
        if (str) {
            const res = 'https://superfun.infura-ipfs.io/ipfs/' + e.slice(7);
            return res;
        }
        return e;
    }
    
    return (
        <div className="question-post-user-action">
            <div className="media media-card user-media owner align-items-center">
                <a href="user-profile.html" className="media-img d-block">
                <img src={ profile?.picture != null ? replaceUrl(profile?.picture?.original?.url) : '/assets/images/bg.png'} alt="avatar" />
                </a>
                <div className="media-body d-flex flex-wrap align-items-center justify-content-between">
                    <div>
                        <h5 className="pb-1">
                            <a href="user-profile.html">{profile?.name != null ? profile?.name : profile?.handle}</a>
                        </h5>
                        <div className="stats fs-12 d-flex align-items-center lh-18">
                            <span className="text-black pr-2">{profile?.stats?.totalPublications}</span>
                            <span className="pr-2 d-inline-flex align-items-center">
                                <span className="ball gold" />
                                {profile?.stats?.totalPosts}
                            </span>
                            <span className="pr-2 d-inline-flex align-items-center">
                                <span className="ball silver" />
                                {profile?.stats?.totalMirrors}
                            </span> 
                        </div>
                    </div>
                    <small className="meta d-block text-right">
                        <span className="text-black d-block lh-18">Asked</span>
                        <span className="d-block lh-18 fs-12">{moment(time, "YYYYMMDD").fromNow()}</span>
                    </small>
                </div>
            </div>
        </div>
    )
}

export default UserInfo