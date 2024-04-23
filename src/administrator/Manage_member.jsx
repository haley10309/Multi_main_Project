import React, { useState, useEffect } from "react";
import "./Manage_member.scss";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  { field: "user_id", headerName: "ID", width: 100 },
  { field: "nickname", headerName: "user_name", width: 130 },
  { field: "email", headerName: "email", width: 200 },
  { field: "가입일", headerName: "JoinDate", width: 160 },
];

const Manage_member = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("/admin/Manage_member")
      .then((response) => {
        setRows(response.data);
        console.log(rows);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="whole_box">
      <h2 className="title">회원 관리</h2>
      <div style={{ height: 400, width: "100%" }}>
        {rows.map((row_cell) => {
          <DataGrid
            className="data_chart"
            rows={rows}
            columns={columns}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />;
        })}
      </div>
    </div>
  );
};

export default Manage_member;
