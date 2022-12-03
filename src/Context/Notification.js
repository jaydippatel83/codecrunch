import React, { useState, createContext } from "react";
// import EpnsSDK from "@epnsproject/backend-sdk-staging";
import * as EpnsAPI from "@epnsproject/sdk-restapi";
import { api, utils } from "@epnsproject/frontend-sdk-staging";
import { Dashboard } from "@mui/icons-material";
import { ethers } from "ethers";

export const NotificationContext = createContext(undefined);

export const NotificationContextProvider = (props) => {
  const [notificationItems, setNotificationItems] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  const CHANNEL_PK = process.env.REACT_APP_KEY; // the private key of the address which you used to create a channel// Initialise the SDK
  // const epnsSdk = new EpnsSDK(CHANNEL_PK);

  // const signer = new ethers.Wallet(CHANNEL_PK);


  // console.log(epnsSdk,"epnsSdk");

  async function fetchNotifications(account) {


    if (account) {
      // define the variables required to make a request
      const walletAddress = account;
      const pageNumber = 1;
      const itemsPerPage = 20;

      // fetch the notifications
      const { count, results } = await api.fetchNotifications(
        walletAddress,
        itemsPerPage,
        pageNumber
      ); 
      // parse all the fetched notifications
      const parsedResponse = utils.parseApiResponse(results);
      setNotificationItems(parsedResponse);
    }
  }

  async function sendNotifications(data) {
      
    const title = data.title; 
    const signer = new ethers.Wallet(CHANNEL_PK); 
    // const signer = provider.getSigner();
    try {
      // const tx = await epnsSdk.sendNotification(
      //   data.to,
      //   title,
      //   data.message,
      //   "",
      //   "",
      //   3, //this is the notificationType
      //   "", // a url for users to be redirected to
      //   "",
      //   null //this can be left as null
      // );

      const apiResponse = await EpnsAPI.payloads.sendNotification({
        signer,
        type: 3, // target
        identityType: 2, // direct payload
        notification: {
          title: title,
          body: data.message
        },
        payload: {
          title: title,
          body: data.message,
          cta: '',
          img: ''
        },
        recipients: `eip155:80001:${data.to}`, // recipient address
        channel: 'eip155:80001:0x11DfA2f073D303bAD0295df27a0F748290D39C5E', // your channel address
        env: 'staging'
      });  

      setIsUpdated(!isUpdated);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <NotificationContext.Provider
      value={{
        fetchNotifications,
        sendNotifications,
        notificationItems,
        isUpdated,
      }}
      {...props}
    >
      {props.children}
    </NotificationContext.Provider>
  );
};