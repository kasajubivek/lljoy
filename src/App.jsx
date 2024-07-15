import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import ContactUs from './Components/ContactUs/contactUs'
import Footer from './Components/Footer/footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import PractiseAreas from './Components/PractiseAreas/practiseAreas'
import MediaPage from './pages/Media/media'
import Test from './pages/Test/test'
import Media from './Components/Media/media'
import Home from './pages/Home/home'



const App = () => {

  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/media/:id" element={<MediaPage />} />
            <Route path="/test" element={<Test />} />
            {/* Define more routes as needed */}
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App



// const App = () => {

//   return (
//     <div>
//       <Navbar/>
//       <Hero/>
//       <div className='container'>
//         {/* <Title title='Experience Matters'/> */}
//         <About/>
//         {/* <Card/> */}
//         <PractiseAreas/>
//         <Media/>
//         <Testimonials/>
//         <ContactUs/>
//         {/* <WhyUs/> */}
//       </div>
//       <Footer/>
//     </div>
//   )
// }

// export default App