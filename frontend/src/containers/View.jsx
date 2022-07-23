import React from 'react'
import {Route, Routes} from 'react-router-dom';
import UserProfile from './UserProfile';
import '../styles/view.css'
import Sidebar from './Sidebar'
import ItemView from './ItemView'
import '../styles/sidebar.css'
import MainView from './MainView'
// import ProductView from './ProductView';

const View = () => {
  return (
      <div className="view">
        <Sidebar />
        <Routes>
          <Route path='/*' element={ <MainView /> } />
          <Route path='/pfp' element={ <UserProfile /> } />
          {/* <Route path='product/:productId' element={<ProductView />} /> */}

        </Routes>
    </div>
  )
}

export default View
