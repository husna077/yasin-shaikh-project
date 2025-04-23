import React from "react";
import './GetCertification.css';
import office from '../assets/office-image.jpg';

const GetCertification = () =>{
    return(
        <div className="get-certification">
            <div className="certification-head">
           
                    <p id="main-head">Get a <span id="certification-span">Certification</span> of the Course</p>
                    <p id="heading-certified">
                    Yes! You will be certified by your mentor which brings a lot of credibility to your certificate & resume.
                    </p>
                
            </div>
            <div className="certification-image">
                <img src={office} id="office-image"/>

            </div>
            <div className="register-class">
                <button className="button-register">Register Now @ just 3999 Rs/- Only </button>
                <div className="original-price-off-div"><p id="original-price">Original Price: Rs 44,999  </p><span id="off-span">(88% OFF)</span></div>
                <p id="seats">ONLY 9 SEAT Left</p>
                
            </div>
        </div>

    )
}
export default GetCertification;