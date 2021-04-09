import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import './Feed.scss';
import wecode_feed from '../../images/wecode_feed.jpg'

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      commentInput: "",
      commentList: [],
    };
  }
  componentDidMount() {
    fetch('data/hyojin/commentData.json', {
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        commentList: data,
      });
    });
  }

  // input 값 저장
  inputComment = (e) => {
    this.setState({ commentInput : e.target.value })
  }

  // 댓글 생성
  addComment = () => {
    const {commentList, commentInput} = this.state;
    this.setState({
      commentList : 
      [
        ...commentList, 
        {
          idx: Date.now(),
          userId: 'hyojin', 
          comment: commentInput,
        }
      ],
      commentInput : ''
    })
  }

  // 이벤트 정의 
  addCommentEnter = (e) => {
    e.preventDefault();
    if(e.key === 'Enter') {
      this.addComment();
    }
  }
  // 객체 안에 다른 값을 불러오려면 this 
  addCommentClick = () => {
    this.addComment();
  }
  
  render() {
    const {commentList, commentInput} = this.state;
    const { el } = this.props
    return (
            <div className="feed">
              <header>
                <div className="feed_person">
                  <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=gSSIDJTqBWoAX9S8A4v&edm=AP_V10EAAAAA&ccb=7-4&oh=907671ccc36257cd58e8cb0cafe54974&oe=609286B0&_nc_sid=4f375e" alt="profile" />
                  <span className="feed_id">wecode_bootcamp</span>
                </div>
                <div className="feed_option"><i className="fas fa-ellipsis-h"></i></div>
              </header>
              <div className="feed-img">
                <img src={el} alt="wecodefeed" />
              </div>

              <footer>
                <div className="like-btns">
                  <div className="btn_icons">
                    <i className="far fa-heart fa-lg"></i>
                    <i className="far fa-comment fa-lg"></i>
                    <i className="fas fa-location-arrow fa-lg"></i>
                  </div>
                  <div className="next-img"><i className="fas fa-ellipsis-h fa-lg"></i></div>
                  <div className="feed_save"><i className="far fa-bookmark fa-lg"></i></div>
                </div>
                <div className="like-num">좋아요 78개</div>
                <div className="feed_content">
                  <p>wecode_bootcamp <br /> </p>
                  <p>함께해서 wecode 18기 위니또 소식🥰</p>
                </div>
                <div className="comment">
                  <div className="comment_all">댓글 모두 보기</div>
                  <div className="comment_other">
                    <div className="comment_user">
                      <ul className="comment-add">
                        {commentList.map(item => {
                          return (
                          <Comment
                            key={item.idx}
                            commentId = {item.userId} 
                            commentItem = {item.comment}/>
                            );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="make-comment">
                  <i className="far fa-smile fa-lg"></i>
                  <form onSubmit={this.addCommentEnter}>
                    <input 
                    onChange={this.inputComment} 
                    className="input_comment" 
                    type="text" 
                    placeholder="댓글 달기..." 
                    value={commentInput}/>
                    <button disabled={this.state.commentInput.length > 0 ? false : true } onClick={this.addCommentClick} className={this.state.commentInput.length > 0 ? "btn pressed" : "btn"} type="submit" >게시</button>
                    {/* className="submit_comment" */}
                  </form>                
                </div>

              </footer>
            </div>
    );
  }
  
}

export default Feed;