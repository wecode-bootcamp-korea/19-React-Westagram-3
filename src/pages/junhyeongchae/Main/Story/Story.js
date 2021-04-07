import React, { Component } from 'react';
import './Story.scss'

import picture1 from '../../images/picture1.png'

class Story extends Component {
  render() {
    return (
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
      </div>
    </div>
    );
  }
}

export default Story;