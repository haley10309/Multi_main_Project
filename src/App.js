import "./App.css";
import { Route, Routes,useLocation } from "react-router-dom";
import Login from "./Account/Login";
import { Component } from "react";
import Join from "./Account/Join";
import Home from "./route/Home";
import MyPage from "./Account/MyPage";
import Posting from "./route/Posting";
import Left_Side_bar from "./fixed_component/Left_Side_bar";
import Right_Side_bar from "./fixed_component/Right_Side_bar";
import Board_Detail from "./route/Board_Detail";
import Forum_page from "./route/Forum_page";
import Whole from "./route/Section_pages/Whole";
import News from "./route/Section_pages/News";
import Question from "./route/Section_pages/Question";
import Debug from "./route/Section_pages/Debug";
import Study from "./route/Section_pages/Study";

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
          <Route path="/Posting" element={<Posting />} />
          <Route path="/Login" element={<Login />} />
          <Route path='/Board_Detail' element={<Board_Detail/>}/>
          <Route path='/Forum_page' element={<Forum_page/>}/>
          <Route path="/Forum_page/Whole" element={<Whole/>}/>
          <Route path="/Forum_page/News" element={<News/>}/>
          <Route path="/Forum_page/Question" element={<Question/>}/>
          <Route path="/Forum_page/Debug" element={<Debug/>}/>
          <Route path="/Forum_page/Study" element={<Study/>}/>
          

        </Routes>
        <Routes>
        {/* <Route path="*" element={<CustomSideBar_Right />} /> */}
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