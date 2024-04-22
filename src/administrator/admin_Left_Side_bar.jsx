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
                <Link to="/admin/Manage_member" className="forum_button">
                  회원관리
                </Link>
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>

            <TableRow className="tableRow">
              <TableCell>
                <Link to="/admin/Manage_forum" className="forum_button">
                  포럼관리
                </Link>
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>

            <TableRow className="tableRow">
              <TableCell>
                <Link to="/admin/Report" className="forum_button">
                  신고
                </Link>
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>

            <TableRow className="tableRow">
              <TableCell>
                <Link to="/admin/Inquiry" className="forum_button">
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
