import React from 'react';
import './Board_Detail.scss';

import { useLocation } from "react-router-dom";

const Board_Detail = () => {
    const location = useLocation();
    const forumName = location.state.forum_name;
    return (
        <div className='home_body'>
            {forumName}
        </div>
    );
};

export default Board_Detail;
