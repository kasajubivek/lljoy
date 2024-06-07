import React, { useEffect, useState } from 'react';
import { delay, motion } from "framer-motion";
import './Hero.css'
import dark_arrow from '../../assets/arrow.png'

const Hero = () => {

  const animationProps = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0, delay: 0 }
};
  
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <motion.h1 {...animationProps} transition = {{ duration: 1 }}>A WINDSOR CRIMINAL DEFENSE LAWYER</motion.h1><motion.h2 {...animationProps} className='innerh1'>WHO WILL FIGHT FOR YOU</motion.h2>
            {/* <h3>Let criminal defense lawyer Laura Joy put her years of experience to work fighting for your rights.</h3>
            <button className='btnHero'>Explore <img src = {dark_arrow}/></button> */}
            <div className='hero-text-two'>
              <motion.h3 {...animationProps} transition = {{ delay: 2 }}>Let criminal defense lawyer Laura Joy put her years of experience to work fighting for your rights.</motion.h3>
              <motion.button {...animationProps} transition = {{ delay: 3 }} className='btnHero'>Contact Us Now<img src = {dark_arrow}/></motion.button>
            </div>
        </div>
        <div className='google'>
            <h1><a target="_blank" href="https://www.google.com/search?kgmid=/g/11bydmbm3g&hl=en-CA&q=Laura+Joy&kgs=1a0d8a3fb63a0528&shndl=30&shem=lrnolc,ssic&source=sh/x/loc/osrp/m5/1#lrd=0x883b2d1fc0a71c95:0x38964b77418b811d,1,,,,">Google</a></h1>
            <div className="rating">
                <span>4.4</span>
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
  )
}

export default Hero


            // {/* <p>Empowering Your Legal Journey: From Consultation to Resolution</p> */}
            // {/* : Your Trusted Legal Partner in Navigating Complexities, Securing Your Future, and Upholding Your Rights with Integrity and Diligence.</p> */}