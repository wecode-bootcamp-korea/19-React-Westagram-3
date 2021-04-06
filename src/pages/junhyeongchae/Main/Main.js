import React from 'react';
import "./Main.scss";
import "../../../styles/common.scss"
import logo from '../images/logo.png'
import search from '../images/search.png'
import compass from '../images/compass.png'
import heart from '../images/heart.png'
import user from '../images/user.png'
import picture1 from '../images/picture1.png'
import speech from '../images/speech.png'
import airplane from '../images/airplane.png'
import bookmark from '../images/bookmark.png'
import likePhoto from '../images/likePhoto.jpeg'
import smile from '../images/smile.png'

class Main extends React.Component {
  render() {
    return(
    <div>
        <header>
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
        </header>
        <main className='main-container'>
          <article className='article'>
            <div className='story'>
              <div className='story_wrap'>
                <ul className='story_list'>
                  <li className='story_sub'>
                    <div className='story_circle'>
                      <img src={picture1} alt='프로필' />
                        <span>dlwlrma</span>
                    </div>
                  </li>
                </ul>
                <ul className='story_list'>
                  <li className='story_sub'>
                    <div className='story_circle'>
                      <img src={picture1} alt='프로필' />
                        <span>dlwlrma</span>
                    </div>
                  </li>
                </ul>
                <ul className='story_list'>
                  <li className='story_sub'>
                    <div className='story_circle'>
                      <img src={picture1} alt='프로필' />
                        <span>dlwlrma</span>
                    </div>
                  </li>
                </ul>
                <ul className='story_list'>
                  <li className='story_sub'>
                    <div className='story_circle'>
                      <img src={picture1} alt='프로필' />
                        <span>dlwlrma</span>
                    </div>
                  </li>
                </ul>
                <ul className='story_list'>
                  <li className='story_sub'>
                    <div className='story_circle'>
                      <img src={picture1} alt='프로필' />
                        <span>dlwlrma</span>
                    </div>
                  </li>
                </ul>
                <ul className='story_list'>
                  <li className='story_sub'>
                    <div className='story_circle'>
                      <img src={picture1} alt='프로필' />
                        <span>dlwlrma</span>
                    </div>
                  </li>
                </ul>
                <ul className='story_list'>
                  <li className='story_sub'>
                    <div className='story_circle'>
                      <img src={picture1} alt='프로필' />
                        <span>dlwlrma</span>
                    </div>
                  </li>
                </ul>
                <ul className='story_list'>
                  <li className='story_sub'>
                    <div className='story_circle'>
                      <img src={picture1} alt='프로필' />
                        <span>dlwlrma</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='feed'>
              <div className='profile_wrap'>
                <img src={picture1} alt='프로필' />
                  <span>dlwlrma</span>
                <i className="fas fa-ellipsis-h fa-xs"></i>
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
            <div className='comment_box'>
              <div className='comment_box_wrap'>
                <div className='comment'><b>dlwlrma</b>라일락...</div>
                  <div id='more'>더 보기</div>
                </div>
              </div>
              <div className='thatComment'>
              </div>
            <div className="input_box">
              <img src={smile} alt='웃음' />
              <input type='text' placeholder="댓글 달기..." className='plus_text' />
              <button type='button' className='submit_button' disabled>게시</button>
            </div>
          </div>
        </article>
        <div className='main-right'>
          <span>나중에 하겠읍니다.</span>
        </div>
      </main>
    </div>
    )
  }
}

export default Main;