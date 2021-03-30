import React, { Component } from "react";

import FriendsStory from "./FriendsStory/FriendsStory";
import Navbar from "./Navbar/Navbar";
import Feed from "./Feed/Feed";
import MainRight from "./MainRight/MainRight";

import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Navbar />
        <main id="main_container">
          <section className="main_left">
            <FriendsStory />
            <Feed />
          </section>
          <section className="main_right_container">
            <MainRight />
          </section>
        </main>
      </div>
    );
  }
}

export default Main;
