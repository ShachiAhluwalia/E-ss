import React from 'react';
import './Header.css';
import ai from '../../assets/ai.png';
import people from '../../assets/people.png';
const Header = () => (
  <div className="E-waste__header section__padding" id="home">
    <div className="E-waste__header-content">
      <h1 className="gradient__text">E-waste: Transform Trash into Tech Treasures!</h1>
      <p>Embrace the E-waste initiative – where yesterday's gadgets become tomorrow's innovation. By recycling your old electronics, you're not just decluttering; you're breathing life into forgotten tech, reducing electronic waste's environmental impact, and paving the way for future breakthroughs. Join us, and let's spark a sustainable tech revolution together!</p>

      <div className="E-waste__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      
    </div>

    <div className="E-waste__header-image">
      <img src={ai} />
    </div>
  </div>
);


export default Header