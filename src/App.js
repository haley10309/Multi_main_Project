import "./App.css";
import { Route, Routes,useLocation } from "react-router-dom";
import Login from "./Account/Login";
import { Component } from "react";
import Join from "./Account/Join";
import Home from "./route/Home";
import MyPage from "./Account/MyPage";
import Post from "./route/Post";
import Side_bar from "./fixed_component/Side_bar";

/* App.js */

class App extends Component {
  render() {
    return (
      <>
      <Routes>
        <Route path="*" element={<CustomSideBar />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Posting" element={<Post />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Routes>
        <Route path="*" element={<CustomSideBar />} />
        </Routes>
      </>
    );
  }
}

function CustomSideBar() {
  let location = useLocation();
  if (location.pathname === "/Login"||location.pathname=== "/Join") {
    return null; // Don't show Side_bar when path is '/Login'
  }
  return <Side_bar />;
}

export default App;