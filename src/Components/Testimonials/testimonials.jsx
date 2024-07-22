import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/css/pagination';
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import 'swiper/css';
import 'remixicon/fonts/remixicon.css';
import './testimonials.css';
import img1 from '../../assets/pic-2.jpeg'
import img2 from '../../assets/user-2.png'
import img3 from '../../assets/user-3.png'

SwiperCore.use([Pagination]);

const Testimonials = () => {


  // useEffect(()=> {
  //   AOS.init({duration: 1000});
  //   }, []);
    

  return (
    <div className="section__container" id="testimonials">
      <div className="header">
        {/* <p data-aos="fade-right">TESTIMONIALS</p> */}
        <p>TESTIMONIALS</p>
        <h1>What our <span style={{color: 'var(--primaryColor)'}}>clients</span> say about us.</h1>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      > 
      <SwiperSlide>
          <div className="card">
            <span><i className="ri-double-quotes-l"></i></span>
            <p>
            Laura joy and her staff are amazing!! They always answer back calls and provided me with the information I needed as soon as possible. They are great with handling their cases and care about their clients. I recommend her 1000%
            </p>
            <hr />
            {/* <img src={img2} alt="user" /> */}
            <p className="name">Rubiana Steil</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <span><i className="ri-double-quotes-l"></i></span>
            <p>
            The staff super friendly, easy to get along with, always knows great advice, great teamwork, always point you in the right direction, can't go wrong. Miss Joy is a wonderful lady, also can get things done.
            </p>
            <hr />
            {/* <img src={img1} alt="user" /> */}
            <p className="name">Kelly Patricia Barnes</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <span><i className="ri-double-quotes-l"></i></span>
            <p>
            Ms. Joy was professional, fought hard for her client, prepared, caring and understood what the family's situation was. I had to attend court on behalf of someone and was able to watch Ms. Joy in action and it was amazing. We won and this allowed her client to finally get the professional help she needs. Thanks to Ms Joy and all her amazing staff. Well Done.
            </p>
            <hr />
            {/* <img src={img3} alt="user" /> */}
            <p className="name">Greta Clarke</p>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <div className="footer" >
        <h4>Your Success is <span style={{color: 'var(--primaryColor)'}}>Our Priority.</span></h4>
        <p>
        We are committed to providing effective solutions tailored to your legal needs.
        </p>
      </div> */}
    </div>
  );
};

export default Testimonials;

// import React from 'react'

// const Testimonials = () => {
//   return (
//     <div>Testimonials</div>
//   )
// }

// export default Testimonials