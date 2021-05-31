import React from 'react'
import Links from '../../links/Links';
import './Menu.scss';


const Menu = ({closeMenu}) => {
  
  return (
    <div onClick={closeMenu} className='menu hide-for-desktop container-pall'>
      <Links parent='menu'/>
    </div>
  )
}

export default Menu
