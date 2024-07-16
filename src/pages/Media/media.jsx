import React, { useState, useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
import './media.css';
import newspaper from '../../assets/newspaper.jpg';
import table from '../../assets/table.jpg';
import peace from '../../assets/peace.jpg';
import protest from '../../assets/protest.jpg';
import crowd from '../../assets/crowd.JPG';
import reporter from '../../assets/reporter.jpg';
import MediaComp from '../../Components/Media/media'
import { useParams } from 'react-router-dom';

const Media = () => {
  const { id } = useParams();
  const cardId = parseInt(id);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}, [pathname]);

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

]);

const selectedCard = cards.find(card => card.id === cardId);


  return (
    <div>
      <div className="med-about-container">
        {/* First Row */}
        {selectedCard && (
        <div className="med-hero-image">
                <img 
        src={selectedCard.image}
        alt="Hero" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          position: 'absolute', 
          top: 0, 
          left: 0 
        }} 
      />
          <h1>{selectedCard.title}</h1>
        </div>
        )}
        {/* Second Row */}
        {/* <div className="med-row med-two-columns">
          <div className="med-column">
          <img src={protest} alt="Description" className="med-column-image" />
            <h2>Overview</h2>
            <p>
              In Illinois, gun and weapon charges are taken very seriously, with laws designed to promote public safety and reduce violence. The state has specific regulations governing the possession, use, and sale of firearms.
            </p>
          </div>
          <div className="med-column">
            <h2>Legal Implications</h2>
            <p>
              Violating gun laws in Illinois can result in severe penalties, including fines and imprisonment. Charges may range from misdemeanor offenses to felony charges, depending on the nature of the violation.
            </p>
          </div>
        </div> */}
        {/* Third Row */}
                {/* Content Rows */}
                <div className="med-row med-one-column">
          <div className="med-column">
            <h2>Overview</h2>
            <span>
              In Illinois, gun and weapon charges are taken very seriously, with laws designed to promote public safety and reduce violence. The state has specific regulations governing the possession, use, and sale of firearms.
            </span>
          </div>
        </div>
        
        <div className="med-row med-one-column">
          <div className="med-column">
            <h2>Legal Implications</h2>
            <span>
              Violating gun laws in Illinois can result in severe penalties, including fines and imprisonment. Charges may range from misdemeanor offenses to felony charges, depending on the nature of the violation.
            </span>
          </div>
        </div>

        <div className="med-row med-one-column">
          <div className="med-column">
            <h2>Recent Statistics</h2>
            <span>
              Recent data indicates a concerning trend in gun violence within urban areas of Illinois. Legislative measures are being proposed to address these issues, focusing on background checks and responsible gun ownership.
            </span>
            <ul>
              <li>In 2022, gun violence incidents rose by 15% compared to the previous year.</li>
              <li>Over 60% of gun-related crimes were reported in major cities.</li>
              <li>Public support for stricter gun control laws is at an all-time high.</li>
            </ul>
          </div>
        </div>

        <div className="med-row med-one-column">
          <div className="med-column">
            <h2>Community Response</h2>
            <span>
              Communities across Illinois are taking action to combat gun violence through various initiatives. Some key efforts include:
            </span>
            <ul>
              <li>Grassroots organizations advocating for policy change.</li>
              <li>Community workshops focusing on safe gun storage practices.</li>
              <li>Increased funding for mental health resources to address underlying issues.</li>
            </ul>
          </div>
        </div>
        <div className="med-con-div">
        <MediaComp/>
        </div>
      </div>
    </div>
  );
}

export default Media;
