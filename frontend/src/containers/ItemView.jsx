import {React}from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import '../styles/itemView.css'

const ItemView = () => {
  const category= useParams();
  return (
    <div className='item-view'>
      {category.categoryId && category.categoryId}
      {!category.categoryId && <p>Main page</p>}
    </div>
  )
}

export default ItemView
