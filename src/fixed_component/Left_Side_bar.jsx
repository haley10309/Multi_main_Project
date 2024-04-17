import React, { useEffect, useState } from "react";
import "./Side_bar.scss";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Left_Side_bar = () => {
  const [recentArr, setRecentArr] = useState([]); // Recent forum names

  const addItem = (new_recent_forum) => {
    if (!recentArr.includes(new_recent_forum)) {
      //추가하려는 값이 리스트에 없을 때,
      if (recentArr.length >= 5) {
        //리스트 길이가 5가 넣을 때
        recentArr.pop();
      }
      const newItem = new_recent_forum;
      // 새 배열 생성 (기존 배열 복사 + 새 항목 추가)
      //const updatedArray = [...recentArr, newItem];
      const updatedArray = [newItem,...recentArr];
      setRecentArr(updatedArray);
    }
  };

  // 배열에서 항목 제거
  const removeItem = (itemToRemove) => {
    setRecentArr(recentArr.filter((item) => item !== itemToRemove));
  };

  useEffect(() => {
    const localData = localStorage.getItem("recentArr");

    if (localData) {
      setRecentArr(JSON.parse(localData));
    }
  }, []);

  // 등록 후, data 변화가 생길 때 마다 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("recentArr", JSON.stringify(recentArr));
  }, [recentArr]);

  return (
    <div className="side_bar">
      <TableContainer component={Paper} className="Recent_TableContainer">
        <Table size="small">
          <TableHead className="side_bar">
            <TableRow className="tableRow">
              <TableCell className="table_cell">
                <h3>Recent</h3>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody className="side_bar">
            {recentArr.map((forumArr) => (
              <TableRow className="tableRow" key={forumArr}>
                <TableCell>
                  <Link to="/Forum_page/Whole"  className="forum_button" state={{ forum_name: forumArr }} >
                    {forumArr}
                  </Link>
                </TableCell>
                <TableCell align="right">
                  <button onClick={() => removeItem(forumArr)}>삭제</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} className="Recent_TableContainer">
        <Table size="large">
          <TableHead className="side_bar">
            <TableRow className="tableRow">
              <TableCell className="table_cell">
                <h3>Forums</h3>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody className="side_bar">
            <TableRow className="tableRow">
              <TableCell>
                <Link
                  to="/Forum_page/Whole"
                  className="forum_button"
                  state={{ forum_name: "Forum1" }}
                  onClick={() => addItem("Forum1")}
                >
                  Forum1
                </Link>
              </TableCell>
              <TableCell align="right">
                <HeartFilled />
              </TableCell>
            </TableRow>

            <TableRow className="tableRow">
              <TableCell>
                <Link
                  to="/Forum_page/Whole"
                  className="forum_button"
                  state={{ forum_name: "Forum2" }}
                  onClick={() => addItem("Forum2")}
                >
                  Forum2
                </Link>
              </TableCell>
              <TableCell align="right">
                <HeartFilled />
              </TableCell>
            </TableRow>

            <TableRow className="tableRow">
              <TableCell>
                <Link
                  to="/Forum_page/Whole"
                  className="forum_button"
                  state={{ forum_name: "Forum3" }}
                  onClick={() => addItem("Forum3")}
                >
                  Forum3
                </Link>
              </TableCell>
              <TableCell align="right">
                <HeartFilled />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Left_Side_bar;
