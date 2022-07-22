import React from 'react'
import Navbar from '../components/Navbar';
import View from './View';
import UserProfile from './UserProfile';
import '../styles/home.css';
import CategoriesNav from '../components/CategoriesNav';
import RightNav from '../components/RightNav';
import Logo from '../assets/logo.svg';
import LogoComp from '../components/LogoComp';
import SearchBar from '../components/SearchBar';
import { Route, Routes } from 'react-router-dom';


const Home = () => {
  const width = 250;
  const height = 33;
  return (
    <div className='home-container'>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/*' element={<View/>} />
      </Routes>


      {/* <LogoComp width={width} height={height}/> */}
      {/* <CategoriesNav />
      <SearchBar />
      <RightNav /> */}
    </div>
  )
}

export default Home
