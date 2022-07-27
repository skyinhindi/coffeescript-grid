import React, {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/SearchBar.css';

function SearchBar({searchTerm, setSearchTerm}) {
  const [toggleState, setToggleState] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={toggleState? 'search-bar focus':'search-bar'}>
        <img className={toggleState? 'search-icon-focus' : 'search-icon'} src='/images/search.svg' alt="" height={20} />
        <input
        value={searchTerm}
        onChange={(e) => { setSearchTerm(e.target.value); navigate('/'); }}
        onBlur={() => { setToggleState(false) }}
        onFocus={() => { setToggleState(true)  }} id='search-bar-input' placeholder='Explore Products' />
        {/* <i class="fa-solid fa-magnifying-glass"></i> */}
       
    </div>
  ) 
}

export default SearchBar