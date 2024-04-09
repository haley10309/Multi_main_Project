import React from "react";
import "./Side_bar.scss";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Right_Side_bar = () => {
  const navigate = useNavigate();
  function clickPostButton() {
    navigate("./Posting");
  }
  function clickFollowButton() {}
  return (
    <div className="side_bar">
      <div className="forum_explanation">
        <div className="forum_title_div">
          <h3 className="forum_title">IT NEWS </h3>
          <button className="Post_button" onClick={clickPostButton}>
            + 글쓰기
          </button>
        </div>

        <li className="forum_detail_explanation">
          IT 관련해서 가장 빠른 뉴스를 전달해드리는 포럼!
        </li>
        <div className="numerical_data">
          <div className="numerical_data_single">
            <li className="follower_box">123</li>
            <li className="follower_name">참여자수</li>
          </div>
          <div className="numerical_data_single">
            <li className="follower_box">123</li>
            <li className="follower_name">참여자수</li>
          </div>
          <div className="numerical_data_single">
            <li className="follower_box">123</li>
            <li className="follower_name">참여자수</li>
          </div>
        </div>
        <button className="Follow_button" onClick={clickFollowButton}>
          즐겨찾기 추가
        </button>
      </div>
      <div className="Hot_topic">
        <h2 className="hot_topic_title">인기글</h2>
        <h4>갤S24 AI폰 효과 톡톡…삼성전자 1분기 영업익, MX가 절반 이상 벌었다</h4>
        <h4>에티버스, 3년 연속 매출 1조 클럽 가입</h4>
        <h4>케이크 위에 웬 원숭이?…감쪽같이 만든 AI</h4>
        <h4>애플 앱스토어 접속 오류로 2시간 먹통…“해결됐지만 원인은 글쎄</h4>
        <h4>남극서 조류인플루엔자로 폐사한 펭귄 532마리 추가 발견…피해 규모 수천 마리 넘어설 듯</h4>
      </div>
    </div>
  );
};

export default Right_Side_bar;
