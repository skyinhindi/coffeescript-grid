import React from 'react'
import View from './View';
import UserProfile from './UserProfile';
import '../styles/home.css';
import { Route, Routes } from 'react-router-dom';


const Home = () => {
  const width = 250;
  const height = 33;
  return (
    <div className='home-container'>
      <Routes>
        <Route path="/*" element={<View />} />
        <Route path='/user/:userId/*' element={ <UserProfile /> } />
      </Routes>

      {/* <LogoComp width={width} height={height}/> */}
      {/* <CategoriesNav />
      <SearchBar />
      <RightNav /> */}
    </div>
  );
};

export default Home;
