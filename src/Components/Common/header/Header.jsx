import React from "react";
import "./Header.css";
import { IoLocationOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <IoLocationOutline className="absolute-center location-icon" />
              <div>Hyderabad</div>
            </div>
            <FaCaretDown className="absolute-center" />
          </div>
          <div className="location-search-seperator"></div>
          <div className="header-searchBar">
            <CiSearch className="absolute-center search-icon" />
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/data/user_profile_pictures/f4a/07a2f15cb11f7a4b612051506027ff4a.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            alt="Profile"
            className="header-profile-image"
          />
          <span className="header-username">Sankalp</span>
          <FaChevronDown className="absolute-center profile-options-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
