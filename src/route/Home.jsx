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
      <ul className="dropdown_menu"
        onClick={() => {
          setView(!view);
        }}
      >
        최신순 {view ? "⌃" : "⌄"}
        {view && <DropDown />}
      </ul>

    </div>
  );
};

export default Home;
