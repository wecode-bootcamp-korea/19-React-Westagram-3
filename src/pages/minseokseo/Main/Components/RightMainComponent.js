import React from 'react';

class RightComponent extends React.Component {
  render() {
    return (
      <>
        <div class="RightFixRecommendPerson">
            <div class="RightFixRecommendPersonProfile">
                <div class="RightFixRecommendPersonImage"></div>
                <div class="RightFixRecommendPersonInformation">
                    <div class="RightFixRecommendPersonID">{this.props.name.userName}</div>
                    <div class="RightFixRecommendPersonContent">회원님을 위한 추천</div>
                </div>
            </div>
            <div class="RightFixRecommendFollow">팔로우</div>
        </div>
      </>
    )
  }
}

export default RightComponent;




