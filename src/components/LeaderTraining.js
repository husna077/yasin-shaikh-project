import React from "react";
import './LeaderTraining.css';
import acc from "../assets/tik.png";
const LeaderTraining = ()=>{
    return(
        <div className="leadertrainig-class">
            <div className="leaderhead-class">
                <p id="leaderhead-id"> "Top 10% Leader-Training"</p>
                <p id="subhead-id">Is the Top Choice for Executives & Professionals</p>
            </div>
            <div className="leaderbody-class">
            <div className="text-class">
                 <div className="acc-image">
                    <img src={acc} id="tik-id"/>
                 </div>
                 <div className="contentleader-review">
                   <p id="review-box-id">
                Aspire to achieve higher position and promotion at the workplace
   
                     </p>
                     </div>
                </div>
                <div className="altr-class">
                 <div className="acc-image">
                    <img src={acc} id="tik-id"/>
                 </div>
                 <div className="contentleader-review">
                   <p id="review-box-id">
                   Wish to develop strong leadership skills to lead teams and projects
   
                     </p>
                     </div>
                </div>
                <div className="text-class">
                 <div className="acc-image">
                    <img src={acc} id="tik-id"/>
                 </div>
                 <div className="contentleader-review">
                   <p id="review-box-id">
                   Want to stay bold and make decisions confidently without hesitation.

                   </p>
                      </div>
                </div>
                </div>
                <div className="leaderbody-class">
            <div className="altr-class">
                 <div className="acc-image">
                    <img src={acc} id="tik-id"/>
                 </div>
                 <div className="contentleader-review">
                   <p id="review-box-id">
                   Desire to network with ease and build lasting relationships with people.
                     </p>
                      </div>
                </div>
                <div className="text-class">
                 <div className="acc-image">
                    <img src={acc} id="tik-id"/>
                 </div>
                 <div className="contentleader-review">
                   <p id="review-box-id">
                   Want to feel confident and clear while presenting in meetings & presentations.
                     </p>
                     </div>
                </div>
                <div className="altr-class">
                 <div className="acc-image">
                    <img src={acc} id="tik-id"/>
                 </div>
                 <div className="contentleader-review">
                   <p id="review-box-id">
                   Help for confidence building and promote team activities to boost productivity.</p>
                      </div>
                </div>
                </div>
            <div className="leaderbody-class">
            <div className="text-class">
                 <div className="acc-image">
                    <img src={acc} id="tik-id"/>
                 </div>
                 <div className="contentleader-review">
                   <p id="review-box-id">
                   Improved Communication and Enhanced problem-solving skills.</p>
                   </div>
            </div>
            <div className="altr-class">
                <div className="acc-image">
                    <img src={acc} id="tik-id"/>
                </div>
                <div className="contentleader-review">
                   <p id="review-box-id">Aspire to succeed in professional and personal life with fulfilment & satisfaction.
                  </p>
                </div>
            </div>
            <div className="text-class">
                <div className="acc-image">
                    <img src={acc} id="tik-id"/>
                </div>
                <div className="contentleader-review">
                   <p id="review-box-id">
                   wide spectrum of techniques and psychotherapies aimed at controlling a person's level of psychological stress.</p></div>
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

export default LeaderTraining;