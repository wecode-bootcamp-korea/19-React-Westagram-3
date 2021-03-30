import React, { Component } from "react";
import "./FriendsStory.scss";

import friendProfile1 from "../../images/friend_profile1.jpg";
import friendProfile2 from "../../images/friend_profile2.jpg";
import friendProfile3 from "../../images/friend_profile3.jpg";
import friendProfile4 from "../../images/friend_profile4.jpg";
import friendProfile5 from "../../images/friend_profile5.jpg";
import friendProfile6 from "../../images/friend_profile6.jpg";
import friendProfile7 from "../../images/friend_profile7.jpg";
import friendProfile8 from "../../images/friend_profile8.jpg";
import friendProfile9 from "../../images/friend_profile9.jpg";
import friendProfile10 from "../../images/friend_profile10.jpg";

class FriendsStory extends Component {
  render() {
    return (
      <div className="FriendsStory">
        <article className="main_left_slider">
          <img src={friendProfile1} alt="friend_profile1" />
          <img src={friendProfile2} alt="friend_profile2" />
          <img src={friendProfile3} alt="friend_profile3" />
          <img src={friendProfile4} alt="friend_profile4" />
          <img src={friendProfile5} alt="friend_profile5" />
          <img src={friendProfile6} alt="friend_profile6" />
          <img src={friendProfile7} alt="friend_profile7" />
          <img src={friendProfile8} alt="friend_profile8" />
          <img src={friendProfile9} alt="friend_profile9" />
          <img src={friendProfile10} alt="friend_profile10" />
          <img src={friendProfile1} alt="friend_profile1" />
          <img src={friendProfile2} alt="friend_profile2" />
          <img src={friendProfile3} alt="friend_profile3" />
          <img src={friendProfile4} alt="friend_profile4" />
          <img src={friendProfile5} alt="friend_profile5" />
        </article>
      </div>
    );
  }
}

export default FriendsStory;
