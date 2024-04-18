import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Join_Login.scss';

function Login(props) {
  const [useraccount, setUseraccount] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const onIDhandler = (event) => {
    setUseraccount(event.target.value);
  };
  const onPwhandler = (event) => {
    setPassword(event.target.value);
  };

  // useEffect=(()=>{

  // },[mgs])
  const LoginFunc = () => {
    let body = {
      useraccount,
      password,
    };
    // axios.post("/login", body).then((res) => {
    //   console.log(res.data);

    //   if (res.data.code === 200) {
    //     console.log("로그인");

    //     navigate('/',{
    //       state:useraccount
    //     });

    //   }
    //   if (res.data.code === 404) {
    //     setMsg("로그인 실패");
    //   }

    // });
  };

  return (
    <div className="home_body">
      <h1>로그인</h1>
      <form onSubmit={LoginFunc}>
        <div className="ID_form_align">
          <label htmlFor="id"> ID: </label>
          <input type="text" id="id" onChange={onIDhandler} />
        </div>
        <br />
        <div className="PW_form_align">
          <label htmlFor="password">PASSWORD : </label>
          <input type="password" onChange={onPwhandler} />
        </div>
        <br />
        <button className="Login_button" type="submit">
          로그인
        </button>
        <br />
        {msg}
      </form>
    </div>
  );
}

export default Login;
