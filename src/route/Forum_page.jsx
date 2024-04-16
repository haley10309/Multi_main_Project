import React, { useState } from "react";
//import "./Home.scss";
import "./Forum_page.scss";
import { Link, useNavigate,useLocation } from "react-router-dom";
import DropDown from "./DropDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import MessageIcon from "@mui/icons-material/Message";

const Forum_page = () => {
  
  const location = useLocation();
  const forumName = location.state.forum_name;
  const [view, setView] = useState(false);
  

  return (
    <div className="home_body">
      <h1 className="forum_name">{forumName}</h1>
      <div className="section_navigation_bar">
        <Link className="section_single_manu" to={'/whole'} ><li className="na">전체</li></Link>
        <Link className="section_single_manu" to={'/news'} ><li className="na">뉴스</li></Link>
        <Link className="section_single_manu" to={'/question'} ><li className="na">질문</li></Link>
        <Link className="section_single_manu" to={'/Debug'} ><li className="na">Debug</li></Link>
        <Link className="section_single_manu" to={'/Study'} ><li className="na">Study</li></Link>
      </div>
      <div className="order_menu">
        <ul
          className="dropdown_menu"
          onClick={() => {
            setView(!view);
          }}
        >
          최신순 {view ? "⌃" : "⌄"}
          {view && <DropDown />}
        </ul>
      </div>

      <div className="posting_box">
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
              <Link className="title_to_Board" to={'/Board_Detail'} state={{ forum_name :"하영" }}><li className="title_li">하영</li></Link>
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
    </div>
  );
};

export default Forum_page;
