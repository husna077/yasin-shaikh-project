import React, { useEffect, useState } from "react";
import './HostMentor.css';
import host from '../assets/hostimg.avif';
import tik from '../assets/tik.png';
import Ecommerce from '../assets/ecommerce3-1.jpg';
import trading from '../assets/trading.jpeg';
import importandexport from '../assets/Importandexport.png';
import pharmacy from '../assets/pharmacy.jpg';
import fandb from '../assets/fandb.jpg';

const HostMentor = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % 16); // Move to next box
      }, 3000); // 1 sec pause
  
      return () => clearInterval(interval);
    }, []);

    return (
        <div className="hostmentor-class">
            <div className="hostmentor-class">
                <p id="hostmentorname-id"> Meet your <span id="host-and-mentor">Host and Mentor</span></p>
                
            </div>
            <div className="imgand-info">
                <div className="img-div">
                    <img src={host} id="img-host"/>
                    <p id="sectors-nameid"><span id="name">MEET Shaikh Yasin</span>Founder and CEO, SY-BUSINESS CONSULTANCY</p>
                </div>
                <div className="info-div">
                    <div>
                        <div className="mentor-name-intro">
                            <p className="intromentor">
                                Shaikh Yasin"– Award-Winning 
                                Business Coach, Franchise Consultant, International Corporate Trainer & Motivational Speaker."
                            </p>
                        </div>
                        <ul className="host-list">
                            <li className="list-content"> MBA in Marketing (University of Wales-Cardiff, UK) with 25+ years of global corporate experience.</li>
                            <li className="list-content"> International exposure across Dubai, London, Singapore, Malaysia, KSA, Qatar & more.</li>
                            <li className="list-content"> PMP trained with expertise in project management’s 5 process groups & 10 knowledge areas.</li>
                            <li className="list-content"> Proven track record of exceeding revenue targets & driving business growth.</li>
                            <li className="list-content">
                             Strategic thinker with deep insights into market dynamics & business development.
                            </li>
                            <li className="list-content">
                             Combines real-world experience, academic expertise, & consultative selling skills.
                            </li>
                            <li className="list-content">
                             Renowned speaker & trainer, leading conferences, networking meets, seminars & webinars.
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
            <div className="sector-div">
            <div>
                <p className="sectors">Sectors In We Have Already Helped 500+ Business</p>
            </div>
            <div className="outer-container">
                    <div className="moving-box" style={{ transform: `translateX(-${currentIndex * 170}px)` }}>
                        <img src={tik} id="img-tikswap"/>
                    <p id="sectors-name">Event management</p>
                    </div>
                    <div className="moving-box" style={{ transform: `translateX(-${currentIndex * 170}px)` }}>
                    <img src={tik} id="img-tikswap"/>
                    <p id="sectors-name">Automobiles Industry</p>
                    </div>
                    <div className="moving-box" style={{ transform: `translateX(-${currentIndex * 170}px)` }}>
                    <img src={tik} id="img-tikswap"/>
                    <p id="sectors-name">Real Estate</p>
                    </div>
                    <div className="moving-box" style={{ transform: `translateX(-${currentIndex * 170}px)` }}>
                    <img src={tik} id="img-tikswap"/>
                    <p id="sectors-name">Retail Industry</p>
                    
                    </div>
                    <div className="moving-box" style={{ transform: `translateX(-${currentIndex * 170}px)` }}>
                    <img src={tik} id="img-tikswap"/>
                    <p id="sectors-name">Infotainment</p>
                    
                    </div>
                    <div className="moving-box" style={{ transform: `translateX(-${currentIndex * 170}px)` }}>
                        <img src={tik} id="img-tikswap"/>
                    <p id="sectors-name">Logistics and Supply chain Industry</p>
                    </div>
                    <div className="moving-box" style={{ transform: `translateX(-${currentIndex * 170}px)` }}>
                    <img src={pharmacy} id="img-tikswap"/>
                    <p id="sectors-name">Pharmacies</p>
                    </div>
                    <div className="moving-box" style={{ transform: `translateX(-${currentIndex * 170}px)` }}>
                    <img src={tik} id="img-tikswap"/>
                    <p id="sectors-name">Service industry</p>
                    </div>
                    <div className="moving-box" style={{ transform: `translateX(-${currentIndex * 170}px)` }}>
                    <img src={fandb} id="img-tikswap"/>
                    <p id="sectors-name">Food & Beverages</p>
                    
                    </div>
                    <div className="moving-box" style={{ transform: `translateX(-${currentIndex * 170}px)` }}>
                    <img src={trading} id="img-tikswap"/>
                    <p id="sectors-name">Trading</p>
                    
                    </div>
                    <div className="moving-box" style={{ transform: `translateX(-${currentIndex * 170}px)` }}>
                        <img src={importandexport} id="img-tikswap"/>
                    <p id="sectors-name">Import and Export Industry</p>
                    </div>
                    <div className="moving-box" style={{ transform: `translateX(-${currentIndex * 170}px)` }}>
                    <img src={Ecommerce} id="img-tikswap"/>
                    <p id="sectors-name">E-commerce</p>
                    </div>
                    <div className="moving-box" style={{ transform: `translateX(-${currentIndex * 170}px)` }}>
                    <img src={tik} id="img-tikswap"/>
                    <p id="sectors-name">Surgical and Medical Equipment</p>
                    </div>
                    <div className="moving-box" style={{ transform: `translateX(-${currentIndex * 170}px)` }}>
                    <img src={tik} id="img-tikswap"/>
                    <p id="sectors-name">Fasting Moving Consumer goods</p>
                    
                    </div>
                    <div className="moving-box" style={{ transform: `translateX(-${currentIndex * 170}px)` }}>
                    <img src={tik} id="img-tikswap"/>
                    <p id="sectors-name">Beauty and wellness </p>
                    
                    </div>
                    <div className="moving-box" style={{ transform: `translateX(-${currentIndex * 170}px)` }}>
                        <img src={tik} id="img-tikswap"/>
                    <p id="sectors-name">Facility Management</p>
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

export default HostMentor;
    