import React from "react";
import { Image } from "react-bootstrap";
import layout from '../Assets/images/layout.svg'
import plus from '../Assets/images/plus.svg'
import mrlynx from '../Assets/images/my.lynx.svg'
import chats from '../Assets/images/chats.svg'
import group from '../Assets/images/groups.svg'
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="icon-container">
        <Image src={layout} className="icon" />
      </div>
      <div className="icon-container">
        <Image src={plus} className="icon" />
      </div>
      <div className="icon-container">
        <Image src={mrlynx} className="icon" />
        <p>Mr.Lynx</p>
      </div>
      <div className="icon-container">
        <Link to="/profile-card">
        <Image src={chats} className="icon" />
        <p>Chats</p>
        </Link>
      </div>
      <div className="icon-container">
        <Image src={group} className="icon" />
        <p>Groups</p>
      </div>
    </div>
  );
};

export default Sidebar;
