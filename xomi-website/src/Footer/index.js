import './index.css';
import React from 'react';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import mail from '../images/mail.png'
import telephone from '../images/telephone.png'
import logo from '../images/logo.png'
const Banner=()=> {
  return (
    <div className='container'>
    <div className="banner">
      <div className="banner-text">
        <div className='headers'>
        <h1>Subscribe To Our Newsletter</h1>
        <br></br>
        <p className='header2'>To get newly updated news</p>
        </div>
         <div className="email-signup">
          <input className="text" type="text" placeholder="Enter email address" />
          <button className='button'>Send</button>
        </div>
        </div>
    
      <div className="contact-info">
        <div className='details'>
        <div className='tele-texts'>
        <img className='tele' src={telephone} alt=''/>
     
      <p className='tel'>:+2547645678</p>
      </div>
      <div className='mail-texts'>
      <img id='mail' src={mail} alt=''/>
        <p className='email'>:@Xomi. Co.Ke</p>
        </div>
        <div className='images'>
        <img id="facebook" src={facebook} alt='facebook socials'/>
        <img id="insta" src={instagram} alt='instagram socials'/>
        <img id="x" src={twitter} alt='twitter socials'/>
        </div>
        </div>

      <div className="navigation">
      <ul>Home</ul>
      <ul> About</ul>
      <ul>Courses</ul>
      <ul>Contact</ul>
      </div>
      <div className='logo'>
        <img id='xomi' src={logo} alt='xomi logo'/>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Banner;