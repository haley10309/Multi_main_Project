import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <nav className="navigation">
        <ul className="header_ul">
          <li className="header_li">
            <a className="logo" href="/">
              오조의 마법사
            </a>
          </li>

          <li className="header_li">
            <a className="header_mesu_text" href="#">
              About
            </a>
          </li>

          <li className="header_li">
            <a className="header_mesu_text" href="/MyPage">
              MyPage
            </a>
          </li>

          <li className="header_li">
            <a className="header_mesu_text" href="/Login">
              Login
            </a>
          </li>

          <li className="header_li">
            <a className="header_mesu_text" href="/Join">
              join us
            </a>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Header;
