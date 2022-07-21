import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"

const Logo = ({width, height}) => {
  const navigate = useNavigate();
  return (
    <div className='logo' onClick={() => { navigate('/'); }} >
      <img className= 'logoimg' src={logo} alt="logo" width={width} height={height}/>
    </div>
  )
}

export default Logo
