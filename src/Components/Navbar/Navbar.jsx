import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/lauraJoyLogo.png';
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation  } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();
  const isInPractiseAreasOrMedia = location.pathname.includes('/practiseAreas') || location.pathname.includes('/media');
  return (
    <nav className='container'>
      {<HashLink to={isInPractiseAreasOrMedia ? "/#hero" : "#hero"}><img src={logo} alt="Logo" className='logo' /></HashLink>}
      <button className='menu-toggle' onClick={toggleMenu}>
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
      <ul className={isMenuOpen ? 'active' : ''}>
        <li><HashLink to={isInPractiseAreasOrMedia ? "/#hero" : "#hero"}>Home</HashLink></li>
        <li><HashLink to={isInPractiseAreasOrMedia ? "/#about" : "#about"}>About</HashLink></li>
        <li><HashLink to={isInPractiseAreasOrMedia ? "/#practiseAreas" : "#practiseAreas"}>Practise Areas</HashLink></li>
        <li><HashLink to={isInPractiseAreasOrMedia ? "/#media" : "#media"}>Media</HashLink></li>
        <li><HashLink to={isInPractiseAreasOrMedia ? "/#testimonials" : "#testimonials"}>Testimonials</HashLink></li>
        <li><button className='btn'><HashLink to="#contactUs">Contact us</HashLink></button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
//   if (!isInPractiseAreasOrMedia) {

//   return (
//     <nav className='container'>
//       <HashLink to="#hero"><img src={logo} alt="Logo" className='logo' /></HashLink>
//       <button className='menu-toggle' onClick={toggleMenu}>
//         {isMenuOpen ? 'Close' : 'Menu'}
//       </button>
//       <ul className={isMenuOpen ? 'active' : ''}>
//         <li><HashLink to="#hero">Home</HashLink></li>
//         <li><HashLink to="#about">About</HashLink></li>
//         <li><HashLink to="#practiseAreas">Practise Areas</HashLink></li>
//         <li><HashLink to="#media">Media</HashLink></li>
//         <li><HashLink to="#testimonials">Testimonials</HashLink></li>
//         {/* <li>About us</li> */}
//         <li><button className='btn'><HashLink to="#contactUs">Contact us</HashLink></button></li>
//       </ul>
//     </nav>
//   );
// }else{
//   return (
//     <nav className='container'>
//       <Link to="/#hero"><img src={logo} alt="Logo" className='logo' /></Link>
//       <button className='menu-toggle' onClick={toggleMenu}>
//         {isMenuOpen ? 'Close' : 'Menu'}
//       </button>
//       <ul className={isMenuOpen ? 'active' : ''}>
//         <li><HashLink to="/#hero">Home</HashLink></li>
//         <li><HashLink to="/#about">About</HashLink></li>
//         <li><HashLink to="/#practiseAreas">Practise Areas</HashLink></li>
//         <li><HashLink to="/#media">Media</HashLink></li>
//         <li><HashLink to="/#testimonials">Testimonials</HashLink></li>
//         <li><button className='btn'><HashLink to="#contactUs">Contact us</HashLink></button></li>
//       </ul>
//     </nav>
//   );
// }
// }
// export default Navbar;
