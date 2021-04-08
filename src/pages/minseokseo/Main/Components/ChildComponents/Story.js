import React from 'react';

class Story extends React.Component{
  render(){
    return(
      <span className="FeedStoryContent">
          <img src={this.props.name.image} className="FeedStoryContentProfile"/>
          <div className="FeedStoryContentName">{this.props.name.name}</div>
      </span>
    )
  }
}

export default Story