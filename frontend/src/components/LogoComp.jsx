import React from 'react';
import Logo from './Logo';
import '../styles/LogoComp.css';

function LogoComp({width, height}) {
  return (
    <div className='logo-component'>
        <div>
            <Logo width={width} height={height}/>
        </div>
        <div>
            <span className='heading-primary'>Welcome to the revolution!</span>
        </div>
    </div>
  )
}

export default LogoComp