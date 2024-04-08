import React from 'react';
import './Home.scss';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    function clickPostButton(){
        navigate('./Posting');
    }
    return (
        <div className='home_body'>
            <h2 className='text'>home</h2>
            <button className='Post_button' onClick={clickPostButton}>Post</button>
        </div>
    );
};

export default Home;