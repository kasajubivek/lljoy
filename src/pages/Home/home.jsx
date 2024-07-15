import React from 'react'
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/about'
import PractiseAreas from '../../Components/PractiseAreas/practiseAreas'
import Media from '../../Components/Media/media'
import ContactUs from '../../Components/ContactUs/contactUs'
import Testimonials from '../../Components/Testimonials/testimonials'

const Home = () => {
  return (
    <div>
      <Hero/>
      <div className='container'>
        {/* <Title title='Experience Matters'/> */}
        <About/>
        {/* <Card/> */}
        <PractiseAreas/>
        <Media fromHomeMedia={true}/>
        <Testimonials/>
        <ContactUs/>
        {/* <WhyUs/> */}
      </div>
    </div>
  )
}

export default Home


