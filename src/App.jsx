import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import WhyUs from './Components/WhyUs/whyUs'
import Title from './Components/Title/title'
import About from './Components/About/about'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Card from './Components/Card/card'
import Testimonials from './Components/Testimonials/testimonials'
import Contact from './Components/Contact/contact'


const App = () => {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        {/* <Title title='Experience Matters'/> */}
        <About/>
        <Card/>
        <Testimonials/>
        <Contact/>
        {/* <WhyUs/> */}
      </div>
    </div>
  )
}

export default App