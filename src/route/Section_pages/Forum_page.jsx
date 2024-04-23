import React, { useEffect, useState } from "react";
import "./Forum_page.scss";
import { Link, useLocation } from "react-router-dom";
import DropDown from "../DropDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MessageIcon from "@mui/icons-material/Message";
import axios from "axios";

const Forum_page = () => {
  const location = useLocation();
  const forumName = location.state.forum_name; //forum 이름
  const [view, setView] = useState(false);
  const current_section = location.state.current_section; //section이름
  const current_forum_id = location.state.current_forum_id; //forum id
  const [section_menu, setSection_menu] = useState([]);
  const [board, setBoard] = useState([]); //게시물

  useEffect(() => {
    axios
      .get("/board")
      .then((response) => {
        const data = response.data;
        const forumData = data.forum; // Access the forum data
        const sections = forumData.section.map((section) => section.section_name);
        const boards = forumData.board.map((board) => ({
          pro_path: board.pro_path,
          nickname: board.nickname,
          create_date: board.create_date,
          title: board.title,
          like_count: board.like_count,
          comment_count: board.comment_count,
          img_path: board.img_path,
        }));
        setSection_menu(sections);
        setBoard(boards);
      })
      .catch((error) => {
        console.error("axios문제: ", error);
      });
  }, []);

  return (
    <div className="home_body">
      <h1 className="forum_name">{forumName}</h1>
      <div className="section_navigation_bar">
        {section_menu.map((section, index) => (
          <Link
            key={index}
            className="section_single_manu"
            activeClassName="active"
            to={`../Forum_page`}
            state={{ current_section: section, forum_name: forumName }}
          >
            <li className="section_menu_li">{section}</li>
          </Link>
        ))}
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
      <div  className="posting_box">
          <div className="profile_box">
            <div className="profile_img_and_name">
              <img
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYLJauBsuuhYaRAYccQZ2d-UtBTCOgsHMQmw&s`}
                className="profile_img"
                alt="React"
              />
              <h4 className="profile_name">nickname</h4>
            </div>
            <li className="upload_time">create_date</li>
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

      {board.map((single_board, index) => (
        <div key={index} className="posting_box">
          <div className="profile_box">
            <div className="profile_img_and_name">
              <img
                src={single_board.pro_path}
                className="profile_img"
                alt="React"
              />
              <h4 className="profile_name">{single_board.nickname}</h4>
            </div>
            <li className="upload_time">{single_board.create_date}</li>
          </div>
          <div className="title_div">
            <div className="board_title">
              <div>
                <Link
                  className="title_to_Board"
                  to={"/Board_Detail"}
                  state={{ forum_name: "하영" }}
                >
                  <li className="title_li">{single_board.title}</li>
                </Link>
              </div>

              <div className="likes_and_comment">
                <ThumbUpIcon />
                {single_board.like_count}
                <MessageIcon />
                {single_board.comment_count}
              </div>
            </div>

            <img
              src={single_board.img_path}
              className="img_post"
              alt="React"
            />
          </div>

          <div className="hashtag"></div>
        </div>
      ))}
    </div>
  );
};

export default Forum_page;
