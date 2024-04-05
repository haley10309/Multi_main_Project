import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from './Account/Login';
import { Component } from 'react';
import Join from './Account/Join';
import Home from './route/Home';


/* App.js */

class App extends Component {
  render(){
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = '/Login' element={<Login/>}/>
        <Route path = '/Join' element={<Join/>}/>
      </Routes>
      
    );
  }
  
}

export default App;