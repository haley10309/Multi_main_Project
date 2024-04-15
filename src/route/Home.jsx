import React, { useState } from "react";
import "./Home.scss";
import { Link, useNavigate } from "react-router-dom";
import DropDown from "./DropDown";

const Home = () => {
  const navigate = useNavigate();
  const [view, setView] = useState(false);

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

          <div className="time_and_img">
            <li className="upload_time">2 min ago</li>
            <img
              src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYLJauBsuuhYaRAYccQZ2d-UtBTCOgsHMQmw&s`}
              className="img_post"
              alt="React"
            />
          </div>
        </div>
        <div className="title_div">
          <li>'클로바X'는 왜 재미없는 답을 할까…네이버가 알려줌</li>
        </div>
        <div className="hashtag"></div>
        
      </div>

      
    </div>
  );
};

export default Home;
