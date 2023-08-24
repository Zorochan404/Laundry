import React from 'react'
import './Register.css'
import '../../App.css'
import {Link,NavLink} from 'react-router-dom'

import video from '../../LoginAssets/video1.mp4'
import logo from '../../LoginAssets/logo.jpeg'
import {MdMarkEmailRead} from 'react-icons/md'
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import{AiOutlineSwapRight} from 'react-icons/ai'

const Register = () => {
  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Lorem ipsum dolor sit.</h2>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Have an account ?</span>
            <Link to ={'/'}>
            <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Let Us Know You</h3>
          </div>
          <form action="" className='form grid'>

            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className='icon'/>
                <input type="email" id='email' placeholder='Enter Email'/>
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className='icon'/>
                <input type="username" id='username' placeholder='Enter Username'/>
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon'/>
                <input type="password" id='password' placeholder='Enter Password'/>
              </div>
            </div>
          <button type='submit' className='btn flex'>
            <span>Register</span>
            <AiOutlineSwapRight className='icon'/>
          </button>
        <span className='forgotPassword'>
        Forgot your password ?<a href="">Click Here</a>
        </span>


          </form>
        </div>
      </div>
    </div>
  )
}

export default Register