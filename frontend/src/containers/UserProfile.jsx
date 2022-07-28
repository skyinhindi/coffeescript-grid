import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useMoralis } from 'react-moralis'
import { Link } from 'react-router-dom'
import '../styles/user-profile.css'
import UserSidebar from './UserSidebar'
import About from './About'
import History from './History'
import Settings from './Settings'
import Wishlist from './Wishlist'


const UserProfile = () => {
  const {user} = useMoralis();
  const navigate = useNavigate();
  return (
    <div className='user-profile'>
      <UserSidebar />
      <div className="user-view">
        <btn onClick={() => { navigate('/') }}>Go home</btn>
        <Routes>
          <Route path='/about' element={<About />}/>
          <Route path='/wishlist' element={<Wishlist />}/>
          <Route path='/history' element={<History />}/>
          <Route path='/settings' element={<Settings />}/>
        </Routes>
      </div>
    </div>
  )
}

export default UserProfile
