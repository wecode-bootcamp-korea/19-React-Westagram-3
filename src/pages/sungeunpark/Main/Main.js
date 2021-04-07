import React, { Component } from "react";
//import "../Common.scss";
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
    fetch("http://localhost:3000/data/sungeunpark/FeedData.json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ FeedList: data });
      });
  }

  render() {
    const { FeedList } = this.state;
    console.log(FeedList);
    return (
      <div className="main">
        <Navbar />
        <main id="main_container">
          <section className="main_left">
            <FriendsStory />
            {/* props로 전달할 것 고민해서 변경하기 */}
            <ul className="Feed_container">
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
