import React, { useState } from "react";
import "./Header.scss";
import { useNavigate } from 'react-router-dom';



const Header = () => {
  const [search_word, setSearch_word] = useState("");
  const navigate = useNavigate();


  const searchItems = (searchValue) => { //검색 함수
    setSearch_word(searchValue);
        
  }
  const onSubmitSearch = (e) => {
    if (e.key === "Enter") {
      //enter키를 눌렀을 때 동작할 코드
      navigate('/Search', { state: { search_keyword: search_word } });

    }
  };
  return (
    <div className="header">
      <nav className="navigation">
       
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
          value={search_word}
          onChange={(e) => searchItems(e.target.value)}
          
          onKeyUp={(e) => onSubmitSearch(e)}
          placeholder=" Hello World!"
        />
        
          <li className="header_li_right">
            <a className="header_mesu_text" href="/Posting">
              Posting
            </a>
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
