import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { MdSettings } from 'react-icons/md'; // 설정 아이콘
import axios from "axios";

import "./MyPage.scss";
// written by owen 2024/04/17

const MyPage = ({ user_id, opponent_id }) => {
  const [profile, setProfile] = useState({
    user_id: 0,
    follower_count: 0,
    following_count: 0,
    board_count: 0,
    
    comment_count: 0,
    likes_count: 0,
    img_path: "",
  });
  // const [opponentId, setOpponentId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 프로필 정보 가져오는 api
  const getProfile = async () => {
    try {
      // 요청 시작
      setError(null);
      setLoading(true);
      const response = await axios
        .get("profile", {
          params: {
            user_id: user_id,
            opponent_id: opponent_id,
          },
        })
        .then((response) => {
          setProfile(response.data);
        });
    } catch (e) {
      console.error("There was an error fetching the profile data:", error);
      setError(e);
    } finally {
      // 요청이 끝나면 로딩 상태를 false로 변경
      setLoading(false);
    }
  };

  //settings 아이콘 클릭 시 이동
  let navigate = useNavigate();
  const settingsClick = () => {
    navigate('/MyPage/Profile_Settings');
  }
  
  useEffect(() => {
    getProfile();
  }, profile);

  return (
    <div className="home_body">
      <div className="profile">
        <div className="profile-header">
          <figure className="avatar">
            <img src={profile.img_path} alt="" />
          </figure>
          <div className="nickname">Nickname</div>
          {/* userId와 opponentId 비교를 통한 조건부 렌더링 */}
          {user_id === opponent_id ? (
            <button className="settings-icon" onClick={settingsClick}>
              <MdSettings size="35px"/>
            </button>
          ) : (
            <button>팔로우</button>
          )}
        </div>
        <table>
          <thead>
            <tr>
              {/* 서버 연결 후 바꾸기
                <td>{profile.user.follower_count}</td>
                <td>{profile.user.following_count}</td>
                <td>{profile.user.board_ount}</td>
                <td>{profile.user.comment_count}</td>
                <td>{profile.user.likes_count}</td> */}
              <td>{profile.user?.follower_count || 0}</td>
              <td>{profile.user?.following_count || 0}</td>
              <td>{profile.user?.board_count || 0}</td>
              <td>{profile.user?.comment_count || 0}</td>
              {/* <td>{profile.user?.likes_count || 0}</td> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>팔로워 수</th>
              <th>팔로잉 수</th>
              <th>게시글 수</th>
              <th>작성한 댓글 수</th>
              {/* <th>공감 받은 수</th> */}
            </tr>
          </tbody>
        </table>
        <nav className="navigation">
          <ul>
            <div className="nav-item active">내 게시물</div>
            <div className="nav-item">내가 쓴 댓글</div>
            <div className="nav-item">좋아요 한 게시물</div>
            <div className="nav-item">저장한 게시물</div>
          </ul>
        </nav>
        <div className="content">
          <div className="post-card">
            <div className="post-avatar"></div>
            <div className="post-details">
              <div className="post-nickname">Nickname</div>
              <div className="post-content">Contents</div>
              <div className="post-image"></div>
              <div className="post-interactions">
                <div className="hashtags"> #hashtags </div>
                <div className="likes"> 👍 3.2K </div>
                <div className="comments"> 💬 </div>
              </div>
            </div>
          </div>
          {/* Repeat the .post-card for each post */}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
