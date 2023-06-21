import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { submitEmail } from "../../../api";
import "./contact.css";

function Contact() {
    const captchaRef = useRef(null);
    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            text: ""
        }
    )

    const handleChange = (value) => {
        console.log("Captcha value:", value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();
        submitEmail(token, formData).then( res => {
            console.log(res);
        })
    }

    const handleFormChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }


    // INPUT VALIDATION / SANITATION:
    // DOMPurify
    // express-validator

    return(
        <div>
            <form onSubmit={handleSubmit}>    
                <h1>Contact</h1>
                <p>
                    Thank you for visiting Red Valley Rebels. We are by reservation only, so please reach out a
                    week prior to make a reservation.
                </p>
                <p>We are excited to have you out at the ranch!</p>

                <input                     
                    name="firstName"
                    type="text" 
                    placeholder="First Name" 
                    maxLength={35} 
                    value={formData.firstName}
                    onChange={handleFormChange}
                />

                <input
                    name="lastName"
                    type="text" 
                    placeholder="Last Name" 
                    maxLength={35} 
                    value={formData.lastName}
                    onChange={handleFormChange}
                />
                
                <br />
                
                <input
                    name="email"
                    type="email" 
                    placeholder="Email" 
                    maxLength={254} 
                    value={formData.email}
                    onChange={handleFormChange}
                />
                
                <input 
                    name="phone"
                    type="tel" 
                    placeholder="Phone Number" 
                    maxLength={11} 
                    value={formData.phone}
                    onChange={handleFormChange}
                />
                
                <br />
                
                <textarea
                    name="text"
                    placeholder="Message" 
                    maxLength={500} 
                    value={formData.text}
                    onChange={handleFormChange}
                />
                
                <ReCAPTCHA
                    sitekey={ process.env.REACT_APP_RECAPTCHA_CLIENT_SITE_KEY }
                    ref={captchaRef}
                    onChange={handleChange}
                />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact;