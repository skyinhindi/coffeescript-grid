import React from 'react'
import logo from "../assets/logo.png"

const Logo = ({width, height}) => {
  return (
    <div className='logo'>
      <img className= 'logoimg' src={logo} alt="logo" width={width} height={height}/>
    </div>
  )
}

export default Logo
