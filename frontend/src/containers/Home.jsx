import React from 'react'
import CategoriesNav from '../components/CategoriesNav';
import RightNav from '../components/RightNav';
import Logo from '../assets/logo.svg';
import LogoComp from '../components/LogoComp';
import SearchBar from '../components/SearchBar';


const Home = () => {
  const width = 250;
  const height = 33;
  return (
    <div className='home-container'>
      <LogoComp width={width} height={height}/>
      <CategoriesNav />
      <SearchBar />
      <RightNav />
    </div>
  )
}

export default Home
