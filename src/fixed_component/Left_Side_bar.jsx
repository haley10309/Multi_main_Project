import React from "react";
import "./Side_bar.scss";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

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
  return (
    <div className="side_bar">
      <TableContainer component={Paper} className="Recent_TableContainer">
        <Table size="small">
          <TableHead className="side_bar">
            <TableRow className="tableRow">
              <TableCell> <h3>Recent</h3></TableCell>
              <TableCell align="right"> edit</TableCell>
            </TableRow>
          </TableHead>

          <TableBody className="side_bar">
            <TableRow className="tableRow">
              <TableCell>Forum</TableCell>
              <TableCell align="right">
                <button>삭제</button>
              </TableCell>
            </TableRow>

            <TableRow className="tableRow">
              <TableCell>Forum</TableCell>
              <TableCell align="right">
                <button>삭제</button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} className="Recent_TableContainer">
        <Table size="large">
          <TableHead className="side_bar">
            <TableRow className="tableRow">
              <TableCell> <h3>Forums</h3></TableCell>
              <TableCell align="right"> edit</TableCell>
            </TableRow>
          </TableHead>

          <TableBody className="side_bar">
            <TableRow className="tableRow">
              <TableCell>Forum1</TableCell>
              <TableCell align="right">
                <HeartOutlined />
              </TableCell>
            </TableRow>

            <TableRow className="tableRow">
              <TableCell>Forum2</TableCell>
              <TableCell align="right">
                <HeartOutlined />
              </TableCell>
            </TableRow>

            <TableRow className="tableRow">
              <TableCell>Forum3</TableCell>
              <TableCell align="right">
                <HeartOutlined />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Sidebar className="side_bar">
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar> */}
    </div>
  );
};

export default Left_Side_bar;
