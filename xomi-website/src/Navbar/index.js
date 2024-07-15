import logoImage from "../images/logoImage.png.png";
import React, { useState } from 'react';
import { FaBars,FaTimes} from 'react-icons/fa';
import './index.css'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    

    const toggleMenu=() =>{
      setIsOpen(!isOpen);
    };

    return (
      <div isOpen = {isOpen}>
<div className='nav'>
<div>
  <img src={logoImage} alt="xomi-logo" id='landingpagelogo'/>
  </div>
  <button className='hamburger-button' onClick={toggleMenu}>
    {isOpen ? <FaTimes/> : <FaBars />}
  </button>
  
<ul className={`items ${isOpen ? 'close'  : 'open'}`}>
<a href='#Home'>Home</a>
<a href='#About Us'>About Us</a>
<a href='#Courses'>Courses</a>
<a href='#Team Members'>Team Members</a>
<a href='#Contacts'>Contacts</a>
</ul>
</div>

</div>
    )
}

export default Navbar;