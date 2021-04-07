import React, { Component } from 'react';
import './Add.scss';

class Add extends Component {
  render() {
    return (
      <li class="comment">
        <span className="comment id">
          {this.props.commentId}
        </span>
        
        <span className="comment content">
          {this.props.commentItem}
        </span>
      </li>
    );
  }
}

export default Add;