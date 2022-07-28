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
import BackButton from '../components/BackButton'


const UserProfile = ({cartItems, setCartItems, selected, setSelected}) => {
  console.log(cartItems);
  const {user} = useMoralis();
  const navigate = useNavigate();
  return (
    <div className='user-profile'>
      <UserSidebar selected={selected} setSelected={setSelected} />
      <div className="view-child">
      <BackButton />
      <div className="heading-pfp">Cart</div>
      <div className="user-view">
         <Routes>
          <Route path='/about' element={<About />}/>
          <Route path='/wishlist' element={<Wishlist cartItems={cartItems} setCartItems={setCartItems} />}/>
          <Route path='/history' element={<History />}/>
          <Route path='/settings' element={<Settings />}/>
        </Routes>
      </div>
      </div>
    </div>
  )
}

export default UserProfile
