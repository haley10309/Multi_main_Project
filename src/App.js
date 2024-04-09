import "./App.css";
import { Route, Routes,useLocation } from "react-router-dom";
import Login from "./Account/Login";
import { Component } from "react";
import Join from "./Account/Join";
import Home from "./route/Home";
import MyPage from "./Account/MyPage";
import Post from "./route/Post";
import Left_Side_bar from "./fixed_component/Left_Side_bar";
import Right_Side_bar from "./fixed_component/Right_Side_bar";

/* App.js */

class App extends Component {
  render() {
    return (
      <>
      <Routes>
        <Route path="*" element={<CustomSideBar_Left />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Posting" element={<Post />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Routes>
        <Route path="*" element={<CustomSideBar_Right />} />
        </Routes>
      </>
    );
  }
}

function CustomSideBar_Left() {
  let location = useLocation();
  if (location.pathname === "/Login"||location.pathname=== "/Join") {
    return null; // Don't show Side_bar when path is '/Login'
  }
  return <Left_Side_bar />;
}
function CustomSideBar_Right() {
  let location = useLocation();
  if (location.pathname === "/Login"||location.pathname=== "/Join") {
    return null; // Don't show Side_bar when path is '/Login'
  }
  return <Right_Side_bar />;
}

export default App;