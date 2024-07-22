import React from 'react'
import './about.css'
import laura from '../../assets/Laura.jfif'

const about = () => {
  return (
    <div className='about' id="about">
        <div className="about-left">
            <div className="img-wrapper">
                <img src={laura} className='about-img'/>
            </div>
        </div>
        <div className="about-right">
            <h2>Ms. Laura Joy</h2>
            <h3>Laura Joy is a dedicated criminal defence lawyer based in Windsor. In her role as a criminal defence lawyer, she guides her clients through the intricacies of the legal system, providing insights into regulations, charges, and potential challenges. Laura's courtroom presence is marked by thorough preparation and a determination to secure favourable outcomes. Throughout the course of your case, she offers comprehensive guidance on legal options, meticulously outlining the benefits and drawbacks of each choice and how these decisions can strategically advance your interests.</h3>
            <h3>Laura is a distinguished legal professional associated with Laura Joy Law. The practice boasts a wealth of experience in handling felony cases across all tiers of the Ontario criminal courts. Their expertise spans a broad spectrum of criminal charges, encompassing offences such as impaired and over .80, Driving under the influence (DUI), assault, domestic assault, drug possession and trafficking, as well as fraud. For those in need of legal representation and guidance, Laura Joy Law extends an invitation to arrange a consultation and explore the potential strategies for your case.</h3>
        </div>
    </div>
  )
}

export default about
