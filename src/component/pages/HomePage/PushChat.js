import React from 'react'
import * as PushAPI from "@pushprotocol/restapi";
import { Chat } from "@pushprotocol/uiweb";
import { LensAuthContext } from '../../../Context/MainContext';

const PushChat = ({ add }) => {
    const lensAuthContext = React.useContext(LensAuthContext);
    const { userPosts, update, profile } = lensAuthContext;
    const key = process.env.REACT_APP_PUSH_KEY;
    return (
        <div>
            <Chat
                account={profile.ownedBy} //user address
                supportAddress="0x73426923AF5FdaDa87c6a3662E3d9253b87AC084"
                apiKey={key}
                env="staging"
            />
        </div>
    )
}

export default PushChat