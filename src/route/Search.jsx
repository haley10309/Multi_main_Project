import React from 'react';
import { useLocation } from 'react-router-dom' 



const Search = () => {
    const location = useLocation();
    const search_word = location.state.search_keyword;
    
    return (
        <div className="home_body">
            <li>{search_word}</li>
        </div>
    );
};

export default Search;