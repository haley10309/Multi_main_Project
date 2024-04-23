import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Join_Login.scss';

function Login() {
  //초기값 설정
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');
  const navigate = useNavigate();
  //이벤트 핸들러
  const handleEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage('이메일 형식을 확인하세요');
      setIsEmail(false);
    } else {
      setEmailMessage('적합한 이메일 입니다');
      setIsEmail(true);
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  //jwt 로그인 방식
  const handleLogin = async () => {
    return await axios.post('url', {
      email: 'email',
      password: 'password',
    });
  };

  //localStorage.setItem('accessToken', headers['access']);
  //localStorage.setItem('refreshToken', headers['refresh']);

  return (
    <div className="login_body">
      <h1>DevOz</h1>
      <form onSubmit={handleLogin}>
        <div className="email_form_align">
          <label htmlFor="email"> E-mail: </label>
          <input type="text" onChange={handleEmail} />
          <p>{emailMessage}</p>
        </div>
        <br />
        <div className="PW_form_align">
          <label htmlFor="password">PASSWORD : </label>
          <input type="password" onChange={handlePassword} />
        </div>
        <br />
        <button className="Login_button" type="submit">
          로그인
        </button>
        <br />
      </form>
    </div>
  );
}

export default Login;
