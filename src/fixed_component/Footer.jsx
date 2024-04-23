import React from "react";
import "./Footer.scss";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  let navigate = useNavigate();
  const gotoAdmin = () => {
    navigate('/admin/Manage_member');
  };
  return (
    <div>
      <h2> footer</h2>
      <button className="admin" onClick={gotoAdmin}>
        관리자 페이지
      </button>
    </div>
  );
};

export default Footer;
