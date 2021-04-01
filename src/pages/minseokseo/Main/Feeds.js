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
                            <p>좋아요</p>
                            <div className="FeedContentCount">&nbsp; 1</div>
                            <p>개</p>
                        </div>
                        <div className="FeedContentIdTitle">
                            <div className="FeedContentId">ukosn1m</div>
                            <div className="FeedContentTitle">愛しい❤️</div>
                        </div>
                        <div className="FeedContentOtherComment">
                            <ul className="FeedContentCommentList">
                            </ul>
                        </div>
                    </div>
                </article>
                <div className="FeedContentInputBox">
                    <div className="FeedContentInputBoxEmoticon">😀</div>
                    <input className="FeedContentInputBoxCommentInput"  onkeypress="Enter(event)"  type="text" placeholder="댓글 달기..." />
                    <div onclick="AddComment()" className="FeedContentInputBoxPost">게시</div>
                </div>
        </feeds>
        )
    }
}

export default Feeds;