import React, { Component } from 'react';
import './Nav.scss'

import logo from '../../images/logo.png'
import search from '../../images/search.png'
import compass from '../../images/compass.png'
import user from '../../images/user.png'
import heart from '../../images/heart.png'

class Nav extends Component {
  render() {
    return (
        <nav className='nav'>
          <div className='left_box'>
            <div className='camera_box'>
              <img className='camera' src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png' alt='인스타 사진로고' />
            </div>
            <div className='line'>|</div>
            <div className='logo_box'>
              <img className='logo' src= {logo} alt="인스타 로고" />
            </div>
          </div>
          <div className='search_box'>
            <input type='text' placeholder='검색' className='search' />
            <div className='magnifier_box'>
              <img className='magnifier' src={search} alt='돋보기 사진' />
            </div>
          </div>
          <div className='right_box'>
            <div className='compass_box'>
              <img className='compass' src={compass} alt='나침반 사진' />
            </div>
            <div className='heart_box'>
              <img className='heart' src={heart} alt='하트 사진' />
            </div>
            <div className='profile_box'>
              <img className='profile' src={user} alt='프로필 사진' />
            </div>
          </div>
        </nav>
    );
  }
}

export default Nav;