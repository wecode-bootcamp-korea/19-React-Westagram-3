import React from "react";
import Story from './Story';

class Feeds extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      comments : [],
      value : '', 
      story:[],
    }    
  }
  addComments = () => {
    if(!this.state.value == ""){
        this.setState({
          comments : 
          [...this.state.comments,
          {
            like : false,
            comment : this.state.value,
            id : this.state.comments.length + 1,
            delete : false
          }
          ],
          value : "",
      } )
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/data/Story.json', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        story : res
      })
    })
  }
  buttonHandler = () =>{
    this.addComments();
  }
  inputChangeHandler = (e) =>{
    this.setState({
        value: e.target.value
    })   
  }
  inputPressHandler = (e) =>{
    if(e.charCode === 13){
        this.addComments();
    }
  }

  likeChangeColor = (id) => {
    let likeId = id - 1;
    let likeTrueFalse = [...this.state.comments]
    if(this.state.comments[likeId].like == false){
      likeTrueFalse[likeId] = {...likeTrueFalse[likeId], like : true}
      this.setState({
        comments : likeTrueFalse,
      })
    }
    if(this.state.comments[likeId].like == true){
      likeTrueFalse[likeId] = {...likeTrueFalse[likeId], like : false}
      this.setState({
        comments : likeTrueFalse,
      })
    }
  }

  commentDelete = (id) => {
    console.log(id)
    this.setState(falseDelete => ({
      comments: falseDelete.comments.filter((e) => e.id !== id)
    }))
  }
  render(){
    return (
        <feeds>
          <div className="FeedStory">
          {this.state.story.map(a => {
            return(
              <Story name={a}/>
            )
          })}
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
              {this.state.comments.map(elements =>{
              return(
                <div className="Comment">
                  <li>{elements.comment}</li>
                  <div className="CommentOption">
                    <div style={{color: elements.like == true ? "red" : "black"}} onClick={() =>{this.likeChangeColor(elements.id)}}className="CommentLike">♥️</div> 
                    <div onClick={()=> {this.commentDelete(elements.id)}} value={elements.id} className="CommentDelete">X</div>
                  </div>
                </div>
                  )
              })}
              </ul>
            </div>
          </div>
        </article>
        <div className="FeedContentInputBox">
          <div className="FeedContentInputBoxEmoticon">😀</div>
          <input value={this.state.value} onChange={this.inputChangeHandler} onKeyPress={this.inputPressHandler} className="FeedContentInputBoxCommentInput" type="text" placeholder="댓글 달기..." />
          <div onClick={this.buttonHandler} className="FeedContentInputBoxPost">게시</div>
        </div>
    </feeds>
    )
  }
}

export default Feeds;