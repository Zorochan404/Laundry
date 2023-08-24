import React from 'react'
import './listing.css'

import img from '../../../Assets/image1.jpg'

// IMPORTED ICONS
import {BsArrowRightShort} from 'react-icons/bs'


const Listing = () => {
  return (
    <div className='listingSection'>

      <div className="heading flex">
        <h1>Services</h1>
      </div>
      <div className="secContainer flex">


       <button className='btn'>
        <div className="singleItem">
          <img src={img} alt="Image" />
          <h3>Dry Wash</h3>
        </div>
        </button>


        <button className='btn'>
        <div className="singleItem">
          <img src={img} alt="Image" />
          <h3>Wash</h3>
        </div>
        </button>
 
        <button className='btn'>
        <div className="singleItem">
          <img src={img} alt="Image" />
          <h3>Ironing</h3>
        </div>
        </button>

      </div>
    </div>
  )
}

export default Listing