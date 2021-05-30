import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LinkedinImg from './imgs/linkedin.svg';

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
            <div className="header__right"></div> 
        </div>
    )
}

export default Header
