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
        <btn onClick={() => { navigate(-1) }}>Go back</btn>
      </div>
      <div className="user">{user.id}</div>
    </div>
  )
}

export default UserProfile
