import React from 'react';
import Nav from './Nav/Nav';
import Story from'./Story/Story';
import Feed from'./Feed/Feed';
import Aside from'./Aside/Aside';

import "./Main.scss";
import "../../../styles/common.scss"



class Main extends React.Component {
  render() {
    return(
    <div>
        <Nav />
        <main className='main-container'>
          <article className='article'>
            <Story />
            <Feed />
        </article>
        <Aside />
      </main>
    </div>
    )
  }
}

export default Main;