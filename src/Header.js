import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LinkedinImg from './imgs/linkedin.svg';
import headerProfile from './imgs/header-profile.jpg';
import HeaderOption from './HeaderOption';

import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src={LinkedinImg} alt="" />
                <div className="header__search">
                     {/* search icon */}
                     <SearchIcon />
                     <input type="text" placeholder="Search"/>
                </div>
            </div> 
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Message" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar= { headerProfile } title="Me"/>
            </div> 
        </div>
    )
}

export default Header
