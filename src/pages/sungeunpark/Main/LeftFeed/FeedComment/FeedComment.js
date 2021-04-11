import React, { Component } from "react";
import "./FeedComment.scss";

class FeedComment extends Component {
  render() {
    return (
      <li className="feed_comment">
        <span className="user_id">{this.props.userId}</span>
        <span>{this.props.comment}</span>
      </li>
    );
  }
}

export default FeedComment;
