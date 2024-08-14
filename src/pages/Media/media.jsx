import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './media.css';
import newspaper from '../../assets/newspaper.jpg';
import table from '../../assets/table.jpg';
import peace from '../../assets/peace.jpg';
import protest from '../../assets/protest.jpg';
import crowd from '../../assets/crowd.JPG';
import reporter from '../../assets/reporter.jpg';
import gun from '../../assets/guns2.jpg'
import rifle from '../../assets/rifle.jpg'
import MediaComp from '../../Components/Media/media'
import ContactUs from '../../Components/ContactUs/contactUs'
import lauraCourt from '../../assets/lauracourtimage.JPG'
import carcrash from '../../assets/carcrash.jpg'
import denture from '../../assets/denture.jpeg'
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
      id: 1,
      title: 'Defence seeks house arrest for Windsor denturist with 13 sex assault convictions',
      text: 'Weapons charges are more serious than people realize because many carry mandatory minimum prison sentences - sometimes even for 1st offenders...',
      image: rifle
    },
    {
      id: 2,
      title: 'Windsor driver sentenced to house arrest for 2019 crash that killed her brother',
      text: 'There are many types of drug offenses ranging from simple possession to trafficking. Whether the arrest came about because of a suspect traffic stop, hand to hand transaction, or warrant based on a confidential informant...',
      image: table
    },
    {
      id: 3,
      title: "'Shocking breach of trust': Former Windsor denturist sent to jail for sexual assault",
      text: 'There is no more serious charge with than murder where the penalties range from 20 years to life. But most people don’t realize that the penalties for attempt murder are almost as harsh and are increasing being sought by the...',
      image: denture
    },

  ]);

  const selectedCard = cards.find(card => card.id === cardId);


  return (
    <div>
      <div className="med-about-container">


        {selectedCard && selectedCard.id === 1 && (
          <>
          <div className="med-hero-image">
            {/* <img src={selectedCard.image} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', objectPosition: '0% 45%'}}/> */}
            <h1>{selectedCard.title}</h1>
          </div>

          <div className="med-row med-one-column">
          <div className="med-column">
            <img src={lauraCourt} alt="Description" className="med-column-image" />
            {/* <h2>Overview</h2> */}
            <p>
              Criminal defence lawyer Laura Joy and assistant Crown attorney Tim Kavanagh are shown outside the Superior Court of Justice building in downtown Windsor following the sentencing hearing on Monday, Jan. 8, 2024, for former Windsor denturist Mario Mouamer, convicted of the sexual assaults of 10 former patients. Photo by Doug Schmidt /Windsor Star
            </p>
          </div>

        </div>

        {/* Content Rows */}
        <div className="med-row med-one-column">
          <div className="med-column">
            <span>
            Some of the victims of a Windsor denturist convicted of sexually assaulting his patients said that, years later, they still don’t trust men, they still wouldn’t consider being alone with one.
            <br/><br/>Following a lengthy trial, Mario Mouamer, 47, was convicted in November on 13 counts of sexual assault involving 10 different clients ranging in age from 23 to 65 over a four-year period.
            <br/><br/>At a sentencing hearing Monday at Windsor’s Superior Court of Justice, assistant Crown attorney Tim Kavanagh read victim impact statements from four of those women, all describing lives forever changed.
            <br/><br/>One of the victims said she went from being a confident, brave and strong woman to someone now filled with self-doubt who can no longer go out alone at night. She won’t go unaccompanied to any professional appointments, and she said friends now describe her as “an angry person inside.”
            <br/><br/>Justice George King will pronounce a sentence in March, but he described as “extreme” the range of possible penalties presented to him by the prosecution and defence.
            <br/><br/> Kavanagh said the Crown is seeking a 42-month federal prison term, while defence lawyer Laura Joy asked for a conditional sentence to be served at home.
            <br/><br/>The female complainants described how the denturist — who no longer practices his profession — would rub up against their buttocks while standing behind them in front of a mirror inspecting their mouths. Several of the women described Mouamer rubbing his groin against them with an erection.
            <br/><br/>Many of the complainants — who cannot be identified under a court-imposed publication ban — came forward after Mouamer was first arrested and charged by Windsor police in June 2017 and investigators suggested there may be other victims.
            <br/><br/>One of the women who submitted an impact statement to the court described the “humiliation” of court appearances and how “devastating” it was testifying and then being grilled by the defence.
            <br/><br/>The trial was spread out over three years, due in part to the COVID-19 pandemic. Kavanagh cited other court cases in which judges described giving testimony in sexual assault trials as traumatic and painful, leaving complainants feeling humiliated and belittled.
            <br/><br/>Joy said her client has no prior criminal record and that there had been no breaches “while on bail over a very long time.” She presented to the court 20 character reference letters describing Mouamer as a church-going, family man who was a productive member of the community who gave to charity.
            <br/><br/>Mouamer was able to change the conditions of his bail a year ago to be able to move to New Brunswick and take care of his elderly parents, including a mother with cancer. In arguing against incarceration, she said the parents are dependent on their son as a caregiver.
            <br/><br/>Joy said the character letters came from family, friends and fellow church members who knew of his convictions for sexual assault. “He remains very well-liked. This gentleman … is not a danger to the community,” she said.
            <br/><br/>As for future work, Joy added: “He believes that it’s in everybody’s best interest that he not continue to practice as a denturist.”
            <br/><br/>Joy said her client has said he is “very remorseful” if he’s caused the complainants any harm: “The last thing he wanted to do is cause pain.”
            <br/><br/>Given the circumstances surrounding the case, including the vulnerability of the victims he preyed on in a relationship of trust, and the length of time of his criminal conduct, Kavanagh said jail should be “unavoidable and inescapable” for Mouamer.
            <br/><br/>Kavanagh said a pre-sentence report showed the convicted man “doesn’t have any real insight into his behaviour” and the harm he caused.
            <br/><br/>Joy said her client has led a very “pro-social” life and that, punishment aside, news coverage of the case has led to shame and public humiliation.
            <br/><br/>In an unusual move, Mouamer was permitted to participate in this week’s sentencing hearing remotely via Zoom. The judge asked him whether he’d like to address the court.
            <br/><br/>“I am sincerely remorseful,” said Mouamer, who currently lives with his parents in New Brunswick. He vowed to “never be before the criminal courts again” and that he is concerned for his elderly parents.
            </span>
          </div>
        </div>
          </>
        )}



{selectedCard && selectedCard.id === 2 && (
          <>
          <div className="med-hero-image">
            {/* <img src={selectedCard.image} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', objectPosition: '0% 45%'}}/> */}
            <h1>{selectedCard.title}</h1>
          </div>

          <div className="med-row med-one-column">
          <div className="med-column">
            <img src={carcrash} alt="Description" className="med-column-image" />
            {/* <h2>Overview</h2> */}
            <p>
            A vehicle is left heavily damaged after crashing into a building in the city's west end. (AM800 / Gord Bacon)
            </p>
          </div>

        </div>

        {/* Content Rows */}
        <div className="med-row med-one-column">
          <div className="med-column">
            <span>
            A Windsor driver has been sentenced to house arrest for a fatal collision that killed her brother in 2019.<br/>
<br/>Court learned the driver was speeding at 100 kilometres per hour on University Avenue after visiting two downtown Windsor bars on Nov. 11, 2019.<br/>
<br/>Samantha Pollard Ogley, now 31, previously pleaded guilty to dangerous driving causing death in the single-vehicle collision.<br/>
<br/>The Crown Attorney, at the conclusion of Justice Maria Carroccia’s sentencing Thursday, withdrew a charge of impaired driving causing death.<br/>
<br/>Court learned Pollard Ogley’s brother died as a result of the injuries he suffered three months after the collision. He was a passenger in the backseat of the Jeep Liberty.<br/>
<br/>“When you lose your brother and your best friend, to these types of circumstances, it's a very, very difficult situation that she (Pollard Ogley) will live with forever,” Joy said.<br/>
<br/>She acknowledges Pollard Ogley was speeding and running red lights on University Avenue after consuming alcohol at downtown establishments.<br/>
<br/>However, Joy said, there were a number of “issues at play” in the case before the courts.<br/>
<br/>“The road conditions were bad. The weather was bad. She (Pollard Ogley) had just purchased a vehicle that she believed had (passed a safety inspection),” Joy said.<br/>
<br/>According to the Agreed Statement of Facts, police determined two of the tires were “worn down beyond the wear bars”, the universal joint under the Jeep had “extensive wear” and the rear seatbelt detached from the vehicle “as a result of the collision”.<br/>
<br/>Joy also intended to argue her client's rights were breached after Police obtained a blood sample without a warrant.<br/>
<br/>“There also would have been a lost evidence application,” because Joy alleges police failed to properly store the vehicle after it was towed from the scene.<br/>
<br/>On the first day of her trial this past April, Pollard Ogley pleaded guilty to dangerous driving causing death.<br/>
<br/>Joy said her client did not wish to risk the potential sentence of a minimum of three years in prison had she been convicted by Justice Carroccia.<br/>
<br/>“By your actions you lost your brother and I know that’s very difficult for you,” the judge said. “I recognize you have expressed your remorse by pleading guilty to these offences even in light of the challenges the Crown might have had in proving the charges against you.”<br/>
<br/>In addition to agreeing with Joy that the case was difficult, Crown Attorney Charles Yih also told the court two police witnesses have been on medical leave since the 2019 accident and are unavailable for testimony.<br/>
<br/>And, he said a civilian witness’s evidence has changed over time.<br/>
<br/>The Crown and defence made a joint sentencing submission asking for house arrest (also known as a conditional sentence) of two years less a day.<br/>
<br/>Justice Carroccia accepted the submission, ordering Pollard Ogley stay at her home unless for medical, employment or legal reasons. After one year, Pollard Ogley will have an overnight curfew but can leave her home during the day.<br/>
<br/>She cannot drive for the next seven years.<br/>
<br/>Joy says no sentence the court hands to Pollard Ogley can be worse than the punishment of ‘survivors guilt’ that her client suffers every day.<br/>
<br/>Joy concluded the sentence protects the community and sends a message to all drivers.<br/>
<br/>“You can't have a drink and drive. Don't even take that chance. Not worth it.” Joy said.

            </span>
          </div>
        </div>
          </>
        )}


{selectedCard && selectedCard.id === 3 && (
          <>
          <div className="med-hero-image">
            {/* <img src={selectedCard.image} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', objectPosition: '0% 45%'}}/> */}
            <h1>{selectedCard.title}</h1>
          </div>

          <div className="med-row med-one-column">
          <div className="med-column">
            <img src={denture} alt="Description" className="med-column-image" />
            {/* <h2>Overview</h2> */}
            <p>
            Precision-Bite Denture Clinic on Tecumseh Road East in Windsor, Ont., on Wednesday, July 12, 2017. (Alana Hadadean / CTV Windsor).CTV
            </p>
          </div>

        </div>

        {/* Content Rows */}
        <div className="med-row med-one-column">
          <div className="med-column">
          <span>
A former Windsor denturist is being sent to jail for sexual assault.<br/><br/>

Mario Mouamer, 47, was previously convicted of 13 counts of sexual assault against ten former patients.<br/><br/>

Although the prosecutor wanted a prison term of 42 months, Justice King sentenced Mouamer to a term of 15 months in jail.<br/><br/>

"It is clear from the evidence in this case that all of the victims in this case have significant emotional impact as a result of these offences," Justice George King said Wednesday during his sentencing in Superior court.<br/><br/>

During the trial, over 30 days, all ten victims testified about actions by Mouamer during denture fitting appointments.<br/><br/>

Court heard Mouamer would stand behind the patients for a visual inspection.<br/><br/>

"While this was occurring, he would press his groin area into their buttocks," Justice King said Wednesday. "This action was accompanied by a grinding, gyrating or thrusting of his groin area."<br/><br/>

Justice King gave Mouamer credit for being a middle-aged, first-time offender who outside of the offences in the case had lived a pro-social life.<br/><br/>

He also noted the offences did not include any touching underneath clothes or physical penetration.<br/><br/>

The judge however couldn't agree with the defence's request for house arrest given the gravity of the offences, the number of complainants and the need for general deterrence.<br/><br/>

"The dominant element of this case is the shocking breach of trust inherent in the commission of these offences," Justice King said. "Mr. Mouamer took advantage of his position of authority and trust as a denturist to advance his own sexual interests and purposes."<br/><br/>

After the sentence, Mouamer was handcuffed and taken into custody.<br/><br/>

"We of course are disappointed that it's real jail, and we were very hopeful for a conditional sentence," defence lawyer Laura Joy told CTV News outside court. "He has aging parents that he is a primary caregiver for, and as his honor (Justice King) indicated, this is a pro-social, mature individual that had a lot of support in the community."<br/><br/>

During the trial, the court allowed Mouamer to relocate to New Brunswick to care of his parents.<br/><br/>

Joy asked for house arrest - in part - so he could continue to care for his family while serving his sentence.<br/><br/>

She also told CTV News her client will never be a practicing denturist ever again.<br/><br/>

"Mr. Mouamer has ascertained his innocence through this trial," Joy said. "He apologized for any hardship he has caused the complainants. It certainly wasn't his intention."<br/><br/>

Some of the victims were in court for today's sentencing.<br/><br/>

At least one of them scoffed when King sentenced Mouamer to 15 months in jail.<br/><br/>

A court-order publication ban on identifying the victims remains in place permanently, even though the court case is now concluded.<br/>
</span>

          </div>
        </div>
          </>
        )}


        <div className="med-con-div">
          <MediaComp />
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default Media;


        {/* <div className="med-row med-one-column">
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
        </div> */}
