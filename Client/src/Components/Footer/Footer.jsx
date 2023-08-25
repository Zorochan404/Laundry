import React from 'react'
import "./Footer.css"
import LOGO from "../../assets/prestoclean.png"
import { MdMail, MdCall, MdOutlineFacebook,MdLocationPin } from "react-icons/md"
import { AiFillInstagram,AiFillTwitterCircle,AiFillYoutube} from "react-icons/ai"
import {BsDashLg} from "react-icons/bs"

export default function Footer() {
  return (
    <div>
      <div className='container-footer'>
        <div className="footer-content">
          <section className="footer-section">
            <img src=
            {LOGO} alt="prestocleanlogo" style={{width:"95%"}}/>
            <p> PRESTO CLEAN <BsDashLg/> Your Trusted Laundry Service in Guwahati. We take pride in providing premium laundry solutions to the vibrant community of Guwahati</p>
          </section>

          <section className="footer-section">
            <h3>Contact</h3>
            <p>Contact us for any inquiries or support.
            </p>
            <p><MdLocationPin/> Jalukbari, Assam Engineering College, Guwahati-13</p>
            <p><MdCall /> +91 1122334455
            </p>
            <p><MdMail /> <i>prestoclean@gmail.com </i></p>

          </section>

          <section className="footer-section">
            <h3>Social Media</h3>
            <p>Follow us on social media for updates.</p>
            <p><MdOutlineFacebook />     <AiFillInstagram /> <AiFillTwitterCircle/> <AiFillYoutube/></p>
          </section>

          <section className="footer-section">
            <h3>Company</h3>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Our services</p>
          </section>
        </div>

        <div className="footer-bottom">
          <p>Designed and developed by <span><a href="#">Froductive</a></span></p>
        </div>
      </div>
    </div>
  )
}
