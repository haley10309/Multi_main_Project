import React, { useState, useEffect } from "react";
import "./Home.scss";
import { Link, useNavigate } from "react-router-dom";
import DropDown from "./DropDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import MessageIcon from "@mui/icons-material/Message";
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  
  const [board, setBoard] = useState([]); //게시물 변수

  useEffect(() => {
    axios.get('/home')
      .then(response => {
        const data = response.data;
        const data_board = data.board;
       
        const boards = data_board.map((board) => ({
          pro_path: board.pro_path,
          nickname: board.nickname,
          create_date: board.create_date,
          title: board.title,
          like_count: board.like_count,
          comment_count: board.comment_count,
          img_path: board.img_path,
        }))
        setBoard(boards);
        console.log(response);
       
      })
      .catch(error => {
        console.error('Error fetching IT news:', error);
      });
  }, []);

  return (
    <div className="home_body">
      <h1 className="IT_NEWS">IT NEWS</h1>
      <div className="">
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
            <h4 className="profile_name">owenDorothy</h4>
          </div>
          <li className="upload_time">2 min ago</li>
        </div>

        <div className="title_div">
          <div className="board_title_and_likes" >
            <div className="board_title">
              <li className="title_li">'클로바X'는 왜 재미없는 답을 할까…네이버가 알려줌
              sdfasdfasdfasdfasdfasdfasdfasdfsdsdsdfasdfasdfasdfasdfasdfasdfasdfsdsdsdfasdfasdfasdfasdfasdfasdfasdfsdsd

              </li>
            </div>

            <div className="likes_and_comment">
              <ThumbUpIcon />
              3.2k
              <MessageIcon />
              400
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
      {board.map((news)=>{
        <div className="posting_box">
        <div className="profile_box">
          <div className="profile_img_and_name">
            <img
              src={news.img_path}
              className="profile_img"
              alt="React"
            />
            <h4 className="profile_name">{news.nickname}</h4>
          </div>
          <li className="upload_time">{news.create_date}</li>
        </div>

        <div className="title_div">
          <div className="board_title_and_likes" >
            <div className="board_title">
              <li className="title_li">{news.title}</li>
            </div>

            <div className="likes_and_comment">
              <ThumbUpIcon />
              {news.like_count}
              <MessageIcon />
              {news.comment_count}
            </div>
          </div>

          <img
            src={news.img_path}
            className="img_post"
            alt="React"
          />
        </div>

        <div className="hashtag"></div>
      </div>
      })}
      
      
    </div>
  );
};

export default Home;
