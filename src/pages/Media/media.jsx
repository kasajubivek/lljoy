import React, { useState, useEffect, useContext } from 'react';
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
import faruqi from '../../assets/faruqi.JPG'
import { useParams } from 'react-router-dom';
import CardContext from '../../contexts/CardContext';

const Media = () => {
  const { id } = useParams();
  const cardId = parseInt(id);
  const { pathname } = useLocation();
  const { cards, cardsTwo } = useContext(CardContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  const selectedCard = cards.find(card => card.id === cardId);
  const selectedCardTwo = cardsTwo.find(card => card.id === cardId);


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
            <img src={selectedCard.image} alt="Description" className="med-column-image" />
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
            <img src={selectedCard.image} alt="Description" className="med-column-image" />
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
            <img src={selectedCard.image} alt="Description" className="med-column-image" />
            {/* <h2>Overview</h2> */}
            <p>
            Dr. Pervez Faruqi (Photo courtesy of Chatham-Kent Health Alliance)
            </p>
          </div>

        </div>

        {/* Content Rows */}
        <div className="med-row med-one-column">
          <div className="med-column">
          <span>

A high profile doctor in Chatham, who was accused of assaulting his wife, has had his charges dropped.<br/><br/>

Dr. Pervez Faruqi's case was resolved with a peace bond in Chatham court on Tuesday. Dr. Faruqi, through his lawyer Laura Joy, promised to keep the peace for 12 months and to follow certain court conditions.<br/><br/>

The 59-year-old is to have no communication with his wife, is to keep away from her and her residence, and is under a weapons ban.<br/><br/>

A peace bond is a court order that requires another person to “keep the peace and be of good behaviour” and obey conditions, such as not to contact the complainant or to come near their property.<br/><br/>

The person who enters into a peace bond does not receive a criminal record. However, if one of the conditions imposed is breached, the person may be charged with a criminal offence.<br/><br/>

Joy told the court entering into a peace bond is "no admission of any wrongdoing."<br/><br/>

The court heard Faruqi had an argument with his wife over work keys.<br/><br/>

Faruqi was charged with an assault that was alleged to have occured on or about August 16, 2023, and assault described as choking, suffocating or strangling between January 1, 2023 and January 16, 2023.<br/><br/>

The charges were laid on August 30, 2023 in Chatham, according to the College of Physicians and Surgeons of Ontario.<br/><br/>

Dr. Faruqi has been married for 21 years and has three children.<br/><br/>

Dr. Faruqi was Chief of Medical Staff at Chatham-Kent Health Alliance (CKHA), but has been on leave since January 2024.<br/><br/>

CKHA previously said that Dr. Faruqi did not lose his hospital privileges and would continue working as a Paediatrician at CKHA.<br/><br/>
</span>

          </div>
        </div>
          </>
        )}

