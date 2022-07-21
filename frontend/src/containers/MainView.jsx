import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ItemView from './ItemView';
import UserProfile from './UserProfile';
import SearchBar from '../components/SearchBar';


const MainView = () => {
  return (
    <div className='view-child'>
          <SearchBar />
          <Routes>
            <Route path='/' element={<ItemView />} />
            <Route path='category/:categoryId' element={<ItemView />} />
          </Routes>
    </div>
  )
}

export default MainView
