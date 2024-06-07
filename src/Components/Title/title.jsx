import React, { useEffect } from 'react'
import './title.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Title = ({title}) => {
  return (
    <div className='title'>
      <h1 style={{ fontWeight: 400}} data-aos="zoom-in">{title}</h1>
    </div>
  )
}

export default Title