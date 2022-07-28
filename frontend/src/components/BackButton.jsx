import React from 'react'
import { useNavigate } from 'react-router-dom';
import arrowLeft from "../assets/goback.svg";


const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div
        className="go-back-btn"
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={arrowLeft}></img>
      </div>
  )
}

export default BackButton
