import React, {Component} from 'react';
import "./Main.scss";
import Nav from './Nav/Nav';
import Story from './Story/Story';
import Feed from './Feed/Feed'

class Main extends Component {
  constructor() {
    super();
    this.state = {
      FeedList: [],
    };
  }
  
  componentDidMount() {
    // console.log(this.state.FeedList[0]['imageUrl'])
    fetch("data/hyojin/FeedData.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        this.setState({ FeedList: data, });
      });
  }
  render() {
    const { FeedList } = this.state;
      return (
        <div className="Main_page">
        <Nav />
        <section id="section">
          <main>
            <Story />
            <ul className="FeedContainer">
            {FeedList.map((el, idx) => {
              return (
              <Feed
                key={idx}
                el={el.imageUrl}
                 />);
            })}
            </ul>
            
          </main>
          <aside className="side-bar"></aside>
        </section>

  </div>
      )
  }
}

export default Main;
