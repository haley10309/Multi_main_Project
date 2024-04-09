import React from 'react';
import './Home.scss';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <div className='home_body'>
            
            
            <br/>
            <h1 className='IT_NEWS'>IT NEWS</h1>
        </div>
    );
};

export default Home;