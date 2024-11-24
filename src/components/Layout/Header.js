import React from "react";
import logo from '../Assets/images/logo.svg';
import Suggestions from "../ChatBox/Suggestions";
import { Search as SearchIcon, Send as SendIcon } from '@mui/icons-material'; // Import MUI icons
import MicIcon from '@mui/icons-material/Mic';
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Mr. Lynx Logo" className="logo" />
      </div>
      <h1 className="title">Hey, Let me help you find the perfect expert!</h1>
      <div className="search-bar">
        <div className="search-icon">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Search or ask anything from Mr. Lynx"
        />
        <button className="search-button">
          <MicIcon className="mic-icon" />  
          <SendIcon className="send-icon" />
        </button>
      </div>
      <Suggestions />
    </div>
  );
};

export default Header;
