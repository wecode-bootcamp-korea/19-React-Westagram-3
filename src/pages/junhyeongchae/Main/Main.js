import React, { Component } from 'react';
import Nav from './Nav/Nav';
import Story from'./Story/Story';
import Feed from'./Feed/Feed';
import Aside from'./Aside/Aside';

import "./Main.scss";
import "../../../styles/common.scss"



class Main extends Component {
  constructor(){
    super();
    this.state = {
      FeedList: [],
    }; 
  }
  componentDidMount(){
    fetch('data/junhyeongchae/feedData.json')
    .then(res => res.json())
    .then(data => {
      this.setState({
        FeedList: data,
      });
    });
  }
  render() {
    const { FeedList } = this.state
    return(
    <div>
        <Nav />
        <main className='main-container'>
          <article className='article'>
            <Story />
          <ul className='Feed_container'>
          {FeedList.map((feedItem) => {
                return(<Feed key={feedItem.idx} feedItem={feedItem} />);
          })}
          </ul>
        </article>
        <Aside />
      </main>
    </div>
    )
  }
}

export default Main;