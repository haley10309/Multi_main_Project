import React, { useState, useEffect } from 'react';
import axios from "axios";

import './MyPage.scss';

const MyPage = ({ userId }) => {
  const [profile, setProfile] = useState({
    followerCount: 0,
    followingCount: 0,
    postCount: 0,
    commentCount: 0,
    likeReceivedCount: 0,
  });
  useEffect(() => {
    axios
      .get(`/profile/${userId}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the profile data:", error);
      });
  }, [userId]);
  

    return (
        <div className='home_body'>
        <div className="profile">
                <div className="profile-header">
                    <div className="avatar"></div>
                    <div className="nickname">Nickname</div>
                    <div className="settings-icon"></div>
                </div>
                <table>
            <thead>
              <tr>
                <td>{profile.followerCount}</td>
                <td>{profile.followingCount}</td>
                <td>{profile.postCount}</td>
                <td>{profile.commentCount}</td>
                <td>{profile.likeReceivedCount}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>팔로워 수</th>
                <th>팔로잉 수</th>
                <th>게시글 수</th>
                <th>작성한 댓글 수</th>
                <th>공감 받은 수</th>
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
}

export default MyPage;