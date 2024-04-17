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
      
      
    </div>
  );
};

export default Forum_page;
