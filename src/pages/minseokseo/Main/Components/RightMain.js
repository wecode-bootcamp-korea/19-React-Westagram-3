import React from 'react';
import RightComponent from './RightMainComponent';

class Right extends React.Component{
  constructor(){
    super();
    this.state = {
      content : []
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/Right.json', {
        method:'GET'
    })
    .then(res => res.json())
    .then(res => {
        this.setState({
            content: res
        })
    })
    }
  render(){
    return(
      <mainRight>
        <div class="RightFixMain">
          <div class="RightFixProfile">
            <div class="RightFixMyProfileImage"></div>
            <div class="RightFixMyProfile">
                <div class="RightFixMyProfileInfomation">
                    <div class="RightFixMyProfileId">m1nsoku</div>
                    <div class="RightFixMyProfileName">서민석</div>
                </div>
                <div class="RightFixMyProfileChange">전환</div>
            </div>
          </div>
          <div class="RightFixRecommend">
            <div class="RightFixForMe">회원님을 위한 추천</div>
            <div class="RightFixViewAll">모두 보기</div>
          </div>
          {this.state.content.map(elements =>{
            return(
              <RightComponent name={elements}/>
            )
          })}
        </div>
    </mainRight>
    )
  }
}

export default Right;