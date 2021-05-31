import React from 'react'
import {Link} from 'react-router-dom';

const Links = ({parent}) => {
  
  return (
    <ul className={`${parent}-links ${parent === 'nav' && "hide-for-mobile"}`}>
        <li className={`${parent}-link`}>
          <Link to="/company">our company</Link>
        </li>
        <li className={`${parent}-link`}>
          <Link to="/locations">locations</Link>
        </li>
        <li className={`${parent}-link`}>
          <Link to='/contact'>contact</Link>
        </li>
    </ul>
  )
}

export default Links
