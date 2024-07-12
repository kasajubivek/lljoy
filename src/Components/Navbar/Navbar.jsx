import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/lauraJoyLogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='container'>
      <img src={logo} alt="Logo" className='logo' />
      <button className='menu-toggle' onClick={toggleMenu}>
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
      <ul className={isMenuOpen ? 'active' : ''}>
        <li>Home</li>
        <li>Practise Areas</li>
        <li>Media</li>
        <li>Testimonials</li>
        <li>About us</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
