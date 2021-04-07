import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      idValue: "",
      pwValue: "",
    };
  }

  handleIdInput = (e) => {
    this.setState({ idValue: e.target.value });
  };

  handlePwInput = (e) => {
    this.setState({ pwValue: e.target.value });
  };

  // button을 클릭했을 때 백엔드에 통신 요청
  goToMain = () => {
    //this.props.history.push("/main");

    fetch("http://10.58.5.191:8000/users/signup", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.idValue,
        password: this.state.pwValue,
        phone_number: "01026972157",
        name: "sungeunpark",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("결과: ", data);
      });
  };

  render() {
    const { idValue, pwValue } = this.state;
    console.log(idValue);

    return (
      <div className="login">
        <section className="header">Westagram</section>
        <section className="login_area">
          <input
            onChange={this.handleIdInput}
            type="text"
            className="login_area_id"
            placeholder="전화번호,사용자 이름 또는 이메일"
          />
          <input
            onChange={this.handlePwInput}
            type="password"
            className="login_area_pw"
            placeholder="비밀번호"
          />
          <button
            className={`${
              idValue.includes("@") && pwValue.length >= 5
                ? "login_area_btn pressed"
                : "login_area_btn"
            }`}
            onClick={this.goToMain}
          >
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
