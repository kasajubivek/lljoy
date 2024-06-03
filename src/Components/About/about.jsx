import React from 'react'
import './about.css'
import laura from '../../assets/laura.jpg'

const about = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={laura} className='about-img'/>
        </div>
        <div className="about-right">
            <h2>Ms. Laura Joy</h2>
            <h3>With a passion for justice and a commitment to excellence, Laura is a distinguished legal professional dedicated to providing unparalleled legal representation to her clients.</h3>
            <h3>As the founder of Laura Joy Law, she brings years of expertise in corporate law to the table.</h3>
        </div>
    </div>
  )
}

export default about