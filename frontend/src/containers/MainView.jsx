import React, {useState, useEffect} from 'react'
import {Routes, Route, useParams} from 'react-router-dom'
import ItemView from './ItemView';
import UserProfile from './UserProfile';
import SearchBar from '../components/SearchBar';


const MainView = ({selected, setSelected}) => {
  
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className='view-child'>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <Routes>
            <Route path='/' element={<ItemView setSelected={setSelected}  searchTerm={searchTerm}/>} />
            <Route path='category/:categoryId' element={<ItemView setSelected={setSelected} searchTerm={searchTerm} />} />
          </Routes>
    </div>
  )
}

export default MainView
