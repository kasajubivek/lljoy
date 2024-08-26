import React, { useState, useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
import './practiseAreas.css';
import ContactUs from '../../Components/ContactUs/contactUs'
import newspaper from '../../assets/newspaper.jpg';
import table from '../../assets/table.jpg';
import peace from '../../assets/peace.jpg';
import protest from '../../assets/protest.jpg';
import crowd from '../../assets/crowd.JPG';
import reporter from '../../assets/reporter.jpg';
import checking from '../../assets/checking.JPG';
import caught from '../../assets/caught.jpg'
import windowCrack from '../../assets/windowCrack.JPG'
import punch from '../../assets/punch.jpg'
import hammer from '../../assets/hammer.jpg'
import MediaComp from '../../Components/Media/media'
import { useParams } from 'react-router-dom';

const PractiseAreas = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}, [pathname]);

  const [cards] = useState([
    {
        id:1,
        title: 'Sexual Assault',
        text: 'A charge of sexual assault can affect you for the rest of your life. If you are convicted, your education, reputation, and ability to earn a living can be greatly reduced. Our sexual assault lawyers have extensive experience representing clients accused of sexual crimes, and we offer free, confidential consultations.',
        image: protest  // Update this with the correct path to your image
    },
    {   
        id:2,
        title: 'Impaired Driving/DUI',
        text: 'If you have been arrested for impaired driving, you’ll need an experienced criminal defence lawyer to explain your options and fight for the best possible outcome. We have helped many people who were facing charges of DUI, refusing a breath test, and impaired care or control of a vehicle, and we can do the same for you. Contact us to start your free online consultation with an experienced impaired driving lawyer.',
        image: checking
    },
    {   
        id:3,
        title: 'Domestic Assault',
        text: (
            <>
              Accusations of domestic assault are particularly difficult to handle because they involve intimate partners or family members. Given the relationship the defendant has with their accuser, they often don’t take the legal action they should to protect themselves from this very serious charge.
              <br /> <br /> 
              If you are charged with domestic assault in Ontario, do not hesitate to hire the best criminal defence lawyer you can find. Look no further than Kruse Law Firm. Our defence team has decades of experience defending those accused of domestic assault.
            </>
          ),
        image: peace
    },
    {   
        id:4,
        title: 'Assault',
        text: 'If you’re considering pleading guilty to a charge of assault, you should know that the resulting conviction can have permanent consequences. Our criminal defence lawyers have years of experience fighting for the best possible outcome for our clients, and we offer free online consultations to ease the pressure you are under. Contact us today. We will answer your questions and explain your rights under the law.',
        image: punch
    },
    {   
        id:5,
        title: 'Uttering Threats',
        text: 'Threatening someone is a crime under Canadian law. Even if you didn’t mean it or simply spoke in anger, you could still be charged and convicted for uttering threats. Our defence lawyers successfully defend the rights of clients accused of uttering threats, and we can put that experience to work for you. Contact Kruse Law Firm today to get answers to your questions in your free online consultation.',
        image: reporter
    },
    {   
        id:6,
        title: 'Mischief',
        text: 'Mischief charges can include a wide range of destruction or adulteration of someone else’s property. If you have been accused of willfully damaging someone’s home or possessions with no intent to steal, our defence lawyers offer free online consultations to explain your options. Contact Kruse Law Firm today to have us begin building your case to protect you in court.',
        image: windowCrack
    },
    {   
        id:7,
        title: 'Criminal Harassment',
        text: 'If you don’t mount an effective defence against charges of criminal harassment, your freedom and your ability to earn a living may be permanently altered. Our defence lawyers have experience fighting for the rights of clients who were arrested or accused of stalking, and we offer free online consultations to answer your questions. Contact us today to learn how we will protect you during the court process as we get started building your case.',
        image: newspaper
    },
    {   
        id:8,
        title: 'Theft',
        text: 'Theft may seem like a minor offence, but being convicted or pleading guilty to these charges can have permanent consequences. Our criminal defence lawyers have fought for clients facing a wide range of theft charges, including retail theft, workplace theft, shoplifting, price switching, and gaming offences. Contact us today to have us explain your rights in a free and confidential consultation.',
        image: caught
    },

]);




  return (
    <div>
      <div className="prac-about-container">
        {/* First Row */}
        <div className="prac-hero-image">
                <img 
        src={hammer}
        alt="Hero" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          position: 'absolute',
          objectPosition: '0% 55%'
        }} 
      />
          <h1>Practice Areas</h1>
        </div>

        <div className="prac-content">
            {cards.map(card => (
            <div key={card.id} className="prac-row" id={card.id}>
            <div className="prac-text">
                <h2>{card.title}</h2>
                <p>{card.text}</p>
            </div>
            <div className="prac-image">
                <img src={card.image} alt={card.title} className="prac-small-image" />
            </div>
            </div>
            ))}
        </div>
    </div>
    <div className="con-div">
        <ContactUs/>
        </div>
    </div>
  );
}

export default PractiseAreas;
