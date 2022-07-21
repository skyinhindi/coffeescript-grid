import React, {useState, useEffect} from 'react';
import '../styles/SearchBar.css';
import SearchIcon from '../assets/search.svg';

function SearchBar() {
  const [toggleState, setToggleState] = useState(false);

  return (
    <div className={toggleState? 'search-bar focus':'search-bar'}>
        <img className={toggleState? 'search-icon-focus' : 'search-icon'} src={SearchIcon} alt="" height={20} />
        <input
        onBlur={() => { setToggleState(false) }}
        onFocus={() => {setToggleState(true)  }} id='search-bar-input' placeholder='Explore Products' />
        {/* <i class="fa-solid fa-magnifying-glass"></i> */}
       
    </div>
  )
}

export default SearchBar