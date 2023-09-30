import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {BsWhatsapp} from 'react-icons/bs';
import {FaTelegramPlane} from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from 'emailjs-com'


import "./style.scss";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
                I would be happy to answer any questions you may have !!
            </h4>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className="text">+91 9304946935</span>
            </div>
            <div className="contact-option">
            <a href="mailto:zeenatzfq052@gmail.com<" target="_blank">         
                <MdEmail />
                <span className="text">zeenatzfq052@gmail.com</span></a> 
            </div>
            <div className="contact-option">
            <a href="https://web.whatsapp.com/send?phone=+919304946935" target="_blank">         

                <BsWhatsapp />
                <span className="text">+91 9304946935</span> </a> 
            </div>
            <div className="contact-option">
            <a href="https://t.me/tele052" target="_blank" >
                <FaTelegramPlane />
                <span className="text">@tele052</span> </a>    
    

            </div>
        </div>
    );
};

export default ContactInfo;
