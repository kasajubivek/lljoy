import React, { useState, useContext  } from 'react';

import './media.css';

// import rifle from '../../assets/rifle.jpg'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/css/pagination';
import CardContext from '../../contexts/CardContext';
import { useParams } from 'react-router-dom';

const Media = ({ fromHomeMedia }) => {
    const { id } = useParams();
    const cardId = parseInt(id);

    const { cards, cardsTwo } = useContext(CardContext);

    const filteredCards = cards.filter(card => card.id !== cardId);
    const filteredCardsTwo = cardsTwo.filter(card => card.id !== cardId);

    return (
        <div>
            <section id="media">
                <div className="mediaCardContainer">
                { fromHomeMedia ? ( <h1 style={{ fontFamily: '"Noto Serif", serif', fontWeight: 550}}>Media<span style={{color: 'var(--primaryColor)'}}></span></h1>):
                (<h1 style={{ fontSize: "30px", textAlign: "left"}}>Read more related to Ms. Joy<span style={{color: 'var(--primaryColor)'}}></span></h1>)}
                                       <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      > 
                          <SwiperSlide>
                    <div className="mediaCards">

                        {
                            filteredCardsTwo.map((card, i) => (
                                <div key={i} className="mediaCard">
                                    <Link to={`/media/${card.id}`}><div className="media-img-card">
                                        <img src={card.image} alt={`image for ${card.title}`} className="media-image" />
                                        {/* <h2>{card.title}</h2> */}
                                    </div>
                                    <h2>{card.title}</h2></Link>
                                    { fromHomeMedia && (<span>{card.text}</span>)}
                                    <div className="read-more">
                                        {/* <a href="#" style = {{fontSize: '15px'}}>Read more &gt;&gt;</a> */}
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    </SwiperSlide>
      <SwiperSlide>
                    <div className="mediaCards">

                        {
                            filteredCards.map((card, i) => (
                                <div key={i} className="mediaCard">
                                    <Link to={`/media/${card.id}`}><div className="media-img-card">
                                        <img src={card.image} alt={`image for ${card.title}`} className="media-image" />
                                        {/* <h2>{card.title}</h2> */}
                                    </div>
                                    <h2>{card.title}</h2></Link>
                                    { fromHomeMedia && (<span>{card.text}</span>)}
                                    <div className="read-more">
                                        {/* <a href="#" style = {{fontSize: '15px'}}>Read more &gt;&gt;</a> */}
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    </SwiperSlide>

                    </Swiper>
                </div>
            </section>
        </div>
    );
}


export default Media