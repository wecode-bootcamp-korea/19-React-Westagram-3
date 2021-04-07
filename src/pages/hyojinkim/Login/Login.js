import React from 'react';
import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import "./Login.scss";


class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      inputId : "",
      inputPw : "",
      btnActive : true,
    };
  }

  handleIdInput = (e) => {
    this.setState ({
      [e.target.name] : e.target.value,
    },() => {
      if(this.state.inputId.includes("@") && this.state.inputPw.length >= 5){
        this.setState({
          btnActive: false
        })
      } else if (!this.state.inputId.includes("@") || this.state.inputPw.length < 5) {
        this.setState({
          btnActive: true
        })
      }
    })
  };

  goToMain = () => {
    this.props.history.push('/mainhyo');
  };
  render() {
      return (
        <div className="Login_page">
    
          <main className="Login_box">
          <div className="Logo">Westagram</div>
          <div className="login-hyo">
            <div className="login_info">
            <input onChange={this.handleIdInput} name="inputId" className="id_pw login_id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
              <input onChange={this.handleIdInput} name="inputPw" className="id_pw login_pw" type="password" placeholder="비밀번호"/ >
            </div>
            <button disabled={this.state.btnActive} onClick={this.goToMain} type="submit" className="login_btn">로그인</button>
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