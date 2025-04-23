import React from "react";
import './Achievements.css';
import smart from '../assets/smart mah award.png';
import mmnf from '../assets/mmnfAward.webp';
import uk from '../assets/YKparAward.png';
import prime from '../assets/OnPrimeTime.png';
import prao from '../assets/WithPopatRao.webp';
import arbaz from '../assets/WithArbazKhan.webp';
import BNI from '../assets/BNIReco.webp';
import sonali from '../assets/SonaliBendre.png';
import confused from '../assets/confused.png';

const Achievements = ()=>{
    return(
        <div className="achievements">
            <div className="achievements-head">
                <p id="our">Our <span id="achieve">Achievements</span></p>
            </div>
            <div className="images-achieve">
                <div className="images-four">
                    <div className="img-div-ach"><img src={smart} id="single-image"/></div>
                    <div className="img-div-ach"><img src={mmnf} id="single-image"/></div>
                    <div className="img-div-ach"><img src={uk} id="single-image"/></div>
                    <div className="img-div-ach"><img src={prime} id="single-image"/></div>
                </div>
                <div className="images-four2">
                <div className="img-div-ach"><img src={prao} id="single-image"/></div>
                <div className="img-div-ach"><img src={arbaz} id="single-image"/></div>
                <div className="img-div-ach"><img src={BNI} id="single-image"/></div>
                <div className="img-div-ach"><img src={sonali} id="single-image"/></div>
                </div>
            </div>
            <div>
                <div className="before-and-after">
                    <div className="confuse-div">
                        <p id="cant-choose">
                            Still Can't Choose
                        </p>
                        <img src={confused} id="confuse-img"/>
                    </div>
                    <div className="before-and-after-head" >
                        <p>
                        <span id="b-and-a">Before N After</span> Getting The Soft Skills Course
                        </p>

                    </div>
                </div>
                <div className="b-a-content">
                    <div className="before-content">
                        <div className="before-div">
                            <h4 id="text-h4">Feeling undervalued despite hard work and dedication</h4 >

                        </div>
                        <div className="before-div">
                            <h4 id="text-h4">Not able to develop network due to lack of communication.</h4 >

                        </div>
                        <div className="before-div">
                            <h4 id="text-h4">Fear of missing out something very important.</h4 >

                        </div>
                        <div className="before-div">
                            <h4 id="text-h4">Struggling to speak and present in meetings and social gatherings.</h4 >

                        </div>
                        <div className="before-div">
                            <h4 id="text-h4">Hesitant to take leadership roles and initiatives.</h4 >

                        </div>
                        <div className="before-div">
                            <h4 id="text-h4">Struggled with persistent anxiety that effects work and personal life.</h4 >

                        </div>
                        <div className="before-div">
                            <h4 id="text-h4">Display nervous and closed-off body language.</h4 >

                        </div>

                    </div>
                    <div className="after-content">
                    <div className="after-div">
                            <h4 id="text-h4">Recognized and valued for contributions and achievements.</h4 >

                        </div>
                        <div className="after-div">
                            <h4 id="text-h4">Communication improved and develop strong network.</h4 >

                        </div>
                        <div className="after-div">
                            <h4 id="text-h4">All fears & anxiety over now feels more confident.</h4 >

                        </div>
                        <div className="after-div">
                            <h4 id="text-h4">Deliver speeches and presentation with confidence and command attention.</h4 >

                        </div>
                        <div className="after-div">
                            <h4 id="text-h4">Become a sought-after leader making quick and informed decisions.</h4 >

                        </div>
                        <div className="after-div">
                            <h4 id="text-h4">Professional and Personal life improves a lot.</h4 >

                        </div>
                        <div className="after-div">
                            <h4 id="text-h4">Exhibits confident and open body language that commands respect.</h4 >

                        </div>


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
    export default Achievements;