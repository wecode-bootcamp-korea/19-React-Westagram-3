import React, { Component } from 'react';
import './Feed.scss'
import Comment from './Comment/Comment'

import heart from '../../images/heart.png'
import picture1 from '../../images/picture1.png'
import speech from '../../images/speech.png'
import airplane from '../../images/airplane.png'
import bookmark from '../../images/bookmark.png'
import likePhoto from '../../images/likePhoto.jpeg'


class Feed extends Component {
  render() {
    return (
      <div className='feed'>
        <div className='profile_wrap'>
          <img src={picture1} alt='프로필' />
            <span>dlwlrma</span>
        </div>
        <div className='content'>
          <img src={picture1} alt='컨텐츠' />
        </div>
        <div className='react_wrap'>
          <div className='react_wrap_left'>
            <img src={heart} alt='하트' />
            <img src={speech} alt='말풍선' />
            <img src={airplane} alt='비행기' />
          </div>
          <img src={bookmark} alt='북마크'id='mark' />
        </div>
        <div className='react_like'>
          <img src={likePhoto} alt='북마크' />
        <div className='others_like'>
          <span><b>_mar_professor</b>님 외 <b>333,133명</b>이 좋아합니다.</span>
        </div>
        </div>
        <Comment />
      </div>
    );
  }
}

export default Feed;