import React from 'react'
import './whyUs.css'
import grey from '../../assets/grey1.jpg'
import rating from '../../assets/rating.png'
import balance from '../../assets/balance.png'
import courthouse from '../../assets/courthouse.png'


const whyUs = () => {
  return (
    <div className='whyUs'>
        <div className='content'>
            {/* <img src={grey} /> */}
            <div className="caption">
                <img src={rating} />
                <h1>Proven Expertise</h1>
                <p>Laura Joy is a dedicated criminal defence lawyer based in Windsor. She is one of the Three Best Rated® Criminal Defense Lawyers in Windsor, ON.</p>
            </div>
        </div>
        <div className='content'>
            <img src={grey} />
            <div className="caption">
                <img src={balance} />
                <h1>Resolute Legal Advocacy</h1>
                <p>We're renowned for our relentless advocacy, meticulous preparation, and inventive defenses, which have established us as leaders in protecting clients facing criminal charges, including DUI cases.</p>
            </div>
        </div>
        <div className='content'>
            <img src={grey} />
            <div className="caption">
                <img src={courthouse} />
                <h1>Tailored Client Care</h1>
                <p>We take great pride in providing personalized care to our clients, seeing them as individuals rather than mere entries in a legal process.</p>
            </div>
        </div>
    </div>
  )
}

export default whyUs