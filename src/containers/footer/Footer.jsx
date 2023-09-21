import React from 'react';
import './Footer.css';
import Logo1 from '../../assets/Logo1.png';
const Footer = () => {
  return (
<div className="E-waste__footer section__padding">
    <div className="E-waste__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="E-waste__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="E-waste__footer-links">
      <div className="E-waste__footer-links_logo">
        <img src={Logo1} alt="E-waste_logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="E-waste__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="E-waste__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="E-waste__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="E-waste__footer-copyright">
      <p>@2023 E-waste. All rights reserved.</p>
    </div>
  </div>
  );
}

export default Footer;