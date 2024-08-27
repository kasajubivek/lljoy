import React, { useState } from 'react';
import './faq.css'; // Import the CSS file

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Can I face life in prison if I’m convicted of sexual assault in Ontario?',
      answer: 'The short answer is yes. Some sexual assault crimes in Ontario are punishable by up to life in prison, depending on the specific sexual assault charge and conviction. Life in prison is not the only possible consequence of a sexual assault conviction. Any conviction and sentence can have irreversible, life-changing effects on a person’s life.',
    },
    {
      question: 'Can I be convicted of domestic violence for making a threat in Ontario?',
      answer:
        'Yes. In Ontario, the law recognizes that domestic violence can extend beyond just physical violence. Merely making threats of violence within a domestic relationship can result in a criminal charge.',
    },
    {
      question: 'What sentences don’t result in a criminal record?',
      answer: 'An accused person may be acquitted after the trial if there is not enough evidence proving the person’s guilt.',
    },
    {
        question: 'Can an accused person get bail during an appeal?',
        answer: 'A bail pending appeal may be requested if the appeal has a reasonable chance of success, if granting bail is not contrary to the public interest, and if the accused agrees to surrender themselves before or on the date of the hearing. Prior to bringing a bail pending appeal motion to court, a separate preliminary motion must first be filed.',
      },
      {
        question: 'If I get arrested, will I only be allowed to make one phone call?',
        answer: 'This is not necessarily true, as the Charter of Rights itself defends and guarantees your right to counsel. You have the right to obtain legal advice and find a good lawyer to represent you and, as long as your attempts to contact one is genuine, you can make as many phone calls as you will need to get a lawyer that you can trust.',
      },
      {
        question: 'Where do the police usually arrest people?',
        answer: 'The police can arrest you anywhere and everywhere you may go. Sometimes they may even arrest you when you are at work or in school. This is a technique that they commonly use to obtain information that they can use against you.',
      },
      {
        question: 'Can I visit my children if I’m on bail for domestic violence?',
        answer: 'You may be able to visit your children if you are on bail for a domestic violence charge. The court always considers what is in the child’s best interest when making decisions about access. When there has been a domestic assault charge, the courts might allow the accused parent visitation but will likely require the parent to meet certain conditions in order to see their children.',
      },
      {
        question: 'What is the minimum sentence for sexual assault in Ontario?',
        answer: 'The crime of sexual assault encompasses a number of actions, ranging from unwanted touching to forced intercourse. The sentences that a judge can impose in a sexual assault case also vary, depending on the seriousness of the offence. Under the Criminal Code, sexual assault is taken seriously, and the law gives judges sentencing guidelines with minimum penalties for those found guilty.',
      },
      {
        question: 'What is a Criminal Charge and why do I have one?',
        answer: 'A criminal charge formally accuses you of committing a crime under the Criminal Code of Canada and marks the start of court proceedings. The court must provide you with details of the allegations so you can prepare a defense for the trial that will determine your guilt or innocence.',
      },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

    <section id="faqs">
    <h1 className="faq-title">Frequently Asked <span className="faq-span" style={{fontFamily: '"Noto Serif", serif', fontWeight: 550, color: 'var(--primaryColor)'}}>Questions</span></h1>
    <div className="accordion-container">
      {faqs.map((faq, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <h3>{faq.question}</h3>
            <span className="accordion-icon">
              {activeIndex === index ? '-' : '+'}
            </span>
          </div>
          <div
            className={`accordion-content ${activeIndex === index ? 'active' : ''}`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
    </section>
    
  
  );
};

export default Faq;
