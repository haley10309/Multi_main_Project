import React, { useState } from 'react';
import axios from 'axios';

import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './Join_Login.scss';

const Join = () => {
  const navigate = useNavigate();
  //초기값
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickName, setNickName] = useState('');
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  //오류 메시지
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [nickNameMessage, setNickNameMessage] = useState('');
  const [nameMessage, setNameMessage] = useState('');
  const [birthMessage, setBirthMessage] = useState('');
  //유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isNickNmae, setIsNickName] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isBirth, setIsBirth] = useState(false);
  //비밀번호 표시
  const [showPassword, setShowPassword] = useState({
    type: 'password',
    visible: false,
  });
  //비밀번호 확인 표시
  const [showPasswordConfirm, setShowPasswordConfirm] = useState({
    type: 'password',
    visible: false,
  });

  //이벤트 핸들러
  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage('이메일의 형식이 올바르지 않습니다');
      setIsEmail(false);
    } else {
      setEmailMessage('사용 가능한 이메일 입니다');
      setIsEmail(true);
    }
  };

  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요'
      );
      setIsPassword(false);
    } else {
      setPasswordMessage('안전한 비밀번호 입니다');
      setIsPassword(true);
    }
  };

  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);

    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage('비밀번호가 일치하지 않습니다');
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage('비밀번호가 일치합니다');
      setIsPasswordConfirm(true);
    }
  };

  const onChangeNickName = (e) => {
    const currentNickName = e.target.value;
    setNickName(currentNickName);
    const nickNameRegExp = /^[a-zA-z0-9]{4,12}$/;

    if (!nickNameRegExp.test(currentNickName)) {
      setNickNameMessage(
        '닉네임은 4-12글자 대소문자 또는 숫자만 입력 가능합니다'
      );
      setIsNickName(false);
    } else {
      setNickNameMessage('사용가능한 닉네임 입니다');
      setIsNickName(true);
    }
  };
  //생년월일
  const onChangeBirth = (e) => {
    const dateClick = e.target.value;
    setBirth(dateClick);
  };
  //비밀번호 표시 핸들러
  const handleShowPassword = (e) => {
    setShowPassword(function () {
      if (!showPassword.visible) {
        return { type: 'text', visible: true };
      } else {
        return { type: 'password', visible: false };
      }
    });
  };
  //비밀번호 확인 표시 핸들러
  const handleShowPasswordConfirm = (e) => {
    setShowPasswordConfirm(function () {
      if (!showPasswordConfirm.visible) {
        return { type: 'text', visible: true };
      } else {
        return { type: 'password', visible: false };
      }
    });
  };
  //이메일 중복 확인 핸들러
  const handleEmailCheck = async (e) => {
    e.preventDefault();
    await axios
      .post('url', {
        user_email: 'email',
      })
      .then((response) => {
        if (response !== null) {
          alert('중복된 이메일 입니다');
        } else {
          alert('통과');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //회원가입 정보 보내기 핸들러
  const handleJoin = (e) => {
    e.preventDefault();
    if (isEmail && isPassword && isPasswordConfirm && isNickNmae) {
      axios
        .post('url', {
          user_email: 'email',
          user_name: 'name',
          password: 'password',
          nickname: 'nickName',
          dateOfBirth: 'birth',
        })
        .then((response) => {
          console.log(response);
          alert('회원가입을 축하합니다');
          return navigate('/Login');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert('가입 양식을 확인하세요');
    }
  };

  //HTML
  return (
    <div className="wrap">
      <h1>회원가입</h1>
      <form className="join_form" action="">
        <div className="form_list">
          <label htmlFor="email">E-mail</label>
          <br />
          <input
            id="email"
            type="email"
            value={email}
            name="email"
            placeholder="이메일을 입력해주세요"
            onChange={onChangeEmail}
          />
          <button className="email_button" onClick={handleEmailCheck}>
            중복확인
          </button>
          <p className="message">{emailMessage}</p>
        </div>
        <div className="form_list">
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            id="name"
            onChange={onChangeName}
          />
          <p></p>
        </div>
        <div className="form_list">
          <label htmlFor="nickName">Nick Name</label> <br />
          <input
            id="nickName"
            name="nickName"
            value={nickName}
            placeholder="닉네임을 입력해주세요"
            onChange={onChangeNickName}
          />
          <p className="message">{nickNameMessage}</p>
        </div>
        <div className="form_list">
          <label htmlFor="password">Password</label> <br />
          <input
            type={showPassword.type}
            id="password"
            name="password"
            value={password}
            placeholder="비밀번호를 입력해주세요"
            onChange={onChangePassword}
          />
          <span onClick={handleShowPassword} className="visible_icon">
            {showPassword.visible ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
          <p className="message">{passwordMessage}</p>
        </div>
        <div className="form_list">
          <label htmlFor="passwordConfirm">Password Confirm</label> <br />
          <input
            type={showPasswordConfirm.type}
            id="passwordConfirm"
            name="passwordConfirm"
            value={passwordConfirm}
            placeholder="비밀번호를 다시 입력해주세요"
            onChange={onChangePasswordConfirm}
          />
          <span onClick={handleShowPasswordConfirm} className="visible_icon">
            {showPasswordConfirm.visible ? (
              <AiFillEye />
            ) : (
              <AiFillEyeInvisible />
            )}
          </span>
          <p className="message">{passwordConfirmMessage}</p>
        </div>
        <div className="form_list">
          <label htmlFor="birth">생년월일</label> <br />
          <input
            type="date"
            id="birth"
            value={birth}
            onChange={onChangeBirth}
          />
          <p></p>
        </div>
        <button className="join_button" onClick={handleJoin}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Join;
