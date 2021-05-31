
import Menu from './menu/Menu'
import './Nav.scss';
import logoDark from '../../assets/shared/desktop/logo-dark.png';
import btnClose from '../../assets/shared/mobile/icon-hamburger.svg';
import btnOpen from '../../assets/shared/mobile/icon-close.svg';
import {Link} from 'react-router-dom';
import Links from '../links/Links';
import useToggle from '../../hooks/useToggle';

const Nav = () => {
  const [isOpen, setIsOpen] = useToggle()

  return (
    <div className='nav container container-pall'>
      <div onClick={isOpen ? setIsOpen : ""} className="nav-logo">
        <Link to='/'>
        <img src={logoDark} alt="logo-dark" />
        </Link>
      </div>
      <div className='nav-btn hide-for-desktop' onClick={setIsOpen}>
        <img src={isOpen ? btnOpen : btnClose} alt="hamburger" />
      </div>
      <Links parent='nav'/>
      {isOpen && <Menu closeMenu={setIsOpen}/>}
    </div>
  )
}

export default Nav
