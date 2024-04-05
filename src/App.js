import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from './Account/Login';
import { Component } from 'react';
import Join from './Account/Join';
import Home from './route/Home';
import MyPage from './Account/MyPage';


/* App.js */

class App extends Component {
  render(){
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = '/Login' element={<Login/>}/>
        <Route path = '/Join' element={<Join/>}/>
        <Route path = './MyPage' element={<MyPage/>}/>
      </Routes>
      
    );
  }
  
}

export default App;