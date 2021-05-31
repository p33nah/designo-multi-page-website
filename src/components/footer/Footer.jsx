import React from 'react'
import logoLight from '../../assets/shared/desktop/logo-light.png';
import fb from '../../assets/shared/desktop/icon-facebook.svg';
import twit from '../../assets/shared/desktop/icon-twitter.svg';
import inst from '../../assets/shared/desktop/icon-instagram.svg';
import pint from '../../assets/shared/desktop/icon-pinterest.svg';
import yt from '../../assets/shared/desktop/icon-youtube.svg';
import Links from '../links/Links';
import './Footer.scss'
import ContactCard from '../contact-card/ContactCard';

const Footer = () => {
  return (
    
      <footer>
        <ContactCard/>
        <div className="footer container container-pall">
          <div className='footer-logo container-py'>
            <img src={logoLight} alt="" />
          </div>
          <div className="footer-links-container container-py">
            <Links parent='footer'/>
          </div>
          
          <div className="footer-address">
            <p>Designo Central Office</p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className="footer-contact">
            <p>Contact Us (Central Office)</p>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
          <div style={{color: "white"}} className="footer-social">
              <img className='footer-icon' src={fb} alt="facebook" />
              <img className='footer-icon' src={yt} alt="youtube" />
              <img className='footer-icon' src={twit} alt="twitter" />
              <img className='footer-icon' src={pint} alt="pinterest" />
              <img className='footer-icon' src={inst} alt="instagram" />
          </div>
        </div>
      </footer>
  )
}

export default Footer
