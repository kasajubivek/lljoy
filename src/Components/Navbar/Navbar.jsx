import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/lauraJoyLogo.png';
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const location = useLocation();
  const isInPractiseAreasOrMedia = location.pathname.includes('/practiseAreas') || location.pathname.includes('/media');
  
  return (
    <nav className='container'>
      <HashLink to={isInPractiseAreasOrMedia ? "/#hero" : "#hero"} onClick={handleLinkClick}>
        <img src={logo} alt="Logo" className='logo' />
      </HashLink>
      <button className='menu-toggle' onClick={toggleMenu}>
        {/* {isMenuOpen ? 'Close' : 'Menu'} */}
        {isMenuOpen ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
      </button>
      <ul className={isMenuOpen ? 'active' : ''}>
        <li><HashLink to={isInPractiseAreasOrMedia ? "/#hero" : "#hero"} onClick={handleLinkClick}>Home</HashLink></li>
        <li><HashLink to={isInPractiseAreasOrMedia ? "/#about" : "#about"} onClick={handleLinkClick}>About</HashLink></li>
        <li><HashLink to={isInPractiseAreasOrMedia ? "/#practiseAreas" : "#practiseAreas"} onClick={handleLinkClick}>Practise Areas</HashLink></li>
        <li><HashLink to={isInPractiseAreasOrMedia ? "/#media" : "#media"} onClick={handleLinkClick}>Media</HashLink></li>
        <li><HashLink to={isInPractiseAreasOrMedia ? "/#testimonials" : "#testimonials"} onClick={handleLinkClick}>Testimonials</HashLink></li>
        <li><button className='btn'><HashLink to="#contactUs" onClick={handleLinkClick}>Contact us</HashLink></button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
