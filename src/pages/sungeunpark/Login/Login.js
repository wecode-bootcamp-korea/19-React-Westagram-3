import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./Common.css";
import "./Login.scss";

// withRouterHOC

class Login extends Component {
  goToMain = () => {
    this.props.history.push("/main");
  };

  render() {
    return (
      <div className="login">
        <section className="header">Westagram</section>
        <section className="login_area">
          <input
            type="text"
            className="login_area_id"
            placeholder="전화번호,사용자 이름 또는 이메일"
          />
          <input
            type="password"
            className="login_area_pw"
            placeholder="비밀번호"
          />
          <button className="login_area_btn" onClick={this.goToMain}>
            로그인
          </button>
        </section>
        <section className="find_pw">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </section>
      </div>
    );
  }
}

export default withRouter(Login);
