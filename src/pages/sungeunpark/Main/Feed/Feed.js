import React, { Component } from "react";
import FeedComment from "./FeedComment/FeedComment";
import "./Feed.scss";

class Feed extends Component {
  state = {
    commentInput: "",
    commentList: [
      {
        userId: "wecoder_Elena",
        comment: "저도 먹고싶어요..😶❤",
      },
      {
        userId: "keto_elena33",
        comment: "키토식으로 만들어봐야겠어요!",
      },
      {
        userId: "began_elena",
        comment: "비건베이커리라니 너무 좋네요❤",
      },
    ],
  };

  // input값 저장
  handleCommentInput = (e) => {
    this.setState({ commentInput: e.target.value });
  };

  // 댓글 생성
  addComment = () => {
    this.setState({
      commentList: [
        ...this.state.commentList,
        {
          userId: "elenapark33",
          comment: this.state.commentInput,
        },
      ],
      commentInput: "",
    });
  };

  // enter
  submitWithEnter = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      this.addComment();
    }
  };

  // 게시버튼 클릭
  submitWithClick = () => {
    this.addComment();
  };

  render() {
    return (
      <div className="feed">
        <article className="main_left_feeds">
          <div className="feeds_navbar">
            <div className="feeds_navbar_left">
              <img
                src="/images/friend_profile1.jpg"
                alt="friend_profile1"
                className="feeds_navbar_profile"
              />
              <span className="feeds_navbar_user">sujin_lee</span>
            </div>
            <i className="fas fa-ellipsis-h"></i>
          </div>
          <img
            src="/images/feed image2.jpg"
            alt="feed images"
            className="feeds_img"
          />
          <div className="feeds_info">
            <div className="feeds_info_icons">
              <div className="feeds_info_icons_left">
                <svg height="24" viewBox="0 0 48 48" width="24">
                  <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>
                <svg height="24" viewBox="0 0 48 48" width="24">
                  <path
                    clipRule="evenodd"
                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <svg height="24" viewBox="0 0 48 48" width="24">
                  <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                </svg>
              </div>
              <div className="feeds_info_icons_right">
                <svg height="24" viewBox="0 0 48 48" width="24">
                  <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                </svg>
              </div>
            </div>
            <div className="feeds_info_description">
              <div className="feeds_info_description_like">
                elena_park33님 외 <span className="bold">여러 명</span>이
                좋아합니다.
              </div>
              <div className="feeds_info_description_user">sujin_lee</div>
              <div className="feeds_info_description_text">
                어제 먹은 말차파운드! 또 먹고싶다..❤
              </div>
              <div className="feeds_info_description_days">1일 전</div>
              <ul className="comment_container">
                {this.state.commentList.map((comment, idx) => {
                  return (
                    <FeedComment
                      key={idx}
                      userId={comment.userId}
                      comment={comment.comment}
                    />
                  );
                })}
              </ul>
            </div>
            <div className="feeds_info_comment">
              <button className="feed_info_comment_emoji">
                <svg height="24" viewBox="0 0 48 48" width="24">
                  <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
                  <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
                </svg>
              </button>
              <form action="" onSubmit={this.submitWithEnter}>
                <input
                  type="text"
                  className="feed_info_comment_input"
                  placeholder="댓글 달기.."
                  onChange={this.handleCommentInput}
                />
                <button
                  type="submit"
                  className="feed_info_comment_submit"
                  onClick={this.submitWithClick}
                >
                  게시
                </button>
              </form>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Feed;