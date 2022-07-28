import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useMoralis } from 'react-moralis'
import { Link } from 'react-router-dom'
import '../styles/user-profile.css'

const UserProfile = () => {
  const {user} = useMoralis();
  const navigate = useNavigate();
  return (
    <div className='user-profile'>
      <div className="">
        <button onClick={() => { navigate(-1) }}> Go back </button>
      </div>
      <div className="user">{user.id}</div>
    </div>
  )
}

export default UserProfile
