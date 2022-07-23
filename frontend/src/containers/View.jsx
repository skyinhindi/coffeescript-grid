import React, {useState}from 'react'
import {Route, Routes} from 'react-router-dom';
import UserProfile from './UserProfile';
import '../styles/view.css'
import Sidebar from './Sidebar'
import ItemView from './ItemView'
import '../styles/sidebar.css'
import MainView from './MainView'

const View = () => {
  const [selected, setSelected] = useState('/');

  return (
      <div className="view">
        <Sidebar selected={selected} setSelected={setSelected} />
        <Routes>
          <Route path='/*' element={ <MainView selected={selected} setSelected={setSelected} /> } />
          <Route path='/pfp' element={ <UserProfile /> } />
        </Routes>
    </div>
  )
}

export default View
