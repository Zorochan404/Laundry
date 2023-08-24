import React from "react";
import "./top.css";

// IMPORTED ICONS
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdNotificationsNone } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";


// IMPORTED IMAGES====>
import img from "../../../Assets/user3.png";
import img2 from "../../../Assets/user2.jpg";
import video from "../../../Assets/video.mp4";

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to App</h1>
          <p>Hello Bidyasagar, welcome back</p>
        </div>

        

        <div className="adminDiv flex">
          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>
            The world's fast growing industry today are natural made products
          </p>


          <div className="rightCard">

          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>
              <div className="flex">
                <span>
                  Total <br />
                  <small>4 Orders</small>
                </span>
                
              <span className="flex link">
                Go to my orders <BsArrowRightShort className="icon" />
              </span>
            </div>
            <div className="imgDiv">
              {/* <img src={img2} alt="Image one" /> */}
            </div>
            {/* We will fuck this code later */}
            
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Top;
