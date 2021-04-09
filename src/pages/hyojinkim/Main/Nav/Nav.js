import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav className="nav" id="navigation">
          <div className="nav-box">
            <div className="nav_logo">Westagram</div>
            <div className="nav_search">
              <span><i className="fas fa-search fa-xs"></i></span>
              <input className="search_input" type="text" placeholder="검색" />
              <span className="search_x"><i className="fas fa-times fa-xs"></i></span>
            </div>
            <ul className="nav_menu">
              <li className="icons"><a href="#"><i className="fas fa-home"></i></a></li>
              <li className="icons"><a href="#"><i className="fas fa-location-arrow"></i></a></li>
              <li className="icons"><a href="#"><i className="far fa-compass"></i></a></li>
              <li className="icons"><a href="#"><i className="far fa-heart"></i></a></li>
              <li className="icons"><a href="#"><img 
                src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/62437320_2097486403885013_5099504547026436096_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=KGwGS3_oESsAX8K9D5v&ccb=7-4&oh=ad981fc26f82a9adf85215febb8d4da4&oe=6086AD96&_nc_sid=7bff83" /></a>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Nav;