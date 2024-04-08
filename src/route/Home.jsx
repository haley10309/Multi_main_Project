import React from 'react';
import './Home.scss';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    function clickPostButton(){
        navigate('./Posting');
    }
    function clickFollowButton(){

    }
    return (
        <div className='home_body'>
            
            <button className='Post_button' onClick={clickPostButton}>Post</button>
            <button className='Follow_button' onClick={clickFollowButton}>Follow</button>
            <br/>
            <h1 className='IT_NEWS'>IT NEWS</h1>
        </div>
    );
};

export default Home;