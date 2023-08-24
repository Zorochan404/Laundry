import React from 'react'
import './sidebar.css'

// Import images
import logo from '../../Assets/logo.png'

// Imported icons
import {IoMdSpeedometer} from 'react-icons/io'
import {MdDeliveryDining} from 'react-icons/md'
import {MdOutlineExplore} from 'react-icons/md'
import {BsTrophy} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {BsCreditCard2Front} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'
const Sidebar = () => {
  return (
    <div className='sideBar grid'>
        <div className="logoDiv flex">
            <img src={logo} alt="Image" />
            <h2>Laundry</h2>
        </div>
        <div className="menuDiv">
            <h3 className="divTitle">
                QUICK MENU
            </h3>
            <ul className="menuLists grid">
                <li className="listItem">
                    <a href="#" className="menuLink flex">
                        <IoMdSpeedometer className='icon'/>
                        <span className="smallText">
                            Dashboard
                        </span>
                    </a>
                </li>
                <li className="listItem">
                    <a href="#" className="menuLink flex">
                        <MdDeliveryDining className='icon'/>
                        <span className="smallText">
                            My Orders
                        </span>
                    </a>
                </li>
                <li className="listItem">
                    <a href="#" className="menuLink flex">
                        <MdOutlineExplore className='icon'/>
                        <span className="smallText">
                            Explore
                        </span>
                    </a>
                </li>
                <li className="listItem">
                    <a href="#" className="menuLink flex">
                        <BsTrophy className='icon'/>
                        <span className="smallText">
                            Products
                        </span>
                    </a>
                </li>
                <li className="listItem">
                    <a href="#" className="menuLink flex">
                        <MdOutlinePermContactCalendar className='icon'/>
                        <span className="smallText">
                            Contact
                        </span>
                    </a>
                </li>
            </ul>
        </div>  

        <div></div>   
    </div>
    
    
  )
}

export default Sidebar

