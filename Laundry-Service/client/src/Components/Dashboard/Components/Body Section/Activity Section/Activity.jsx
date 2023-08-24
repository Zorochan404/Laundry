import React from 'react'
import './activity.css'

import {BsArrowRightShort} from 'react-icons/bs'

import img from '../../../Assets/image1.jpg'

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
            <h1>Recent Activity</h1>
            <button className='btn flex'>
              See All
              <BsArrowRightShort className='icon'/>
            </button>
      </div>
      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={img} alt="Image Customer" />
          <div className="customerDetails">
            <span className='name'>Bidyasagar</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 minute ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={img} alt="Image Customer" />
          <div className="customerDetails">
            <span className='name'>Bidyasagar</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 minute ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={img} alt="Image Customer" />
          <div className="customerDetails">
            <span className='name'>Bidyasagar</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 minute ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={img} alt="Image Customer" />
          <div className="customerDetails">
            <span className='name'>Bidyasagar</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 minute ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={img} alt="Image Customer" />
          <div className="customerDetails">
            <span className='name'>Bidyasagar</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 minute ago
          </div>
        </div>
      </div>

    </div>
  )
}

export default Activity