import React from "react";
import './Feedback.css';
import acc from "../assets/acc.png";
const Feedback = ()=>{
    return(
        <div className="feedback-class">
            <div className="aboutus-class">
                <p id="aboutus-id"> What People Says About Us!</p>
            </div>
            <div className="videos-class"> 
            <div className="youtube-class">
            <iframe  src="https://www.youtube.com/embed/ukmdulErhag?si=Adhq_s3ELvsCgjsR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="youtube-class">
                <iframe  src="https://www.youtube.com/embed/EwPb9d3Bx7M?si=p4EXe6yDUuLn5f32" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                </div>
            <div className="aboutusreview-class">
            <div className="review-class">
                 <div className="acc-image">
                    <img src={acc} id=""/>
                 </div>
                 <div className="content-review">
                   <p id="text-review">
                   Shaikh Yasin's Coaching gave me clarity and confidence to scale my business!
   
                     </p>
                     <span id="review-name">Mr. Siraj Shaikh <span id="review-name-des">(Founder & CEO)</span> </span>
                     <span id="review-location">Tawakkal Arecanut Processing Unit Latur.     </span>
                     </div>
                </div>
                <div className="review-class">
                 <div className="acc-image">
                    <img src={acc} id=""/>
                 </div>
                 <div className="content-review">
                   <p id="text-review">
                   Shaikh Yasin's coaching helped me develop leadership skills, boosting my confidence and progress from manager to CEO.
                   </p>
                     <span id="review-name">Mr. Abdul Hakim  <span id="review-name-des">(Founder & CEO)</span></span>
                     <span id="review-location">Rime Ice-Cream Hyderabad Telangana State.     </span>
                     </div>
                </div>
                </div>
            <div className="aboutusreview-class">
            <div className="review-class">
                 <div className="acc-image">
                    <img src={acc} id=""/>
                 </div>
                 <div className="content-review">
                   <p id="text-review">
                   Shaikh Yasin's coaching transformed my business with clear strategies and growth insights. Highly recommended.
                   </p>
                     <span id="review-name">Mr. Anis Nadaf <span id="review-name-des">(Managing Director)</span></span>
                     <span id="review-location">KB Furniture Mall Solapur    </span>
                </div>
            </div>
            <div className="review-class">
                <div className="acc-image">
                    <img src={acc} id=""/>
                </div>
                <div className="content-review">
                   <p id="text-review">
                   Shaikh Yasin is an Outstanding coach and Franchise COnsultant. His expertise and guidance help you set clear goals and scale your business. </p>
                     <span id="review-name">Mr. Iqbal Memon  <span id="review-name-des">(President & Owner)</span></span>
                     <span id="review-location">All India Memon Federation Officer Fashion, Mumbai   </span>
                </div>
            </div>
            </div>
            
            <div className="register-class">
                <button className="button-register">Register Now @ just 3999 Rs/- Only </button>
                <div className="original-price-off-div"><p id="original-price">Original Price: Rs 44,999  </p><span id="off-span">(88% OFF)</span></div>
                <p id="seats">ONLY 9 SEAT Left</p>              
            </div>
        </div>
        
    )
}

export default Feedback;