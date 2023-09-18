import React,{useState} from 'react';
import './Navbar.css';

import {RiMenu3Line, RiCloseLin, RiCentosFill, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/E-was.svg';
const Menu=()=>(

  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#WasE">What is E-Waste?</a></p>
  <p><a href="#possibility">E-waste</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
 
  </>

);
const Navbar = () => {
  const [toggleMenu, setToggleMenu]=useState(false);
  return (
    <div className='E-waste__navbar'>
      <div className='E-waste__navbar-links'>
        <div className='E-waste__navbar-links_logo'>
          <img src={logo} alt="logo"/>

        </div>
        <div className='E-waste__navbar-links_container'>

          <p><a href="#home">Home</a></p>
          <p><a href="#WasE">What is E-Waste?</a></p>
          <p><a href="#possibility">E-waste</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
        </div>
        <div className='E-waste__navbar-sign'>
          <p>
            Sign in 
          </p>
          <button type='button'>Sign up</button>
        </div>
        <div className='E-waste__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="E-waste__navbar-menu_container scale-up-center">
            <div className="E-waste__navbar-menu_container-links">

              <p><a href="#home">Home</a></p>
              <p><a href="#WasE">What is E-Waste?</a></p>
              <p><a href="#possibility">E-waste</a></p>
              <p><a href="#features">Case Studies</a></p>
              <p><a href="#blog">Library</a></p>
              

            </div>
            <div className="E-waste__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
          </div>
        )}
        </div>
        </div>
  )
}

export default Navbar