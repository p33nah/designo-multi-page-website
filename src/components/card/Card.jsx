import React from 'react'
import {Link} from 'react-router-dom';
import './Card.scss';

const Card = ({link, linkText, title, text}) => {
  return (
    <div className='card container'>
      <div className="card-content">
        <h2 className="card-title">
          {title}
        </h2>
        <p className="card-text">
          {text}
        </p>
        <div className="card-btn">
          <Link to={link}>{linkText}</Link>
        </div>
      </div>
    </div>
  )
}

export default Card
