import React, { useState } from 'react';

import './media.css';
import newspaper from '../../assets/newspaper.jpg'
import table from '../../assets/table.jpg'
import peace from '../../assets/peace.jpg'
import protest from '../../assets/protest.jpg'
import crowd from '../../assets/crowd.JPG'
import reporter from '../../assets/reporter.jpg'
import { Link } from 'react-router-dom';

const Media = ({ fromHomeMedia }) => {
    

    const [cards] = useState([
        {
            id:1,
            title: 'Gun & Weapon Charges in the State of Ontario',
            text: 'Weapons charges are more serious than people realize because many carry mandatory minimum prison sentences - sometimes even for 1st offenders...',
            image: protest  // Update this with the correct path to your image
        },
        {   
            id:2,
            title: 'Drug Charges in the State of Ontario',
            text: 'There are many types of drug offenses ranging from simple possession to trafficking. Whether the arrest came about because of a suspect traffic stop, hand to hand transaction, or warrant based on a confidential informant...',
            image: table
        },
        {   
            id:3,
            title: 'Violent Crime Charges in the State of Ontario',
            text: 'There is no more serious charge with than murder where the penalties range from 20 years to life. But most people don’t realize that the penalties for attempt murder are almost as harsh and are increasing being sought by the...',
            image: peace
        },
        // {
        //     title: 'Domestic Violence Charges in the State of Illinois',
        //     text: 'A domestic battery can result in jails sentences, community service, court ordered counseling and/or treatment, orders of protection, exclusion from the marital/shared residence, etc. If you are charged with any offense involving domestic violence you need someone to advocate on your behalf. Contact Daniel D. Hinich to for a free consultation right away.',
        //     image: protest
        // },
        // {
        //     title: 'DUI Defense in the State of Illinois',
        //     text: 'Being charged with Driving Under the Influence is serious business. It can result in suspension/revocation of your license, fines, fees, classes, SWAP, jail time, loss of employment, etc. The consequences are too serious for anything less than a knowledgeable and experienced defense attorney. Let Daniel D. Hinich use his 25+ years of courtroom experience to fight for you.',
        //     image: crowd
        // },
        // {
        //     title: 'Burglary & Robbery Defense in the State of Illinois',
        //     text: 'Residential burglary charges carry a minimum 4 year prison sentence. Armed robbery carries a minimum 6 but that minimum can increase to 21, 26 or 31 if a gun was involved. These are very serious charges that can result in substantial prison sentences so you need to fight back with everything you have. Contact Daniel D. Hinich to mount a serious and aggressive defense to protect your freedom.',
        //     image: reporter
        // },

    ]);

    return (
        <div>
            <section>
                <div className="mediaCardContainer">
                { fromHomeMedia ? ( <h1 style={{ fontFamily: '"Noto Serif", serif', fontWeight: 550}}>Media<span style={{color: 'var(--primaryColor)'}}></span></h1>):
                (<h1 style={{ fontSize: "30px"}}>Related posts<span style={{color: 'var(--primaryColor)'}}></span></h1>)}
                   
                    <div className="mediaCards">
                        {
                            cards.map((card, i) => (
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
                </div>
            </section>
        </div>
    );
}


export default Media