{selectedCardTwo && selectedCardTwo.id === 4 && (
          <>
          <div className="med-hero-image">
            {/* <img src={selectedCard.image} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', objectPosition: '0% 45%'}}/> */}
            <h1>{selectedCardTwo.title}</h1>
          </div>

          <div className="med-row med-one-column">
          <div className="med-column">
            <img src={selectedCardTwo.image} alt="Description" className="med-column-image" />
            {/* <h2>Overview</h2> */}
            <p>
            Tammy Hands, left, hugs with David Bondy and lawyer Laura Joy at Superior Court after being found not guilty of extortion and voyeurism Monday June 02, 2014. (NICK BRANCACCIO/The Windsor Star)
            </p>
          </div>

        </div>

        {/* Content Rows */}
        <div className="med-row med-one-column">
          <div className="med-column">
          <span>

          A man and woman accused of using sex tapes to extort $25,000 from a local doctor were acquitted of all charges Monday.<br/><br/>

Tammy Hands, 49, and David Andrew Bondy, 46, never took the witness stand at their trial. But the doctor who claimed he was their victim did, and presented as an “unreliable” witness with too many inconsistencies in his testimony to warrant a conviction, Superior Court Justice Lynda Templeton ruled.<br/><br/>

Hands and Bondy were charged with extortion stemming from a Jan. 25, 2009 meeting with the doctor at his Tecumseh clinic. The doctor said Bondy claimed to be a private investigator named Doug Sittle hired by the doctor’s wife.<br/><br/>

At the meeting, Bondy had with him a DVD of recordings of Hands and the doctor having sex. Hands had recorded her trysts with the doctor using her cellphone.<br/><br/>

She stood trial on the additional charge of voyeurism.<br/><br/>

But Templeton, having reviewed the videos, said she could not be sure the doctor hadn’t consented to the recordings.<br/><br/>
</span>

          </div>
          </div>
          <div className="med-row med-one-column">
          <div className="med-column">
            <img src={selectedCardTwo.imageTwo} alt="Description" className="med-column-image" />
            {/* <h2>Overview</h2> */}
            <p>
            Tammy Hands, left, hugs with David Bondy and lawyer Laura Joy at Superior Court after being found not guilty of extortion and voyeurism Monday June 02, 2014. (NICK BRANCACCIO/The Windsor Star)
            </p>
          </div>

        </div>
        <div className="med-row med-one-column">
          <div className="med-column">
          <span>

The defence insisted the doctor preyed on Hands, who was his tenant and emotionally and financially vulnerable. With Bondy’s help, she used the videos to try to get the doctor to leave her alone by threatening to bring their affair to the attention of the licensing body for doctors in Ontario.<br/><br/>

The doctor had treated Hands on occasion. The doctor insisted, however, that Hands was not his patient.<br/><br/>

That, said the judge, was not up to her to decide.<br/><br/>

The defence theory at trial was that the doctor concocted the extortion tale to protect his licence.<br/><br/>
</span>

          </div>
        </div>
          </>
        )}

{selectedCardTwo && selectedCardTwo.id === 5 && (
          <>
          <div className="med-hero-image">
            {/* <img src={selectedCard.image} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', objectPosition: '0% 45%'}}/> */}
            <h1>{selectedCardTwo.title}</h1>
          </div>

          <div className="med-row med-one-column">
          <div className="med-column">
            <img src={selectedCardTwo.image} alt="Description" className="med-column-image" />
            {/* <h2>Overview</h2> */}
            <p>
            Diana Al-Masalkhi, right, is shown Aug. 6, 2015, with her trial lawyer Laura Joy at the Superior Court building in downtown Windsor. Photo by Tyler Brownbridge /Windsor Star
            </p>
          </div>

        </div>

        {/* Content Rows */}
        <div className="med-row med-one-column">
          <div className="med-column">
          <span>

          A legal assistant caught up in an RCMP sting and years of subsequent criminal proceedings that ended in the conviction of her immigration lawyer boss has had her $2-million “malicious prosecution” civil suit rejected by the courts.<br/><br/>

“It is abundantly clear the reasonable and probable grounds existed for the arrest of the plaintiff,” Superior Court regional senior Justice Bruce Thomas wrote in a 17-page ruling released Oct. 17 that dismisses the claim.<br/><br/>

Diana Al-Masalkhi was arrested in March 2012 with identical charges to her employer, Sandra Saccucci Zaher, of having fabricated a refugee claim. After lengthy legal proceedings, Al-Masalkhi was exonerated in July 2016. Zaher was convicted and sentenced in 2017 to a year in jail. A subsequent appeal failed earlier this year.<br/><br/>

“Having this hang over her head for as long as it has and having to go to court and defend these types of very serious significant charges has been very hard on her,” Al-Masalkhi’s lawyer Laura Joy told the Star after the 2016 decision.<br/><br/>

Arguing negligent investigation and wrongful arrest by the police authorities, as well as malicious prosecution by the Crown, Al-Masalkhi filed a civil suit against the Attorney General of Canada, claiming $2 million in general and special damages.<br/><br/>
</span>

          </div>
          </div>
          <div className="med-row med-one-column">
          <div className="med-column">
            <img src={selectedCardTwo.imageTwo} alt="Description" className="med-column-image" />
            {/* <h2>Overview</h2> */}
            <p>
            Tammy Hands, left, hugs with David Bondy and lawyer Laura Joy at Superior Court after being found not guilty of extortion and voyeurism Monday June 02, 2014. (NICK BRANCACCIO/The Windsor Star)
            </p>
          </div>

        </div>
        <div className="med-row med-one-column">
          <div className="med-column">
          <span>

          Al-Masalkhi’s lawyer in the claim argued before Thomas that his client should never have been charged and that she was only being used by the investigators to assist them in securing Zaher’s conviction. In their sting, the RCMP used undercover police officers posing as a refugee claimant feigning a poor grasp of English and an acquaintance helping to translate, and investigators also intercepted communications.<br/><br/>

Following the original 26-day trial, Superior Court Justice Renee Pomerance concluded that, although “some of (her) statements had a potentially incriminating character … (there was) reasonable doubt as to the complicity of Ms. Al-Masalkhi.” The trial judge ruled that the Crown had failed to prove that Al-Masalkhi had knowledge that her employer was preparing a false claim for a client.<br/><br/>

In his ruling released Oct. 17, however, Thomas said that “ultimate acquittal does not affect the sound reasoning applied by investigators regarding her complicity in the fraudulent claim for refugee protection.”<br/><br/>
</span>

          </div>
        </div>
          </>
        )}


