import React, { Component } from 'react';
import './Comment.scss'
import Add from './Add/Add'

import smile from '../../../images/smile.png'

class Comment extends Component {
  constructor(){
    super();
    this.state ={
      commentInput:"",
      commentList: [{idx:20201012, userId:"hello1358", comment:"안녕안녕"}],
    }
  }
  //Input값 저장
  handleCommentInput = (e) => {
    this.setState({
      commentInput: e.target.value,
    });
  };
  //댓글 생성
  addComment = ()=> {
    this.setState({
      commentList:[...this.state.commentList, {idx:Date.now(), userId:"junhyeongchae", comment:this.state.commentInput}],
      commentInput:"",
    })
  };
  //댓글 input창 초기화
  //Enter
  submitWithEnter = (e) => {
    e.preventDefault();
    if(e.keycode === 13){
      this.addComment();
    }
  }
  //Click
  submitWithClick = (e) => {
    this.addComment();
  }
  render() {
    const {commentList} = this.state;
    return (
      <>
        <div className='comment_box'>
          <div className='comment_box_wrap'>
            <div className='comment'><b>dlwlrma</b>라일락...</div>
              <div id='more'>더 보기</div>
          </div>
        </div>
        <ul className='thatComment'>
          {commentList.map((item, idx) => {
            return(
              <Add key = {idx} commentId= {item.userId} commentItem = {item.comment}/>
            )
          })}
        </ul>
        <div className="input_box">
          <img src={smile} alt='웃음' />
          <form onSubmit={this.submitWithEnter}>
            <input type='text' placeholder="댓글 달기..." className='plus_text' value={this.state.comment} onChange={this.handleCommentInput}/>
            <button type='submit' className='submit_button' onClick={this.submitWithClick}>게시</button>
          </form>
        </div>
      </>
    );
  }
}

export default Comment;