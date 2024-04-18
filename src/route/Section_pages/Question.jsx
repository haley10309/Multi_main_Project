import React, { useState } from "react";
import Forum_page from "./Forum_page";
import "./Forum_page.scss";
import { Link, useLocation } from "react-router-dom";

import DropDown from "../DropDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import MessageIcon from "@mui/icons-material/Message";

const Question = () => {
  const [view, setView] = useState(false);
  const location = useLocation();
  const forumName = location.state.forum_name;

  return (
    <div className="home_body">
      <Forum_page />
      <div className="section_navigation_bar">
        <Link
          className="section_single_manu"
          activeClassName="active"
          to={"../Forum_page/Whole"}
          state={{ forum_name: forumName }}
        >
          <li className="section_menu_li">전체</li>
        </Link>
        <Link
          className="section_single_manu"
          activeClassName="active"
          to={"../Forum_page/News"}
          state={{ forum_name: forumName }}
        >
          <li className="section_menu_li">뉴스</li>
        </Link>
        <Link
          className="active_menu"
          activeClassName="active"
          to={"../Forum_page/question"}
          state={{ forum_name: forumName }}
        >
          <li className="section_menu_li">질문</li>
        </Link>
        <Link
          className="section_single_manu"
          activeClassName="active"
          to={"../Forum_page/Debug"}
          state={{ forum_name: forumName }}
        >
          <li className="section_menu_li">Debug</li>
        </Link>
        <Link
          className="section_single_manu"
          activeClassName="active"
          to={"../Forum_page/Study"}
          state={{ forum_name: forumName }}
        >
          <li className="section_menu_li">Study</li>
        </Link>
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
              <Link
                className="title_to_Board"
                to={"/Board_Detail"}
                state={{ forum_name: "하영" }}
              >
                <li className="title_li">Question {forumName}</li>
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
    </div>
  );
};

export default Question;
