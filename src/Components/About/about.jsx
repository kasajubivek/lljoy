import React, { useEffect } from 'react'
import './about.css'
import laura from '../../assets/blawyer.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const about = () => {

  useEffect(()=> {
    AOS.init({duration: 2000});
  }, []);


  return (
    <div className='about'>
        <div className="about-left">
            <img src={laura} className='about-img' data-aos="fade-right"/>
        </div>
        <div className="about-right">
            <h2 data-aos="fade-left">Ms. Laura Joy</h2>
            <h3 data-aos="fade-left">Laura Joy is a dedicated criminal defence lawyer based in Windsor. In her role as a criminal defence lawyer, she guides her clients through the intricacies of the legal system, providing insights into regulations, charges, and potential challenges. Laura's courtroom presence is marked by thorough preparation and a determination to secure favourable outcomes. Throughout the course of your case, she offers comprehensive guidance on legal options, meticulously outlining the benefits and drawbacks of each choice and how these decisions can strategically advance your interests.</h3>
            <h3 data-aos="fade-left">Laura is a distinguished legal professional associated with Laura Joy Law. The practice boasts a wealth of experience in handling felony cases across all tiers of the Ontario criminal courts. Their expertise spans a broad spectrum of criminal charges, encompassing offences such as impaired and over .80, Driving under the influence (DUI), assault, domestic assault, drug possession and trafficking, as well as fraud. For those in need of legal representation and guidance, Laura Joy Law extends an invitation to arrange a consultation and explore the potential strategies for your case.</h3>

            <button className='learnMoreBtn' data-aos="fade-left">Learn More</button>
        </div>
    </div>
  )
}

export default about
