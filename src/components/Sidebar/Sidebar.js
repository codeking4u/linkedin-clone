import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"
import backgroundImg from  "../../imgs/background.jpg";

function Sidebar() {

    const recentItem = (topic) => {
        return (<div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p className="sidebar__hashTopic">{ topic }</p>
        </div>
        );
    };

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={backgroundImg } alt=""/>
                <Avatar className="sidebar__avatar" />
                <h2>Amar Singh</h2>
                <p>Software developer | JavaScript Enthusiast</p>
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
                { recentItem("jobseekers")}
                { recentItem("reactjs")}
                { recentItem("programming")}
                { recentItem("developer")}
            </div>
        </div>
    )
}

export default Sidebar
