import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import dark_arrow from '../../assets/arrow.png';
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
  const animationProps = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0, delay: 0 }
  };

  return (
    <div className='hero container' id="hero">
      <div className='hero-text'>
        <motion.h1 {...animationProps} transition={{ duration: 1 }}>A WINDSOR CRIMINAL DEFENSE LAWYER</motion.h1>
        <div className='hero-text-two'>
          <motion.h2 {...animationProps} className='innerh1'>WE WIN!</motion.h2>
          <HashLink to="#contactUs">
          <motion.button {...animationProps} transition={{ delay: 1 }} className='btnHero'>
            Contact Us Now
            <img src={dark_arrow} alt="arrow"/>
          </motion.button>
          </HashLink>
        </div>
      </div>
      <div className='google'>
        <h1>
          <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?kgmid=/g/11bydmbm3g&hl=en-CA&q=Laura+Joy&kgs=1a0d8a3fb63a0528&shndl=30&shem=lrnolc,ssic&source=sh/x/loc/osrp/m5/1#lrd=0x883b2d1fc0a71c95:0x38964b77418b811d,1,,,,">
            Google
          </a>
        </h1>
        <div className="rating">
          <span>4.1 </span>
          <span className="stars">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9734;</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
