import React from 'react';
import "./Login.scss";
// import "../../../eCstyles/common.scss";
import { Link } from 'react-router-dom';


class Login extends React.Component {
  render() {
    return (
      <div className='Login'>
        <main className="mainContainer">
        <div className="loginContainer">
          <h1 className="login_logo">westagram</h1>
          <form action="main.html" className="login_form">
              <input type="text" className="login_id" placeholder="전화번호, 사용자 이름 또는 이메일" maxlength="20" />
              <input type="password" className="login_pw" placeholder="비밀번호" maxlength="20" />
              <div className="btn">
                <Link to="/Main"><button type="button" className="login_form_submit">
                  로그인
                </button></Link>
              </div>
          </form>
          <span className="pwd_help">비밀번호를 잊으셨나요?</span>
          </div>
        </main>
      </div>
    )
  }
}

export default Login;