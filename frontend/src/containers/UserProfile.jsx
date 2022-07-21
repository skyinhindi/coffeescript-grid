import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/user-profile.css'

const UserProfile = () => {
  const navigate = useNavigate();
  return (
    <div className='user-profile'>
      <Link to={-1}>Go back</Link>
    </div>
  )
}

export default UserProfile
