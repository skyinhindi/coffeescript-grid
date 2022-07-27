import React from 'react'
import View from './View';
import '../styles/home.css';
import { Route, Routes } from 'react-router-dom';


const Home = () => {
  const width = 250;
  const height = 33;
  return (
    <div className='home-container'>
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
