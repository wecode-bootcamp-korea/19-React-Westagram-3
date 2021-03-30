import React, { Component } from "react";
import "./FeedComment.scss";

class FeedComment extends Component {
  render() {
    console.log("feedcomment " + this.props.userId);
    return (
      <li>
        <span>{this.props.userId}</span>
        <span>{this.props.comment}</span>
      </li>
    );
  }
}

export default FeedComment;
