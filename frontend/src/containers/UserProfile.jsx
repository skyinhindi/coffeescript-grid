import React from 'react'
import { useMoralis } from 'react-moralis'
import { Link } from 'react-router-dom'
import '../styles/user-profile.css'

const UserProfile = () => {
  const {user} = useMoralis();
  return (
    <div className='user-profile'>
      <div className="">
        <Link to={-1}>Go back</Link>
      </div>
      <div className="user">{user.id}</div>
    </div>
  )
}

export default UserProfile
