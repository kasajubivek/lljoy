import React, { useState } from 'react';
import './card.css';
import { Link } from 'react-router-dom';


const Card = ({cards, preTitle, pageTitle}) => {

    // const [cards] = useState([
    //     {
    //         title: 'Gun & Weapon Charges in the State of Illinois',
    //         text: 'Weapons charges are more serious than people realize because many carry mandatory minimum prison sentences - sometimes even for 1st offenders. This area of law can be complicated by recent decisions involving the 2nd Amendment so it is important that you have an attorney that is well versed in this area. Contact Daniel D. Hinich to protect your freedom and 2nd Amendment rights.',
    //         image: gun  // Update this with the correct path to your image
    //     },
    //     {
    //         title: 'Drug Charges in the State of Illinois',
    //         text: 'There are many types of drug offenses ranging from simple possession to trafficking. Whether the arrest came about because of a suspect traffic stop, hand to hand transaction, or warrant based on a confidential informant you need someone familiar with 4th Amendment and narcotics law. Many times addiction is the root of the problem and you need someone familiar with the alternative programs available. Let Daniel D. Hinich put his experience to work for you fighting your case.',
    //         image: drug
    //     },
    //     {
    //         title: 'Violent Crime Charges in the State of Illinois',
    //         text: 'There is no more serious charge with than murder where the penalties range from 20 years to life. But most people don’t realize that the penalties for attempt murder are almost as harsh and are increasing being sought by the State’s Attorney. Attempt murder carries a minimum of 21, 25, or 31 if a gun was involved. Don’t take any chances. Contact Daniel D. Hinich to get the serious and aggressive defense these charges require.',
    //         image: handcuffs
    //     },
    //     {
    //         title: 'Domestic Violence Charges in the State of Illinois',
    //         text: 'A domestic battery can result in jails sentences, community service, court ordered counseling and/or treatment, orders of protection, exclusion from the marital/shared residence, etc. If you are charged with any offense involving domestic violence you need someone to advocate on your behalf. Contact Daniel D. Hinich to for a free consultation right away.',
    //         image: violence
    //     },
    //     {
    //         title: 'DUI Defense in the State of Illinois',
    //         text: 'Being charged with Driving Under the Influence is serious business. It can result in suspension/revocation of your license, fines, fees, classes, SWAP, jail time, loss of employment, etc. The consequences are too serious for anything less than a knowledgeable and experienced defense attorney. Let Daniel D. Hinich use his 25+ years of courtroom experience to fight for you.',
    //         image: car
    //     },
    //     {
    //         title: 'Burglary & Robbery Defense in the State of Illinois',
    //         text: 'Residential burglary charges carry a minimum 4 year prison sentence. Armed robbery carries a minimum 6 but that minimum can increase to 21, 26 or 31 if a gun was involved. These are very serious charges that can result in substantial prison sentences so you need to fight back with everything you have. Contact Daniel D. Hinich to mount a serious and aggressive defense to protect your freedom.',
    //         image: trafficlights
    //     },

    // ]);

    return (
        <div>
            <section>
            {/* <Link to="/practiseArea"> */}
                <div className="cardContainer">
                    <h1 style={{ fontFamily: '"Noto Serif", serif', fontWeight: 550}}>{preTitle} <span style={{color: 'var(--primaryColor)'}}>{pageTitle}</span></h1>
                    <div className="cards">
                        {
                            cards.map((card, i) => (
                                <div key={i} className="card">
                                    <div className="card-title">
                                        <img src={card.image} alt={`image for ${card.title}`} className="card-image" />
                                        <h2>{card.title}</h2>
                                    </div>
                                    <span>{card.text}</span>
                                    {/* <div className="read-more">
                                        <a href="#" style = {{fontSize: '15px'}}>Read more &gt;&gt;</a>
                                    </div> */}
                                </div>
                            ))
                        }

                    </div>
                </div>
                {/* </Link> */}
                <Link to="/practiseAreas"><button className='cardBtn'>Explore more</button></Link>
            </section>
        </div>
    );
}

export default Card;
