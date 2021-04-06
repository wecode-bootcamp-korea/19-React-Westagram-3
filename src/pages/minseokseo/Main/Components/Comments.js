import React from 'react';


class Comments extends React.Component {
  render(){
    return(
      <>
        {this.props.test.comments.map(elements =>{
          return(
            <div className="Comment">
              <li>{elements}</li>
              <div className="CommentOption">
                <div className="CommentLike">♥️</div>
                <div className="CommentDelete">X</div>
              </div>
            </div>
          )
        })}
      </>
    ) 
  }
}


export default Comments;