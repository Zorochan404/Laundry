import React from 'react'
import Laundry from '../../../assets/Laundry.jpg'
import iron from "../../../assets/iron.jpg"
import drycleaning from "../../../assets/dry-cleaning.jpg"
import fold from "../../../assets/fold.jpg"
import premium from "../../../assets/premium.jpg"
import homeservice from "../../../assets/home-service.jpg"
import './Home.css'

export default function Home() {
  return (
    <div>
      <div className='container'>
        <div className='intro'>
          <div className='intro-text'>
            <div className='intro-topic'><span className='companytitle'>PRESTO CLEAN </span>: <span>Freshness Delivered, Every Wear!</span></div>
            <div>
              <div className='intro-para'>
                <p>
                  Discover the perfect answer to your everyday laundry demands with our top-notch service. Prestoclean is here to revolutionize the way you approach laundry, saving you valuable time and effort.
                </p>
                <p>
                  Imagine the luxury of freeing up more than 4 hours each week – time you can now invest in what truly matters to you. Our seamless process begins with the convenience of door-to-door pickup, ensuring your laundry journey is effortless from the start.
                </p>
              </div>
              <button className='schedulebutton'>Schedule a pickup</button>
            </div>
          </div>
          <img className='intro-image' src={Laundry} alt='washing maching' />


        </div>
        <div className='section2'>
          <div className='header'>How it works</div>
          <div className='card-align'>
            <div className='card'>
              <h3>Schedule</h3>
              <p className="small">Schedule via website we are available for you</p>
            </div>
            <div className='card'>
              <h3>Pickup</h3>
              <p className="small">After you make a booking, we will collect your clothes from your doorstep.</p>
            </div>
            <div className='card'>
              <h3>Clean</h3>
              <p className="small">Your clothes are expertly cleaned according to the PRESTOCLEAN's service you select.</p>
            </div>
            <div className='card'>
              <h3>Deliver</h3>
              <p className="small">Standard turnaround time is 24-48 Hrs*, with same day express Delivery* available for a fee.</p>
            </div>
          </div>
        </div>

        <div className='section3'>
          <div className='header'>Services</div>
          <div className='card-align'>
            <a className='card' href='/'>
              <img src={fold} />
              <h3>Wash and Fold</h3>
            </a>
            <a className='card' href='/'>
              <img src={iron} />
              <h3>Iron</h3>
            </a>
            <a className='card'>
              <img src={premium} />
              <h3>Premium Laundry</h3>
            </a>
            <a className='card'>
              <img src={homeservice} />
              <h3>Home services</h3>
            </a>
            <a className='card'>
              <img src={drycleaning} />
              <h3>Dry cleaning</h3>
            </a>
          </div>
        </div>
        <div>
          <h1>
            Save many hours in a week when you leave your laundry with us
          </h1>
        </div>



      </div>
    </div>
  )
}



