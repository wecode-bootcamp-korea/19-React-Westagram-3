import React, {Component} from 'react';
import "./Login.scss";
import "../../../styles/common.scss";
import { Link } from 'react-router-dom';


class Login extends Component {
  constructor(){
    super();
    this.state = {
      idInputValue: "",
      pwInputValue: "",
    }
  }
  handleIdInput = (event) => {
    this.setState({
      idInputValue : event.target.value
    },
    () => console.log(this.state.idInputValue));
    // 비동기 처리 해결
  };
  handlePwInput = (event) => {
    this.setState ({
      pwInputValue: event.target.value
    },
    () => console.log(this.state.pwInputValue));
    console.log(this.state.pwInputValue)
  };
  render() {
    return (
      <div className='Login'>
        <main className="mainContainer">
        <div className="loginContainer">
          <h1 className="login_logo">westagram</h1>
          <form action="main.html" className="login_form">
            {/* 비구조 할당으로 나중에 리팩토링해주기 */}
              <input onChange={this.handleIdInput} type="text" className="login_id" placeholder="전화번호, 사용자 이름 또는 이메일" maxlength="20" />
              <input onChange={this.handlePwInput}type="password" className="login_pw" placeholder="비밀번호" maxlength="20" />
              <div className="btn">
                <Link to="/mainjun">
                  <button type="button" className={this.state.idInputValue.includes("@") && this.state.pwInputValue.length >= 5 ? "changeBtnColor" : "normalBtnColor"}
                  disabled={this.state.idInputValue.includes("@") && this.state.pwInputValue.length >= 5 ? false:true}>
                  로그인
                </button>
                </Link>
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