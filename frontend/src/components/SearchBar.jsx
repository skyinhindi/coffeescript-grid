import React from 'react';
import '../styles/SearchBar.css';
function SearchBar() {
  return (
    <div className='search-bar-component'>
        <input id='search-bar-input' placeholder='Explore Products' />
        {/* <i class="fa-solid fa-magnifying-glass"></i> */}
       
    </div>
  )
}

export default SearchBar