import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"
import '../styles/LogoComp.css';

const Logo = ({setSelected}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => { setSelected('/');  navigate('/'); }} >
      <img width={150} className= 'logoimg' src={logo} alt="logo"/>
    </div>
  )
}

export default Logo
