import React from "react";
import "./Admin_Left_Side_bar.scss";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";

const Admin_Left_Side_bar = () => {
  return (
    <div className="side_bar">
      <TableContainer component={Paper} className="Recent_TableContainer">
        <Table size="large">
          <TableHead className="side_bar">
            <TableRow className="tableRow">
              <TableCell className="table_cell">
                <h3>관리자 페이지</h3>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody className="side_bar">
            <TableRow className="tableRow">
              <TableCell>
                <Link to="/Forum_page/Whole" className="forum_button">
                  회원관리
                </Link>
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>

            <TableRow className="tableRow">
              <TableCell>
                <Link to="/Forum_page/Whole" className="forum_button">
                  카테고리 관리
                </Link>
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>

            <TableRow className="tableRow">
              <TableCell>
                <Link to="/Forum_page/Whole" className="forum_button">
                  신고
                </Link>
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>

            <TableRow className="tableRow">
              <TableCell>
                <Link to="/Forum_page/Whole" className="forum_button">
                  문의사항
                </Link>
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Admin_Left_Side_bar;
