import React, { useEffect, useState } from 'react';
import './Hero.css'
import dark_arrow from '../../assets/arrow.png'

const Hero = () => {
  
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>A WINDSOR CRIMINAL DEFENSE LAWYER</h1><h2 className='innerh1'>WHO WILL FIGHT FOR YOU</h2>
            {/* <h3>Let criminal defense lawyer Laura Joy put her years of experience to work fighting for your rights.</h3>
            <button className='btnHero'>Explore <img src = {dark_arrow}/></button> */}
            <div className='hero-text-two'>
              < h3>Let criminal defense lawyer Laura Joy put her years of experience to work fighting for your rights.</h3>
              <button className='btnHero'>Contact Us Now<img src = {dark_arrow}/></button>
            </div>
        </div>
        <div className='google'>
            <h1><a target="_blank" href="https://www.google.com/search?kgmid=/g/11bydmbm3g&hl=en-CA&q=Laura+Joy&kgs=1a0d8a3fb63a0528&shndl=30&shem=lrnolc,ssic&source=sh/x/loc/osrp/m5/1#lrd=0x883b2d1fc0a71c95:0x38964b77418b811d,1,,,,">Google</a></h1>
            <div className="rating">
                <span>4.3</span>
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