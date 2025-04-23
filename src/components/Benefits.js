import React from "react";
import './Benefits.css';
import Person from "../assets/pd.webp";
import Communication from "../assets/personality development.jpg";
import Leader from "../assets/leadership.jpg";
import Time from "../assets/time managemet.jpg";
import Confidence from "../assets/cinfidence.jpg";
import Problem from "../assets/problem solving.jpg";
import Stress from "../assets/stress.jpg";
import Team from "../assets/team building.jpg";


const Benefits = () =>{
    return(
        <div className="benefits-elements">
            <div className="benefits-head">
                <p id="heading">What you will discover after attending soft skills  </p>
                <p id="sub-heading">online certified training course?</p>
            </div>
            <div className="benefits-column1">
                <div className="image-personality-development">
                    <img src={Person} id="person-image" />
                    <div className="first-persondev">
                        <h3 id ="image-heading">Personality Development</h3>
                    </div>
                </div>
                <div className="element-image-communication">
                    <img src={Communication} id="communication-image" />
                    <div className="second-communication">
                        <h3 id ="image-heading">Improved Communication</h3>
                    </div>
                </div>
                
            </div>
            <div className="benefits-column1">
            <div className="element-image-leadership">
                    <img src={Leader} id="leader-image" />
                    <div className="third-leadership">
                        <h3 id ="image-heading">The Art of Leadership</h3>
                    </div>
                </div>
                <div className="element-image-leadership">
                    <img src={Time} id="leader-image" />
                    <div className="third-leadership">
                        <h3 id ="image-heading">Effective Time Management</h3>
                    </div>
                </div>
                


            </div>
            <div className="benefits-column1">
                <div className="image-personality-development">
                    <img src={Confidence} id="person-image" />
                    <div className="first-persondev">
                        <h3 id ="image-heading">Confidence Building</h3>
                    </div>
                </div>
                <div className="element-image-communication">
                    <img src={Problem} id="communication-image" />
                    <div className="second-communication">
                        <h3 id ="image-heading">Enhance Problem Solving</h3>
                    </div>
                </div>
                </div>
                <div className="benefits-column1">
                <div className="image-personality-development">
                    <img src={Stress} id="person-image" />
                    <div className="first-persondev">
                        <h3 id ="image-heading">Stress Management</h3>
                    </div>
                </div>
                <div className="element-image-communication">
                    <img src={Team} id="communication-image" />
                    <div className="second-communication">
                        <h3 id ="image-heading">Team Building Activity (Better Team Work)</h3>
                    </div>
                </div>


            </div>    
        </div>
    )
}
export default Benefits;