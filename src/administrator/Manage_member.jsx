import React, { useState, useEffect } from "react";
import "./Manage_member.scss";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";



const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "Name", headerName: "user_name", width: 130 },
  { field: "NickName", headerName: "user_nickname", width: 200 },
  { field: "age", headerName: "Age",   type: "number", width: 100, },
  {
    field: "JoinDate",
    headerName: "date_of_assign",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    // valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const row_example = [
  { id: 1, Name: "Snow", NickName: "Jon", age: 35 , JoinDate:"2023-01-01"},
  { id: 2, Name: "Lannister", NickName: "Cersei", age: 42 ,JoinDate:"2023-01-01"},
  { id: 3, Name: "Lannister", NickName: "Jaime", age: 45 ,JoinDate:"2023-01-01"},
  { id: 4, Name: "Stark", NickName: "Arya", age: 16,JoinDate:"2023-01-01" },
  { id: 5, Name: "Targaryen", NickName: "Daenerys", age: null,JoinDate:"2023-01-01" },
  { id: 6, Name: "Melisandre", NickName: null, age: 150,JoinDate:"2023-01-01" },
  { id: 7, Name: "Clifford", NickName: "Ferrara", age: 44,JoinDate:"2023-01-01" },
  { id: 8, Name: "Frances", NickName: "Rossini", age: 36,JoinDate:"2023-01-01"},
  { id: 9, Name: "Roxie", NickName: "Harvey", age: 65 ,JoinDate:"2023-01-01"},
];
const Manage_member = () => {


  const [rows, setRows] = useState([]);



  useEffect(() => {
    // Fetch data from server and setRows when component mounts
    axios.get("URL_TO_YOUR_ENDPOINT")
      .then(response => {
        setRows(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []); 


  
  return (
    <div className="whole_box">
        <h2 className="title" >회원 관리</h2>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
        className="data_chart"
          rows={row_example}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Manage_member;
