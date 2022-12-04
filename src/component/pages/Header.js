import React from "react";
import { useState } from 'react';
import { api, utils } from "@epnsproject/frontend-sdk-staging";
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
// import { ToggleBox } from './ToggleBox' 
import WorldCoin from "./WorldCoinLogin";
import { ethers } from 'ethers'
import { LensAuthContext } from "../../Context/MainContext";
import { Button, CircularProgress, Divider, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { faPersonRifle } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/system";

import { toast } from 'react-toastify';
import { disableDispatFun, enableDispatFun } from "../../lensprotocol/dispatcher/disable-dispatcher";
import { useNavigate } from "react-router-dom";
import NotificationsPopover from "../../Context/NotificationsPopover";
import PushChat from "./HomePage/PushChat";
export default function Header() {

  const lensAuthContext = React.useContext(LensAuthContext);
  const { profile, login, disconnectWallet, setUpdate, update } = lensAuthContext;

  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const [open, setOpen] = React.useState(false);
  const [searchData, setSearchData] = React.useState([]);
  
  const [keyword, setKeyword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleNavigate = (id) => {
    navigate(`/profile/${id}`)
    setSearchData("");
  } 

  const navigateToHome = () => {
    navigate('/');
  }

  const handleNavigateMessage = () => {
    // navigate('/messages');
  }


  // const handleSearch = async (e) => {
  //   setKeyword(e);
  //   const res = await search(e);
  //   setSearchData(res.search.items)
  // }

  const handleClear = () => {
    setSearchData("");
    setKeyword("");
  }

  const handleEnableDispatcher = async (id) => {
    if (!profile) {
      toast.error("Please Login!");
      return;
    } else {
      setLoading(true);
      const res = await enableDispatFun(id);
      setLoading(false);
      toast.success("Successfully Enable Dispatcher!")
      setUpdate(!update);
    }
  }

  const handleDesableDispatcher = async (id) => {
    if (!profile) {
      toast.error("Please Login!");
      return;
    } else {
      setLoading(true);
      const res = await disableDispatFun(id);
      setLoading(false);
      toast.success("Successfully Disable Dispatcher!")
      setUpdate(!update);
    }
  }



  return (

    <header className="header-area bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <div className="logo-box">
              <a onClick={navigateToHome} className="logo">
                <img width="200px" src="https://superfun.infura-ipfs.io/ipfs/QmW7DVssAboAGp6WdMEb19mkKH6VMZGvAm5fDyo739YKnF" alt="logo" />
              </a>
              <div className="user-action">
                <div
                  className="search-menu-toggle icon-element icon-element-xs shadow-sm mr-1"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Search"
                >
                  <i className="la la-search" />
                </div>
                <div
                  className="off-canvas-menu-toggle icon-element icon-element-xs shadow-sm"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Main menu"
                >
                  <i className="la la-bars" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-10 ">
            <div className="menu-wrapper border-left border-left-gray pl-4 justify-content-end">
              <nav className="menu-bar ml-auto">
                <ul>
                  <li>
                    <a  onClick={navigateToHome}>
                      Home
                    </a>
                  </li>
                  <li className="is-mega-menu">
                    <a  onClick={handleNavigateMessage}>
                      messages  
                    </a>

                  </li> 
                </ul>
              </nav>
              <form method="post" className="mr-4">
                <div className="form-group mb-0">
                  <input
                    className="form-control form--control form--control-bg-gray"
                    type="text"
                    name="search"
                    placeholder="Type your search words..."
                  />
                  <button className="form-btn" type="button">
                    <i className="la la-search" />
                  </button>
                </div>
              </form>
              
              <nav className="menu-bar ml-auto"> 
                <ul>
                  <li>
                  <Box sx={{ flexGrow: 0, display:'flex',justifyContent:'space-around' }}>
                    
                  <NotificationsPopover/>
                  {
                    profile &&
                    <Tooltip title={profile.name ? profile.name : profile.handle}>
                      <div onClick={handleOpenUserMenu} style={{ cursor: 'pointer' }} className="d-flex">
                        <img style={{ width: '34px', height: '34px', borderRadius: '50%' }} alt="" src={profile?.picture != null ? profile?.picture?.original?.url : "https://superfun.infura-ipfs.io/ipfs/QmRY4nWq3tr6SZPUbs1Q4c8jBnLB296zS249n9pRjfdobF"} />
                        {
                                     profile && <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                                         <p className='text-center m-1'>{profile.name != null ? profile.name : profile.handle}</p>
                                     </Box>
                                 }
                      </div>
                    </Tooltip>
                  }
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {
                      profile && <Box sx={{ my: 1.5, px: 2.5, cursor: 'pointer' }} onClick={() => handleNavigate(profile.id)} >

                        <Typography variant="subtitle1" noWrap>
                          {profile.name && profile.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
                          @{profile.handle}
                        </Typography>
                      </Box>
                    }
                    <Divider />
                    {/* <ProfileCreation /> */}
                    {
                      profile && profile.dispatcher != null ? <MenuItem onClick={() => handleDesableDispatcher(profile.id)} className='m-2'> {loading ? <CircularProgress size={20} /> : "Disable Dispatcher"}  </MenuItem> : <MenuItem className='m-2' onClick={() => handleEnableDispatcher(profile.id)}  >{loading ? <CircularProgress size={20} /> : "Enable Dispatcher"}  </MenuItem>
                    }
                    {
                      profile && <MenuItem className='m-2' onClick={disconnectWallet}> Logout </MenuItem>
                    }


                  </Menu>
                </Box>
                    {
                      !profile && <Button className='m-2' style={{ textDecoration: "none", background: "aliceblue", textTransform: 'capitalize' }} onClick={login}>
                        Login
                      </Button>
                      //    <div className="nav-right-button">
                      //   <a
                      //     style={{ textDecoration: "none", background: "aliceblue" ,textTransform: 'capitalize'}}
                      //     href="#"
                      //     className="btn theme-btn theme-btn-outline mr-2"
                      //     data-toggle="modal"
                      //     data-target="#loginModal"
                      //   >
                      //     <i style={{ color: 'blue' }} className="la la-sign-in mr-1" /> {domain}
                      //   </a>
                      // </div> 
                    } 
                     
                    {/* <ul style={{ width: '267px' }} className="dropdown-menu-item">
                      <li  >  */}
                    {/* </li>
                      <li onClick={requestAccount} >
                        <a style={{ fontWeight: "600", marginBottom: '12px', wordSpacing: '3px', letterSpacing: '1px', fontSize: '18px' }}>Login with ENS</a>
                      </li>
                      <li>
                        <WorldCoin />
                      </li>
                    </ul> */}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="off-canvas-menu custom-scrollbar-styled">
        <div
          className="off-canvas-menu-close icon-element icon-element-sm shadow-sm"
          data-toggle="tooltip"
          data-placement="left"
          title="Close menu"
        >
          <i className="la la-times" />
        </div>
        <ul className="generic-list-item off-canvas-menu-list pt-90px">
          <li>
            <a href="#">Home</a>
            <ul className="sub-menu">
              <li>
                <a href="index.html">Home - landing</a>
              </li>
              <li>
                <a href="home-2.html">Home - main</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul className="sub-menu">
              <li>
                <a href="user-profile.html">user profile</a>
              </li>
              <li>
                <a href="notifications.html">Notifications</a>
              </li>
              <li>
                <a href="referrals.html">Referrals</a>
              </li>
              <li>
                <a href="setting.html">settings</a>
              </li>
              <li>
                <a href="ask-question.html">ask question</a>
              </li>
              <li>
                <a href="question-details.html">question details</a>
              </li>
              <li>
                <a href="about.html">about</a>
              </li>
              <li>
                <a href="revisions.html">revisions</a>
              </li>
              <li>
                <a href="category.html">category</a>
              </li>
              <li>
                <a href="companies.html">companies</a>
              </li>
              <li>
                <a href="company-details.html">company details</a>
              </li>
              <li>
                <a href="careers.html">careers</a>
              </li>
              <li>
                <a href="career-details.html">career details</a>
              </li>
              <li>
                <a href="contact.html">contact</a>
              </li>
              <li>
                <a href="faq.html">FAQs</a>
              </li>
              <li>
                <a href="pricing-table.html">pricing tables</a>
              </li>
              <li>
                <a href="error.html">page 404</a>
              </li>
              <li>
                <a href="terms-and-conditions.html">Terms &amp; conditions</a>
              </li>
              <li>
                <a href="privacy-policy.html">privacy policy</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">blog</a>
            <ul className="sub-menu">
              <li>
                <a href="blog-grid-no-sidebar.html">grid no sidebar</a>
              </li>
              <li>
                <a href="blog-left-sidebar.html">blog left sidebar</a>
              </li>
              <li>
                <a href="blog-right-sidebar.html">blog right sidebar</a>
              </li>
              <li>
                <a href="blog-single.html">blog detail</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="off-canvas-btn-box px-4 pt-5 text-center">
          <a
            href="#"
            className="btn theme-btn theme-btn-sm theme-btn-outline"
            data-toggle="modal"
            data-target="#loginModal"
          >
            <i className="la la-sign-in mr-1" /> Login
          </a>
          <span className="fs-15 fw-medium d-inline-block mx-2">Or</span>
          <a
            href="#"
            className="btn theme-btn theme-btn-sm"
            data-toggle="modal"
            data-target="#signUpModal"
          >
            <i className="la la-plus mr-1" /> Sign up
          </a>
        </div>
      </div>
      <div className="mobile-search-form">
        <div className="d-flex align-items-center">
          <form method="post" className="flex-grow-1 mr-3">
            <div className="form-group mb-0">
              <input
                className="form-control form--control pl-40px"
                type="text"
                name="search"
                placeholder="Type your search words..."
              />
              <span className="la la-search input-icon" />
            </div>
          </form>
          <div className="search-bar-close icon-element icon-element-sm shadow-sm">
            <i className="la la-times" />
          </div>
        </div>
      </div>
      <div className="body-overlay" />
    </header>


  )
}

