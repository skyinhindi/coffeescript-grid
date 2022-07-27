import React, {useState} from 'react'
import Loading from './Loading';

const Button = ({buttonText}) => {
  const [loading, setLoading] = useState(false);
  const [hoverState, setHoverState] = useState("");

  return (
    <div
    onClick={() => { 
      setHoverState("btn-div--hover")
      setTimeout(() => {
        setHoverState("")
      }, 150);
      setLoading(true);
       setTimeout(() => {
        setLoading(false)
    }, 2000);}}
      className={`btn-div ${hoverState}`} >
      {loading ? <Loading /> :
       <div
        className='btn'>
          <div className="btn-mm-row">
            <a>{buttonText}</a>
          </div>
      </div>}
    </div>
  );
}

export default Button
