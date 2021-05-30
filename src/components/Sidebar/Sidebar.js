import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"
import backgroundImg from  "../../imgs/background.jpg";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={backgroundImg } alt=""/>
                <Avatar className="sidebar__avatar" />
                <h2>Amar Singh</h2>
                <h4>Software developer | JavaScript Enthusiast</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statNumber">111</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views of your post</p>
                    <p className="sidebar__statNumber">76</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>

            </div>
        </div>
    )
}

export default Sidebar
