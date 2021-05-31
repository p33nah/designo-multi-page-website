import React from 'react';
import {Link} from 'react-router-dom';
import './ContactCard.scss'


const ContactCard = () => {
  return (
    <div className='contact-card container container-pall'>
      <div className="contact-card-content">
        <h2 className="contact-card-title">
        Let’s talk about your project
        </h2>
        <p className="contact-card-text">
        Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
        </p>
        <div className="contact-card-btn">
          <Link to='/contact'>GET IN TOUCH</Link>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
