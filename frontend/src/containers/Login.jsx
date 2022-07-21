import React, {useState} from 'react';
import '../styles/styles.css';
import '../styles/login.css';
import SignInButton from '../components/SignInButton';
import Logo from '../assets/logo.svg';


const Login = ({setLoggedIn}) => {
  const [error, setError] = useState(false);
  return (
    <div className='login'>
      <img className='logo' src={Logo} alt="MM"  />
      <span className='heading-primary'>Welcome to the revolution!</span>
      <SignInButton setLoggedIn={setLoggedIn}setError={setError}/>
      {error && <p className='errmsg' >There was some problem connecting to Metamask</p>}
    </div>
  )
}

export default Login;




// <Logo />
//       <div className="heading-primary">Welcome to the revolution!</div>
//       <div className='form'>
//         <Input placeholder="email" />
//         <Input placeholder="password" />
//         <Button buttonText="Login"/>
//       </div>
