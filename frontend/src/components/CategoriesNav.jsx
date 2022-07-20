import React from 'react'
import '../styles/CategoriesNav.css';
function CategoriesNav() {
  return (
    <div className='categories-nav-component'>
      <div className='categories-nav'>
        <div className='categories-nav-body'>
            
            <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#categories" className="nav-link active" data-toggle="tab">
                
                {/* <span id='category-span'> */}
                  Categories
                  {/* </span> */}
                
              </a>
            </li>
            <li className="nav-item">
              <a href="#fashion" className="nav-link" data-toggle="tab">
                <i></i>
                Fashion
              </a>
            </li>
            <li className="nav-item">
              <a href="#beauty" className="nav-link" data-toggle="tab">
                <i></i>
                Beauty
              </a>
            </li>
            <li className="nav-item">
              <a href="#tech" className="nav-link" data-toggle="tab">
                Tech
              </a>
            </li>
            <li className="nav-item">
              <a href="#home" className="nav-link" data-toggle="tab">
                Home
              </a>
            </li>
          </ul>
        
        </div>
      </div>
      <div className='categories-content'>
        <div className="tab-content">
            <div id="categories" className="tab-pane active">
              <div className='tab-pane-content' id='categories-content-inner'>
                <div className='row-1'>
                  
                    <div className='row-div' id=''>

                    </div>
                  
                </div>
                <div className='row-2'>
                  

                    <div className='row-div' id=''>

                    </div>
                    <div className='row-div' id=''>

                    </div>

                  
                </div>
                <div className='row-3'>
                 

                    <div className='row-div' id=''>

                    </div>
                    <div className='row-div' id=''>

                    </div>

                  </div>
                

              </div>
            </div>
            <div id="fashion" className="tab-pane">
              <div className='tab-pane-content'>
                <h2>i am fashion</h2>
              </div>
            </div>
            <div id="beauty" className="tab-pane">
              <div className='tab-pane-content'>
              <h2>i am beauty</h2>

              </div>
            </div>
            <div id="tech" className="tab-pane">
              <div className='tab-pane-content'>
              <h2>i am tech</h2>

              </div>
            </div>
            <div id="home" className="tab-pane">
              <div className='tab-pane-content'>
              <h2>i am home</h2>

              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesNav