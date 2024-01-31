import React from 'react';
import '../assets/css/searchBar.css'; 

const SearchBar = () => {
  return (
    <body>
      <form className="search-container">
        <input type="text" id="search-bar" placeholder="What can I help you with today?" />
        <a href="#"><img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" alt="Search Icon" /></a>
      </form>
    </body>
  );
};

export default SearchBar;
