import React, { useState, createContext, useEffect } from "react";
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";
import { api, utils } from "@epnsproject/frontend-sdk-staging";

const PK = process.env.REACT_APP_PK; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);
export const CodesterContext = createContext();

export const CodesterContextProvider = (props) => { 
    const sendNotification = async (type,title,msg,recipient) => {
      console.log('send notification called...');
        try {
            const apiResponse = await PushAPI.payloads.sendNotification({
                signer,
                type: type,
                identityType: 2,
                notification: {
                    title: `[SDK-TEST] notification TITLE:`,
                    body: `[sdk-test] notification BODY`
                },
                payload: {
                    title: title,
                    body: msg,
                    cta: '',
                    img: ''

                },
                recipients: recipient, // recipient address
                channel: '0xE9B4b5985fa998516A58D9449Fe53048f0Dd33aB', // your channel address
                env: 'staging'
            });
            console.log(apiResponse, 'api response');

        } catch (err) {
            console.error(err);
        }
    }


    async function fetchNotifications(recipient) {
        console.log(recipient, 'reci');
        // define the variables required to make a request
        const walletAddress = recipient;
        const pageNumber = 1;
        const itemsPerPage = 20;

        // fetch the notifications

        const { count, results } = await api.fetchNotifications(walletAddress, itemsPerPage, pageNumber)
        // console.log('fetchedNotifications-----', { results });


        // parse all the fetched notifications
        const parsedResponse = utils.parseApiResponse(results);
        console.log('parsedResponse----', parsedResponse);
        // setNotificationItems(parsedResponse);
        return parsedResponse;
    }



    return(
        <CodesterContext.Provider
        value={{
            sendNotification,
            fetchNotifications
        }}
        >
            {props.children}
        </CodesterContext.Provider>

    )

}


