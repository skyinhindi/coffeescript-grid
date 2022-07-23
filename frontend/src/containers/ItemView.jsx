import {React}from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import Products from '../components/Products';
import '../styles/itemView.css'

const ItemView = () => {
  const category= useParams();
  return (
    <div className='item-view'>
      {category.categoryId && <Products />}
      {!category.categoryId && <p>Main page</p>}
    </div>
  )
}

export default ItemView
