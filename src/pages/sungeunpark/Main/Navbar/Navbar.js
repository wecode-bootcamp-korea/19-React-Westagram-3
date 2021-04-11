import React, { Component } from "react";

import "@fortawesome/fontawesome-free/js/all.js";
import "./Navbar.scss";

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
                <button>
                  <img
                    src="/data/sungeunpark/images/explore.png"
                    alt="explore"
                  />
                </button>
                <button>
                  <img src="/data/sungeunpark/images/heart.png" alt="heart" />
                </button>
                <button>
                  <img
                    src="/data/sungeunpark/images/profile.png"
                    alt="profile"
                  />
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
