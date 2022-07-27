import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/user-profile.css'

const UserProfile = () => {
  return (
    <div className='user-profile'>
      <Link to={-1}>Go back</Link>
    </div>
  )
}

export default UserProfile
