import React from "react";

class Feeds extends React.Component{
    render(){
        return (
            <feeds>
                <div className="FeedStory">
                    <span className="FeedStoryContent">
                        <div className="FeedStoryContentProfile"></div>
                        <div className="FeedStoryContentName">m1nsokuasdasdasda</div>
                    </span>
                    <span className="FeedStoryContent">
                        <div className="FeedStoryContentProfile"></div>
                        <div className="FeedStoryContentName">m1nsoku</div>
                    </span>
                    <span className="FeedStoryContent">
                        <div className="FeedStoryContentProfile"></div>
                        <div className="FeedStoryContentName">asd</div>
                    </span>
                    <span className="FeedStoryContent">
                        <div className="FeedStoryContentProfile"></div>
                        <div className="FeedStoryContentName">m1nsoasdku</div>
                    </span>
                    <span className="FeedStoryContent">
                        <div className="FeedStoryContentProfile"></div>
                        <div className="FeedStoryContentName">m1nssdoku</div>
                    </span>
                    <span className="FeedStoryContent">
                        <div className="FeedStoryContentProfile"></div>
                        <div className="FeedStoryContentName">m1nsoku</div>
                    </span>
                    <span className="FeedStoryContent">
                        <div className="FeedStoryContentProfile"></div>
                        <div className="FeedStoryContentName">m1nsoku</div>
                    </span>
                    <span className="FeedStoryContent">
                        <div className="FeedStoryContentProfile"></div>
                        <div className="FeedStoryContentName">m1nsoku</div>
                    </span>
                    <span className="FeedStoryContent">
                        <div className="FeedStoryContentProfile"></div>
                        <div className="FeedStoryContentName">m1nsoku</div>
                    </span>
                    <span className="FeedStoryContent">
                        <div className="FeedStoryContentProfile"></div>
                        <div className="FeedStoryContentName">m1nsoku</div>
                    </span>
                    <span className="FeedStoryContent">
                        <div className="FeedStoryContentProfile"></div>
                        <div className="FeedStoryContentName">m1nsoku</div>
                    </span>
                </div>
                <article>
                    <div className="FeedContent">
                        <div className="FeedContentNav">
                            <div className="FeedContentNavProfile">
                                <div className="FeedContentNavImg"></div>
                                <div className="FeedContentNavId">ukosn1m</div>
                            </div>
                            <img className="FeedContentNavSettings" src="/image/more.svg" alt="settings" />
                        </div>
                        <div className="FeedContentImg">
                            <img src="/image/quokka.png" />
                        </div>
                        <div className="FeedContentInterest">
                            <div className="FeedContentLCS">
                                <img className="FeedContentLike" src="/image/heart.svg" alt="like" />
                                <img className="FeedContentComment" src="/image/chat.svg" alt="comment" />
                                <img className="FeedContentShare" src="/image/direct.svg" alt="share" />
                            </div>
                                <img className="FeedContentSave" src="/image/bookmark.svg" alt="save" />
                        </div>
                        <div className="FeedContentLikeCount">
                            <p>?????????</p>
                            <div className="FeedContentCount">&nbsp; 1</div>
                            <p>???</p>
                        </div>
                        <div className="FeedContentIdTitle">
                            <div className="FeedContentId">ukosn1m</div>
                            <div className="FeedContentTitle">???????????????</div>
                        </div>
                        <div className="FeedContentOtherComment">
                            <ul className="FeedContentCommentList">
                            </ul>
                        </div>
                    </div>
                </article>
                <div className="FeedContentInputBox">
                    <div className="FeedContentInputBoxEmoticon">????</div>
                    <input className="FeedContentInputBoxCommentInput"  onkeypress="Enter(event)"  type="text" placeholder="?????? ??????..." />
                    <div onclick="AddComment()" className="FeedContentInputBoxPost">??????</div>
                </div>
        </feeds>
        )
    }
}

export default Feeds;