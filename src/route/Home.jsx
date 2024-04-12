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
          <img
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYLJauBsuuhYaRAYccQZ2d-UtBTCOgsHMQmw&s`}
            className="profile_img"
            alt="React"
          />
          <h4 className="profile_name">owenDorothy</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
