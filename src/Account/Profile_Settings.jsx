import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { MdSettings } from 'react-icons/md'; // 설정 아이콘
import axios from "axios";
import './Profile_Settings.scss';

const Profile_Settings = () => {
    // 상태 관리를 위한 useState 훅 사용
  const [email, setEmail] = useState('owen@test.com');
  const [currentNickname, setCurrentNickname] = useState('owenDorothy');
  const [newNickname, setNewNickname] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 로직 구현
    alert('프로필 정보가 업데이트 되었습니다.');
  };
  return (
    <div className="profile-settings">
      <h2>프로필 수정</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>내 계정</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled />
        </div>
        <div className="form-group">
          <label>현재 닉네임</label>
          <input type="text" value={currentNickname} disabled />
        </div>
        <div className="form-group">
          <label>변경 닉네임</label>
          <input type="text" value={newNickname} onChange={(e) => setNewNickname(e.target.value)} />
          <button type="button">중복확인</button>
        </div>
        <div className="form-group">
          <label>비밀번호</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label>변경 비밀번호</label>
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label>비밀번호 확인</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label>가입일</label>
          <input type="text" value="2024/04/11" disabled />
        </div>
        <button type="submit">정보수정</button>
      </form>
    </div>
  );
}

export default Profile_Settings;