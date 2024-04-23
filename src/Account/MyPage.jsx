import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MdSettings } from "react-icons/md"; // 설정 아이콘
import axios from "axios";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import MessageIcon from "@mui/icons-material/Message";

import "./MyPage.scss";
// written by owen 2024/04/17

// user_id 나중에 토큰으로 바꾸기
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

  // 현재 선택된 항목을 관리하는 state
  const [activeItem, setActiveItem] = useState("내 게시물");

  // 항목 클릭 이벤트 핸들러
  const handleItemClick = (itemName) => {
    setActiveItem(itemName); // 클릭된 항목으로 state 업데이트
  };

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
  const fetchData = async () => {
    try {
      setLoading(true);
      // 프로필 정보 API 호출
      const profileResponse = await axios.get(`/profile/${user_id}`);
      // 게시물 목록 API 호출
      const postsResponse = await axios.get(`/posts/${user_id}`);
      setProfile({
        ...profileResponse.data,
        posts: postsResponse.data,
      });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  //settings 아이콘 클릭 시 이동
  let navigate = useNavigate();
  const settingsClick = () => {
    navigate("/MyPage/Profile_Settings");
  };

  useEffect(() => {
    getProfile();
    fetchData();
  }, profile);
  // }, [user_id]);

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
              <MdSettings size="35px" />
            </button>
          ) : (
            <button>팔로우</button>
          )}
        </div>
        <table>
          <thead>
            <tr>
              <td>{profile.user?.follower_count || 0}</td>
              <td>{profile.user?.following_count || 0}</td>
              <td>{profile.user?.board_count || 0}</td>
              <td>{profile.user?.comment_count || 0}</td>
              <td>{profile.user?.likes_count || 0}</td>
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
            <div
              className={`nav-item ${
                activeItem === "내 게시물" ? "active" : ""
              }`}
              onClick={() => handleItemClick("내 게시물")}
            >
              내 게시물
            </div>
            <div
              className={`nav-item ${
                activeItem === "내가 쓴 댓글" ? "active" : ""
              }`}
              onClick={() => handleItemClick("내가 쓴 댓글")}
            >
              내가 쓴 댓글
            </div>
            <div
              className={`nav-item ${
                activeItem === "좋아요 한 게시물" ? "active" : ""
              }`}
              onClick={() => handleItemClick("좋아요 한 게시물")}
            >
              좋아요 한 게시물
            </div>
            <div
              className={`nav-item ${
                activeItem === "저장한 게시물" ? "active" : ""
              }`}
              onClick={() => handleItemClick("저장한 게시물")}
            >
              저장한 게시물
            </div>
          </ul>
        </nav>
        <div className="posts">
          {(profile.posts || []).map((post) => (
            <div key={post.id} className="post">
              <div className="post-header">
                <img src={post.img} alt={post.title} />
                <div>{post.nickname}</div>
                <div>{post.create_date}</div>
              </div>
              <div className="post-body">
                <h4>{post.title}</h4>
                <p>{post.hashtags && post.hashtags.join(", ")}</p>{" "}
                {/* 해시태그 배열이 존재할 경우 문자열로 변환 */}
                <div className="post-footer">
                  <ThumbUpIcon /> {post.like_count}
                  <MessageIcon /> {post.comment_count}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="posting_box">
        <div className="profile_box">
          <div className="profile_img_and_name">
            <img
              src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYLJauBsuuhYaRAYccQZ2d-UtBTCOgsHMQmw&s`}
              className="profile_img"
              alt="React"
            />
            <h4 className="profile_name">nick name</h4>
          </div>
          <li className="upload_time">create date</li>
        </div>
        <div className="title_div">
          <div className="board_title">
            <div>
              <Link
                className="title_to_Board"
                to={"/Board_Detail"}
                state={{ forum_name: "하영" }}
              >
                <li className="title_li">title</li>
                <li className="title_li">Hashtag</li>
              </Link>
            </div>

            <div className="likes_and_comment">
              <ThumbUpIcon />
              like_count
              <MessageIcon />
              comment_count
            </div>
          </div>

          <img
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYLJauBsuuhYaRAYccQZ2d-UtBTCOgsHMQmw&s`}
            className="img_post"
            alt="React"
          />
        </div>

        <div className="hashtag"></div>
      </div>
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
        </div> */}
      </div>
    </div>
  );
};

export default MyPage;
