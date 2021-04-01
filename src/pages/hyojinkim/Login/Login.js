import React from 'react';
import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import "./Login.scss";


class Login extends React.Component {

  goToMain = () => {
    this.props.history.push('./src/pages/hyojinkim/Main/Main');
  };

  render() {
      return (
        <div className="Login_page">
          <main className="Login_box">
          <div className="logo">Westagram</div>
          <div className="login">
            <div className="login_info">
              <input className="id_pw login_id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
              <input className="id_pw login_pw" type="password" placeholder="비밀번호"/ >
            </div>
            <button onClick={this.goToMain} type="submit" className="login_btn">로그인</button>
          </div>
          <div className="forgotBox">
            <a href="https://www.instagram.com/accounts/password/reset/">비밀번호를 잊으셨나요?</a>
          </div>
        </main>
        </div> 
      )
  }
}

export default withRouter(Login);