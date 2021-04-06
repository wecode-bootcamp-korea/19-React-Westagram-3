import React from 'react';

class Story extends React.Component{
  render(){
    console.log("asd");
    return(
      <span className="FeedStoryContent">
          <img src={this.props.name.image} className="FeedStoryContentProfile"></img>
          <div className="FeedStoryContentName">{this.props.name.name}</div>
      </span>
    )
  }
}

export default Story