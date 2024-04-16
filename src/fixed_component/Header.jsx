import React, { useState } from "react";
import "./Header.scss";


const Header = () => {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="header">
      <nav className="navigation">
        {/* <ul className="header_ul"> */}
        <li className="header_li_left">
          <a className="logo" href="/">
            DevOZ
          </a>
          
        </li>
        <img
            src="img/DevOZ_test_logo.png"
            className="test_logo"
            alt="React"
          />
        <input
          className="search_text"
          type="text"
          value={search}
          onChange={onChange}
          placeholder=" Hello World!"
        />
        
          <li className="header_li_right">
            <a className="header_mesu_text" href="/MyPage">
              MyPage
            </a>
            <a className="header_mesu_text" href="/Login">
              Login
            </a>
            <a className="header_mesu_text" href="/Join">
              join us
            </a>
          </li>
        

        {/* </ul> */}
      </nav>
    </div>
  );
};

export default Header;
