import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import WhyUs from './Components/WhyUs/whyUs'
import Title from './Components/Title/title'
import About from './Components/About/about'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title title='Why Choose Us'/>
        <WhyUs/>
        <About/>
      </div>
    </div>
  )
}

export default App