import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
       
        <div className="logo">
          <h2>
            <span>C</span>ode
            <span>4</span>U
          </h2>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a href="#" >Home</a>
            </li>
            <li>
              <a href="#" >about</a>
            </li>
            <li>
              <a href="#" >services</a>
            </li>
            <li>
              <a href="#" >contact</a>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>

                <FaFacebookSquare className="facebook" />
 
            </li>
            <li>
 
                <FaInstagramSquare className="instagram" />
              
            </li>
            <li>

                <FaYoutubeSquare className="youtube" />
              
            </li>
          </ul>

          
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      
       <section className="hero-section">
        <p>Welcome to </p>
        <h1>Code4U</h1>
      </section> 
    </>
  );
};

export default Navbar;