import React, { Component } from "react";

import "@fortawesome/fontawesome-free/js/all.js";
import "./Navbar.scss";

import explore from "../../images/explore.png";
import heart from "../../images/heart.png";
import profile from "../../images/profile.png";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="dropdown_container">
          <nav id="navbar">
            <div className="navbar_container">
              <div className="navbar_title">
                <i className="fab fa-instagram"></i>
                <span className="navbar_title_logo"> | Westagram</span>
              </div>
              <div className="navbar_search">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="검색" />
              </div>
              <div className="navbar_icons">
                <button className="exploreBtn">
                  <img src={explore} alt="explore" />
                </button>
                <button className="heartBtn">
                  <img src={heart} alt="heart" />
                </button>
                <button className="profileBtn">
                  <img src={profile} alt="profile" />
                </button>
              </div>
            </div>
          </nav>
          <div className="search_dropdown_content_container">
            <div className="search_dropdown_content"></div>
          </div>
          <div className="profile_dropdown_content_container">
            <div className="profile_dropdown_content">
              <a href="#">프로필</a>
              <a href="#">저장됨</a>
              <a href="#">설정</a>
              <a href="#">로그아웃</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
