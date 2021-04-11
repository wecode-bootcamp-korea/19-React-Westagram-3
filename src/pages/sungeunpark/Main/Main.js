import React, { Component } from "react";
import "./Main.scss";

import FriendsStory from "./FriendsStory/FriendsStory";
import Navbar from "./Navbar/Navbar";
import LeftFeed from "./LeftFeed/LeftFeed";
import MainRight from "./MainRight/MainRight";

import "./Main.scss";

class Main extends Component {
  state = {
    FeedList: [],
  };

  componentDidMount() {
    fetch("/data/sungeunpark/feedData.json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ FeedList: data });
      });
  }

  render() {
    const { FeedList } = this.state;
    return (
      <div className="main">
        <Navbar />
        <main id="main_container">
          <section className="main_left">
            <FriendsStory />
            <ul className="feed_container">
              {FeedList.map((feedItem, idx) => {
                return <LeftFeed key={idx} feedItem={feedItem} />;
              })}
            </ul>
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
