import React from 'react';
import { WithRouter } from 'react-router-dom';

class Login extends React.Component{
    constructor() {
        super();
        this.state = {
            id: '',
            pw: '',
        }
    }
    GoToMain = () => {
        let idTest = /[@]/; 
        if(idTest.test(this.state.id) && this.state.pw.length > 5){
            this.props.history.push('/mainseok');
        }
    }
    handleIdInput = (event) => {
        this.setState({id : event.target.value})
    }
    handlePwInput = (event) =>{
        this.setState({pw : event.target.value})
    }
    render(){
        return(
        <>
            <section className="LoginDisplay">
                <form className="LoginDisplayInput">
                    <div className="LoginDisplayWestagram">Minstagram</div>
                    <input onChange={this.handleIdInput} type="email" id="InputEmail" className="LoginDisplayEmail" placeholder="전화번호, 사용자 이름 또는 이메일" />
                    <input onChange={this.handlePwInput} type="password" id="InputPassword" className="LoginDisplayPassword" placeholder="비밀번호" />
                    <button onClick={this.GoToMain} id="BlueButton" onclick="EmailAt()" className="LoginDisplayButton" type="submit"><div>로그인</div></button>
                </form>
                <div className="LineOr">
                    <div className="LineOrLine LineOrLineLeft"></div>
                    <div className="LineOrOr">또는</div>
                    <div className="LineOrLine LineOrLineLeft"></div>
                </div>
                <div className="OtherLogin">
                    <a href="https://www.facebook.com/" target="_blank"><div className="LoginFacebook"><i className="fab fa-facebook-square"></i>&nbsp; Facebook으로 로그인</div></a>
                    <div className="ForgetPassword">비밀번호를 잊으셨나요?</div>
                </div>
        </section>
        <div className="SignUp">
            <span className="NoAccount">계정이 없으신가요?&nbsp;<span>가입하기</span></span>
        </div>
    </>
        )
    }
}

export default Login;