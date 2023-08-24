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
            <div className='intro-topic'><span className='companytitle'>PrestoClean</span>: <span>Where Clean is a Guarantee, Not a Miracle!</span></div>
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
                <img className='intro-image' src={Laundry} alt='washing maching'/>
            

        </div>
        <div className='section2'>
          <div className='header'>How it works</div>
          <div className='card-align'>
            <div className='card'>
            <h3>This is option 1</h3>
            <p className="small">Card description with lots of great facts and interesting details.</p>
            </div>
            <div className='card'>
            <h3>This is option 1</h3>
            <p className="small">Card description with lots of great facts and interesting details.</p>
            </div>
            <div className='card'>
            <h3>This is option 1</h3>
            <p className="small">Card description with lots of great facts and interesting details.</p>
            </div>
            <div className='card'>
            <h3>This is option 1</h3>
            <p className="small">Card description with lots of great facts and interesting details.</p>
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
            <a className = 'card' href='/'>
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
