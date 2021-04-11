import React, { Component } from "react";
import "./MainRight.scss";

class MainRight extends Component {
  render() {
    const RIGHT_FOOTER = [
      "소개",
      "도움말",
      "홍보",
      "센터",
      "API",
      "제품 정보",
      "개인정보 처리방침",
      "약관",
      "위치",
      "인기 계정",
      "해시태그",
      "언어",
    ];
    return (
      <div className="mainRight">
        <div className="main_right">
          <div className="main_right_user_profile">
            <div className="profile_container">
              <img
                src="/data/sungeunpark/images/user profile image.jpg"
                alt="user profile"
              />
              <div className="profile_name">
                <span>elena_park33</span>
                <span>박성은</span>
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
                  <img
                    src="/data/sungeunpark/images/friend_profile10.jpg"
                    alt="friend profile"
                  />
                  <div className="friend_name">
                    <span>sungeunpark</span>
                    <span>회원님을 위한 추천</span>
                  </div>
                </div>
                <button>팔로우</button>
              </li>
              <li className="recommendation_list_friend">
                <div className="recommendation_container">
                  <img
                    src="/data/sungeunpark/images/friend_profile10.jpg"
                    alt="friend profile"
                  />
                  <div className="friend_name">
                    <span>sungeunpark</span>
                    <span>회원님을 위한 추천</span>
                  </div>
                </div>
                <button>팔로우</button>
              </li>
              <li className="recommendation_list_friend">
                <div className="recommendation_container">
                  <img
                    src="/data/sungeunpark/images/friend_profile10.jpg"
                    alt="friend profile"
                  />
                  <div className="friend_name">
                    <span>sungeunpark</span>
                    <span>회원님을 위한 추천</span>
                  </div>
                </div>
                <button>팔로우</button>
              </li>
            </ul>
          </div>
          <ul className="main_right_footer">
            {RIGHT_FOOTER.map((element) => {
              return (
                <li>
                  <a href="#">{element}</a>
                </li>
              );
            })}
            <div>© 2021 Westagram from Fawecebook</div>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainRight;
