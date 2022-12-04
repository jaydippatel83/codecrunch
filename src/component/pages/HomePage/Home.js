import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import RelatedQuestion from './RelatedQuestion';
import TrendingQuestion from './TrandingQuestion';
import HomePageQuestion from './HomepageQuestion';
import JobsOnHomeapge from './JobsHomePage';
import TagsOnHomepage from './TagsHomepage';
import UsersOnHomepage from './UserOnHome';
import BadgesOnHomepage from './BadgesOnHome';
import Cards from '../Cards';
import NumberAchievement from '../NumberAchievement';
import TrendingTags from '../TrendingTags';
import { useNavigate } from 'react-router-dom';

import { ethers } from 'ethers';
import useInfiniteScroll from '../../useInfiniteScroll';
import { posts } from '../../../lensprotocol/post/get-post';
import { LensAuthContext } from '../../../Context/MainContext';
import { getPublicationByLatest } from '../../../lensprotocol/post/explore/explore-publications';
import TopBanner from './TopBanner';
import Sidebar from './Sidebar';
import PushChat from './PushChat';

export default function Home() { 

  return ( 
      <div> 
        <TopBanner/>
        <Sidebar/>
          <Cards  /> 
          <div
            id="back-to-top"
            data-toggle="tooltip"
            data-placement="top"
            title="Return to top"
          >
            <i className="la la-arrow-up" />
          </div> 
          <PushChat/>
      </div> 
  )
}
