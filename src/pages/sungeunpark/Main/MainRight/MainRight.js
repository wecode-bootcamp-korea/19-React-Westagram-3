import React, { Component } from "react";
import "./MainRight.scss";

import userProfileImg from "../../images/user profile image.jpg";
import friendProfileImg from "../../images/friend_profile10.jpg";

class MainRight extends Component {
  render() {
    return (
      <div className="mainRight">
        <div className="main_right">
          <div className="main_right_user_profile">
            <div className="profile_container">
              <img src={userProfileImg} alt="user profile" />
              <div className="profile_name">
                <span className="id">elena_park33</span>
                <span className="name">박성은</span>
              </div>
            </div>
            <button>전환</button>
          </div>
          <div className="main_right_recommendation">
            <div className="title_container">
              <div>회원님을 위한 추천</div>
              <button>모두 보기</button>
            </div>
            <ul className="recommendation_list">
              <li className="recommendation_list_friend">
                <div className="recommendation_container">
                  <img src={friendProfileImg} alt="friend profile" />
                  <div className="friend_name">
                    <span className="id">sungeunpark</span>
                    <span className="name">회원님을 위한 추천</span>
                  </div>
                </div>
                <button>팔로우</button>
              </li>
              <li className="recommendation_list_friend">
                <div className="recommendation_container">
                  <img src={friendProfileImg} alt="friend profile" />
                  <div className="friend_name">
                    <span className="id">sungeunpark</span>
                    <span className="name">회원님을 위한 추천</span>
                  </div>
                </div>
                <button>팔로우</button>
              </li>
              <li className="recommendation_list_friend">
                <div className="recommendation_container">
                  <img src={friendProfileImg} alt="friend profile" />
                  <div className="friend_name">
                    <span className="id">sungeunpark</span>
                    <span className="name">회원님을 위한 추천</span>
                  </div>
                </div>
                <button>팔로우</button>
              </li>
            </ul>
          </div>
          <ul className="main_right_footer">
            <li>
              <a href="#">소개</a>
            </li>
            <li>
              <a href="#">도움말</a>
            </li>
            <li>
              <a href="#">홍보</a>
            </li>
            <li>
              <a href="#">센터</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <a href="#">제품 정보</a>
            </li>
            <li>
              <a href="#">개인정보 처리방침</a>
            </li>
            <li>
              <a href="#">약관</a>
            </li>
            <li>
              <a href="#">위치</a>
            </li>
            <li>
              <a href="#">인기 계정</a>
            </li>
            <li>
              <a href="#">해시태그</a>
            </li>
            <li>
              <a href="#">언어</a>
            </li>
            <div>© 2021 Westagram from Fawecebook</div>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainRight;
