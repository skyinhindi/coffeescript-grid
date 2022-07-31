import React from 'react';
import Logo from './Logo';
import '../styles/LogoComp.css';
import { useNavigate } from 'react-router-dom';

function LogoComp() {
  const navigate = useNavigate();

  return (
    <div onClick={() => { navigate('/'); }}  className='logo-component'>
        <div>
            <Logo width={200} height={30}/>
        </div>
        {/* <div>
            <span className='heading-primary'>Welcome to the revolution!</span>
        </div> */}
    </div>
  )
}

export default LogoComp