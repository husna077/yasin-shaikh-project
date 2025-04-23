import React, { useState } from "react";
import './FAQ.css';

function FAQ(){
    const [visibleFAQs, setVisibleFAQs] = useState(Array(9).fill(false));
    const faqs =[
        {
            question: "Where is Soft Skills Training Course?",
            answer:"The Soft Skills Online Training Course will be hosted on Zoom or Google Meet Platform, virtually."
        },
        {
            question:"What is the date & time of the Soft Skills Online Training Course?",
            answer:"Every Saturday 1st April 2025, 10:00 am to 12:00 pm IST. Every Sunday 2nd April 2025, 10:00 am to 12:00 pm IST"
        },
        {
            question:"Will i get remonders before the Soft Skills ONline Training Course?",
            answer:"Yes, you will be reminded via your registered mobile, SMS & WhatsApp."
        },
        {
            question:"Is there any fee to join?",
            answer:"The Soft Skills Online Training Course is usually priced at ₹44,999/- since it’s for early bird offer is just ₹3,999/- only."
        },
        {
            question:"Is this a one way or interactive workshop?",
            answer:"It’s an interactive live Soft Skills Online Training Course with live Q&A sessions."
        },
        {
            question:"What is duration of the course?",
            answer:"It’s a complete two months duration online course, and held weekly twice a day."
        },
        {
            question:"What I will gain from Workshop?",
            answer:"You will gain confidence, improved communication skills, leadership abilities, and a clear, positive mindset that will help you stand out and succeed in your career."
        },
        {
            question:"What makes this workshop different from others?",
            answer:"Our unique Theatrical Action Method (TAM) and hands-on, practical approach ensure real-world results. Plus, we assure a transformation with continuous support."
        },
        {
            question:"Are there any prerequisites for attending this workshop?",
            answer:"No specific prerequisites are required. A willingness to learn and grow is all you need. Only a good internet connection is required, and you can join the classes on your desktop, laptop, or mobile phone."
        }
    ];
    const toggleFAQ = (index) =>{
        setVisibleFAQs(prev => {
            const update = [...prev];
            update[index] = !update[index];
            return update;
        })
    };
        return(
            <div className="faq">
                <div className="faq-head">
                    <p id="frequently-head">Frequently Asked Questions</p>
                </div>
              {faqs.map((faq, index)=>(
                <div className="faqs-divs"
                key = {index}
                style={{
                    marginBottom:'15px',
                    padding: '15px',
                   
                    cursor:'pointer'
                    
                }}
                onClick={() => toggleFAQ(index)}
                >
                    <p >
                        {faq.question}{visibleFAQs[index]? "▲" : "▼"}
                    </p>
                    {visibleFAQs[index] && (
                        <p style={{marginTop: '10px', color:'#333'}}> {faq.answer}</p>
                    )}
                    </div>
              ))}
              <div className="register-class">
                <button className="button-register">Register Now @ just 3999 Rs/- Only </button>
                <div className="original-price-off-div"><p id="original-price">Original Price: Rs 44,999  </p><span id="off-span">(88% OFF)</span></div>
                <p id="seats">ONLY 9 SEAT Left</p>              
            </div>
    
            </div>

    )
    
}

export default FAQ;