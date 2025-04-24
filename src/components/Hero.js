import React from "react";
import './Hero.css';
import host from "../assets/hostimg.avif";
import clock from "./clock2.png";
import acc from "../assets/acc.png";

const Hero = () =>{
    return(
        <div className="elements">
        <div className="hero-elements">
            <div className="hero">
            <h2 id='element'>Trusted by 1361+ Professionals, achieve next-level growth in your career & life by mastering soft skills,
            enhancing personality, and boosting earnings.</h2>
            
        </div>
       <div className="image-name-review"> 
      <div className="image-wrapper">
            <div className="image-wrapper" id="host">
                <img src={host} alt="Description" id="host-image"/>
                <div className="host-name">
                    <h3 id="name">HOSTED BY SHAIKH YASIN</h3>
                    <h4 id="designation">Founder and CEO, SY-BUSINESS CONSULTANCY</h4>
                </div>
                </div>
                </div>
            
            <div className="image-wrapper">
                <div className="certified-content" >
                     <img src={clock}  alt="Description " id="clock-img"/>
                    <p id="text-certified">Certified top 10% Soft Skills Live Online Training Course <span id="months-span">(2 Months)</span></p>
                </div>
                <div className="review-class1">
                 <div className="acc-image">
                    <img src={acc} id=""/>
                 </div>
                 <div className="content-review">
                   <p id="text-review">
                     Thanks to your guidence, 
                    70% of our sales issues are resolved, 
                       and I now see bussiness as a wealth generator, not just survival.I'm enjoying a stress-free life.   
                     </p>
                     <span id="review-name">Mr.Imran Shaikh, <span id="review-name-des">Owner</span></span>
                     <span id="review-location">Umama Collection Solapur.     </span>
                     </div>
                </div>
                
                </div>
                </div>
                <div className="register-class">
                <button className="button-register">Register Now @ just 3999 Rs/- Only </button>
                <div className="original-price-off-div"><p id="original-price">Original Price: Rs 44,999  </p><span id="off-span">(88% OFF)</span></div>
                <p id="seats">ONLY 9 SEAT Left</p>
                <p id="timing-live-session">Live Session From on April 01, 2025 Saturday | 10:00 AM</p>
               
            </div>
        
        
        </div>
        </div>
    );
}
export default Hero;