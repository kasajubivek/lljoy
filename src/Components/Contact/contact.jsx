import React from 'react'
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const inputs = document.querySelectorAll(".contact-input");

    inputs.forEach((ipt) => {
        ipt.addEventListener("focus", () => {
            ipt.parentNode.classList.add("focus");
            ipt.parentNode.classList.add("not-empty");
        })
// hey
        ipt.addEventListener("blur", () => {
            if(ipt.value == ""){
                ipt.parentNode.classList.remove("not-empty");
            }
            ipt.parentNode.classList.remove("focus");
        })
    })

  return (
    <>
    <main>
        <section className='contact'>
            <div className='contactContainer'>
                <div className="left">
                    <div className="form-wrapper">
                        <div className="contact-heading">
                            <h1>Contact Us <span>Now!</span></h1>
                        </div>
                        <form action="index.html" method="post"className="contact-form">
                            <div className="input-wrap">
                                <input className='contact-input' autoComplete='off' name="First Name" type = "text" required></input>
                                <label>First Name</label>
                                <FontAwesomeIcon icon={faAddressCard} className='fontAwesomeIcon'/>
                            </div>

                            <div className="input-wrap">
                                <input className='contact-input' autoComplete='off' name="Last Name" type = "text" required></input>
                                <label>Last Name</label>
                                <FontAwesomeIcon icon={faAddressCard} className='fontAwesomeIcon' />
                            </div>

                            <div className="input-wrap w-100">
                                <input className='contact-input' autoComplete='off'  name="email" type = "text" required></input>
                                <label>Email</label>
                                <FontAwesomeIcon icon={faEnvelope} className='fontAwesomeIcon'/>
                            </div>

                            <div className="input-wrap textarea w-100">
                                <textarea name="Message" autoComplete='off' className='contact-input' required></textarea>
                                <label>Message</label>
                                <FontAwesomeIcon icon={faInbox} className='fontAwesomeIcon'/>
                            </div>
                            <div className="contact-button">
                                <input type='Submit' value="Send message" className='sendBtn'></input>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="right"></div>
            </div>
        </section>
    </main>
    </>
  )
}

export default Contact