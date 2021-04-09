import React, {Component} from 'react';
import "./Login.scss";
import "../../../styles/common.scss";
import { withRouter } from 'react-router-dom';
import { INFO } from './footerData.js';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      password: "",
    }
  }
  handleInput = e => {
    const{ value, name } = e.target;
    this.setState({
      [name]: value
    })
  }
  goToMain = () =>{
    this.props.history.push('/mainjun')
  }
  render() {
    const { email,  password} = this.state;
    return (
      <div className='Login'>
        <main className="mainContainer">
        <div className="loginContainer">
          <h1 className="login_logo">westagram</h1>
          <form action="main.html" className="login_form">
            {/* 비구조 할당으로 나중에 리팩토링해주기 */}
              <input onChange={this.handleInput} type="text" name="email" className="login_id" placeholder="전화번호, 사용자 이름 또는 이메일" maxlength="20" />
              <input onChange={this.handleInput}type="password" name="password" className="login_pw" placeholder="비밀번호" maxlength="20" />
              <div className="btn">
              <button 
                    type="button" 
                    className={email.includes("@") && password.length >= 5 ? "btnColor pressed" : "btnColor"}
                    disabled={email.includes("@") && password.length >= 5 ? false : true}
                    onClick ={this.goToMain}
              >
                  로그인
              </button>
              </div>
          </form>
          <span className="pwd_help">비밀번호를 잊으셨나요?</span>
          </div>
        </main>
        <footer className="footer">
          {INFO.map(el => {
            return(
              <li className="footer list" key ={el.id}>
                <a href="">{el.content}</a>
              </li>
            )
          })}
        </footer>
      </div>
    )
  }
}

export default withRouter(Login);