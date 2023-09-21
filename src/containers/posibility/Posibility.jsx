import React from 'react';
import './Posibility.css';
import posibility from '../../assets/E_WASTE.png';
const Posibility = () => {
  return(
  <div className="E-waste__posibility section__padding" id="posibility">
  <div className="E-waste__posibility-image">
    <img src={posibility} alt="possibility" />
  </div>
  <div className="E-waste__posibility-content">
    <h4>Request Access to Get Started</h4>
    <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
    <h4>Request Early Access to Get Started</h4>
  </div>
</div>
  );
}

export default Posibility;