{selectedCardTwo && selectedCardTwo.id === 6 && (
          <>
          <div className="med-hero-image">
            {/* <img src={selectedCard.image} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', objectPosition: '0% 45%'}}/> */}
            <h1>{selectedCardTwo.title}</h1>
          </div>

          <div className="med-row med-one-column">
          <div className="med-column">
            <img src={selectedCardTwo.image} alt="Description" className="med-column-image" />
            {/* <h2>Overview</h2> */}
            <p>
            File photo of Francesco Vella at his new Walkerville pharmacy on January 15, 2009. (Windsor Star - Tyler Brownbridge)
            </p>
          </div>

        </div>

        {/* Content Rows */}
        <div className="med-row med-one-column">
          <div className="med-column">
          <span>

          Pharmacist Francesco Vella was found not guilty Wednesday of sexual assault.<br/><br/>

Ontario Court Justice Gregory Campbell said he did not find some of the complainant’s testimony credible.<br/><br/>

Campbell said, for instance, that he did not believe the complainant’s suggestion that she did not know that a civil suit of almost $2 million was launched on her behalf against Vella.<br/><br/>

The judge also questioned the timing of the civil suit, filed in the 24th month after the alleged incident, which has a two-year limit to be launched — and after the complainant thought she had finished her testimony. She was later called back to the stand.<br/><br/>

The complainant, a 21-year-old pharmacy intern when she claimed the offence took place, was not in court for the ruling.<br/><br/>

“I remain uncertain about the accused’s guilt,” Campbell said. “The charges are hearby dismissed.”<br/><br/>

The complainant alleged that on the afternoon of Jan. 28, 2010, when she was a college student and the store was open for business, she went downstairs at the Olde Walkerville Pharmacy, where she was working as an intern. She said Vella followed her down and then soon forced himself upon her and made her masturbate him.<br/><br/>

Vella, however, testifed that he went down first and that she followed — corroborated by employee Mary Smyk, who was upstairs at the time — and that she sat with him while they both smoked a cigarette. She returned upstairs less than five minutes later, and soon left the pharmacy to visit her mother in the hospital.<br/><br/>

Smyk said the complainant looked happy when she came back upstairs. The complainant later phoned police.<br/><br/>

Campbell said the complainant sometimes seemed inconsistent with details.<br/><br/>

“It was clear to me that the complainant was prepared to fill in the blanks,” he said.<br/><br/>

Vella, 33, hugged supporters in the courtroom and declined to comment after the verdict was read.<br/><br/>

Defence lawyer Laura Joy said her client has maintained his innocence all along and that he simply wants to return to his work as a pharmacist at the apothecary-style Olde Walkerville Pharmacy.<br/><br/>

“Mr. Vella is very happy today and he just wants to get back to work,” Joy said outside court. “He wants to devote himself to his patients and to Walkerville.<br/><br/>

“This has been very hard on my client. This is a young man who takes his role as a professional very seriously. He is very well liked in the community and his patients think very highly of him.”<br/><br/>
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
