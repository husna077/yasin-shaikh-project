import React from "react";
import './Hero.css';
import host from "../assets/host-yasin-shaikh.png";
import clock from "./clock2.png";
import acc from "../assets/acc.png";
import Calender from "../assets/calendar.png";
import Clock from "..//assets/event.png";
import Live from "..//assets/live-streaming.png";
import Duration from "..//assets/duration.png";

const Hero = () =>{
    return(
        <div className="elements">
        <div className="hero-elements">
            <div className="hero">
                <h2 id="hero-id-head">
                Certified top <span id="ten-id-span">10% </span>Soft Skills Live Online Training Course
                </h2>
            <h2 id='element'>Trusted by 1361+ Professionals, achieve next-level growth in your career & life by mastering soft skills,
            enhancing personality, and boosting earnings.</h2>
            
        </div>
       <div className="image-name-review"> 
      <div className="image-wrapper">
            <div className="image-wrapper" id="host">
                <img src={host} alt="Description" id="host-image"/>
                <div className="host-name">
                    <h3 id="name">Shaikh Yasin</h3>
                    <h4 id="designation">Award-Winning Business Coach, Franchise Consultant, International Corporate Trainer
                    & Motivational Speaker.</h4>
                </div>
                </div>
                </div>
                
        <div className="image-wrapper2">
            <div className="timing">
                <div className="timing-one">
                <div className="class-timing">
                    <img src={Calender} className="logos-timing"/>
                    <div className="logos-divs">
                    <h3 className="logos-h3">Date</h3>
                    <p className="logos-info">From 1 April 2025</p>
               

                    </div>
                     </div>
                <div className="class-timing">
                    <img src={Clock} className="logos-timing"/>
                   <div className="logos-divs">
                    <h3 className="logos-h3">Time</h3>
                    <p className="logos-info">
                        10AM To 12PM
                    </p>
                    </div>
                </div>
                </div>
                <div className="timing-two">
                <div className="class-timing">
                    <img src={Live} className="logos-timing"/>
                    <div className="logos-divs">
                    <h3 className="logos-h3">Live Stream</h3>
                    <p className="logos-info">
                        EVERY SAT & SUN
                    </p>
                    </div>
                </div>
                <div className="class-timing">
                    <img src={Duration} className="logos-timing"/>
                    <div className="logos-divs">
                    <h3 className="logos-h3">Duration</h3>
                    <p className="logos-info">
                        14 HOURS
                    </p>
                    </div>
                </div>
                </div>
                <div className="register-class">
                <button className="button-register" >Register Now @ just 3999 Rs/- Only </button>
                <div className="original-price-off-div"><p id="original-price">Original Price: Rs 44,999  </p><span id="off-span">(88% OFF)</span></div>
                <p id="seats">ONLY FEW SEATS LEFT</p>
                
               
            </div>
            </div>
        </div>
        </div>
                
                
        
        
        </div>
        </div>
    );
}
export default Hero;