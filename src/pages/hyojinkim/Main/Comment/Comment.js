import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  render() {
    return (
      <li className="Comments">
        {/* ⭐️ 이건 왜 안나옴.?
         <span>ㄴ
          {this.props.idx}
        </span>  */}
        <span className="Comment_id">
          {this.props.commentId}
        </span>
        <span>
          {this.props.commentItem}
        </span>
      </li>
    );
  }
}

export default Comment;