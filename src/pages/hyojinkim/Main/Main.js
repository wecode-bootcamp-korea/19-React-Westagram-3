import React from 'react';
// import "../../../styles/common.scss";
import "./Main.scss";

class Main extends React.Component {
  render() {
      return (
        <div className="Main_page">
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

        <section id="section">
          <main>
            <div className="story">
              <div className="story_each">
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/146338994_3861647247238002_5974701692609041341_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=bPJxC0LJneIAX9MJq_X&ccb=7-4&oh=25b806c26b91d933e4c561e8b6912b57&oe=60873E2D&_nc_sid=7bff83"
                  alt="profile" />
                <span className="story_who">watcha_kr</span>
              </div>
              <div className="story_each">
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/135506024_239250554388710_4235531343162379807_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=UuwYW97F-b0AX953PiF&ccb=7-4&oh=cc4434a879e26ddcedac358511233cbe&oe=6087219D&_nc_sid=7bff83"
                  alt="profile" />
                <span className="story_who">watcha_kr</span>
              </div>
              <div className="story_each">
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/36148238_1691629537618652_2472521644770328576_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=wod9LKtWfhYAX-rWRAw&ccb=7-4&oh=e038671cd5dd400462f0474cc328c265&oe=6088E9ED&_nc_sid=7bff83"
                  alt="profile" />
                <span className="story_who">watcha_kr</span>
              </div>
              <div className="story_each">
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/73456030_466552080739083_3046072591090450432_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=904S9TcNIQAAX-1Dg1u&ccb=7-4&oh=642e44c4d30b0ea8a3ca4329dda14957&oe=6088C81F&_nc_sid=7bff83"
                  alt="profile" />
                <span className="story_who">watcha_kr</span>
              </div>
              <div className="story_each">
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/62437320_2097486403885013_5099504547026436096_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=KGwGS3_oESsAX8K9D5v&ccb=7-4&oh=ef64dca1b3609940d9a349aa695e1c89&oe=6087B2EE&_nc_sid=7bff83"
                  alt="profile" />
                <span className="story_who">watcha_kr</span>
              </div>
              <div className="story_each">
                <img
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/140495294_680430929319006_6435973614198225556_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=Gr05fZG4yOAAX_v6tak&ccb=7-4&oh=920824b6015978b495f899a9866298fc&oe=60850890&_nc_sid=c982ba"
                  alt="profile" />
                <span className="story_who">watcha_kr</span>
              </div>
              <div className="story_each">
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/144482980_438044254009327_5361109903346943972_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=NTngaorGqBAAX820yiR&ccb=7-4&oh=05cb1744a038e8a8b92e9d2b27e52342&oe=60854FFC&_nc_sid=276363"
                  alt="profile" />
                <span className="story_who">watcha_kr</span>
              </div>
              <div className="story_each">
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/152478484_199634175284062_5488720055787471181_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=V76AkjjPWgsAX8xmCs8&ccb=7-4&oh=776d44c6b7a344a79a2340c647240aac&oe=6088D0F4&_nc_sid=276363"
                  alt="profile" />
                <span className="story_who">watcha_kr</span>
              </div>
              <div className="story_each">
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/122156097_385596679141482_3257865878409088088_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=_5gjZkHGjoUAX8rY-PL&ccb=7-4&oh=2e609d594bc22ea44ab5afe4aa539133&oe=6086255D&_nc_sid=276363"
                  alt="profile" />
                <span className="story_who">watcha_kr</span>
              </div>
              <div className="story_each">
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/83644821_132341578153269_6660869762081357824_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=2qypDn_FpSgAX9LARpH&ccb=7-4&oh=09599fce34fb9f66c9abee365d0bff25&oe=60874FAB&_nc_sid=276363"
                  alt="profile" />
                <span className="story_who">watcha_kr</span>
              </div>
              <div className="story_each">
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/131916746_693954911309836_860742220314320020_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=Z3zUl8pU0H0AX-Qk2em&ccb=7-4&oh=5f8b36c9dc7deb451a93314c55d7e26a&oe=6087D91D&_nc_sid=4f375e"
                  alt="profile" />
                <span className="story_who">watcha_kr</span>
              </div>
              <div className="story_each">
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/161063315_114804383968903_4323917638532986172_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=LtInl5Tn-EYAX9TRBaV&ccb=7-4&oh=c8d810f32998df9ef8f9c3e58a34bbda&oe=6085AD01&_nc_sid=7bff83"
                  alt="profile" />
                <span className="story_who">watcha_kr</span>
              </div>
            </div>

            <div className="feed">
              <header>
                <div className="feed_person">
                  <img src="./images/wecode.jpg" alt="profile" />
                  <span className="feed_id">wecode_bootcamp</span>
                </div>
                <div className="feed_option"><i className="fas fa-ellipsis-h"></i></div>
              </header>
              <div className="feed-img">
                <img src="./images/wecode_feed.jpg" alt="wecodefeed" />
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
                      <div className="comment-add">

                      </div>
                    </div>
                  </div>

                </div>
                <div className="make-comment">
                  <i className="far fa-smile fa-lg"></i>
                  <input className="input_comment" type="text" placeholder="댓글 달기..." />
                  <button className="submit_comment" type="button" disabled>게시</button>
                </div>

              </footer>
            </div>
          </main>

          <aside className="side-bar"></aside>
        </section>

  </div>
      )
  }
}

export default Main;