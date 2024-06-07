import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import WhyUs from './Components/WhyUs/whyUs'
import Title from './Components/Title/title'
import About from './Components/About/about'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Card from './Components/Card/card'

const App = () => {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title title='KNOW LAURA JOY LAW'/>
        <About/>
        <Card/>
        {/* <WhyUs/> */}
      </div>
    </div>
  )
}

export default App