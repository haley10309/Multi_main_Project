import React from "react";
import "./Side_bar.scss";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const Side_bar = () => {
  return (
    <div>
      <Sidebar className="side_bar">
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
      </Sidebar>
      
    </div>
  );
};

export default Side_bar;
