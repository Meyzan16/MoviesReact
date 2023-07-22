import React from "react";
import {
    FaEnvelope,
    FaWhatsapp,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    const navigate = useNavigate();
   const location = useLocation();

   
const navigiationHandler = (type) => {
    if(type === 'github') {
        window.open('https://github.com/meyzan16', '_blank')
    }else if(type === 'wa') {
        window.open('https://api.whatsapp.com/send/?phone=6285783248518&amp;text=Hi, Meyzan Al Yutra&amp;type=phone_number&amp;app_absent=0', '_blank')
    }else if(type === 'email'){
        window.open('mailto:meyzan1605@gmail.com', '_blank')
    }else if(type === 'linkedin'){
        window.open('https://www.linkedin.com/in/meyzan-al-yutra-4017b2221/', '_blank')
    }
    setMobileMenu(false);
  }


    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaGithub   onClick={() => navigiationHandler("github")} />
                    </span>
                    <span className="icon">
                        <FaWhatsapp onClick={() => navigiationHandler("wa")}/>
                    </span>
                    <span className="icon">
                        <FaEnvelope onClick={() => navigiationHandler("email")}/>
                    </span>
                    <span className="icon">
                        <FaLinkedin onClick={() => navigiationHandler("linkedin")}/>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
