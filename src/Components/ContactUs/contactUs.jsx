import React, { useState, useRef } from 'react';
import './contactUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAddressCard, faEnvelope, faInbox } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

const contactUs = () => {
    const form = useRef();
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const [submitStatus, setSubmitStatus] = useState('');

    const handleFocus = (e) => {
        const { parentNode } = e.target;
        parentNode.classList.add('focus');
        parentNode.classList.add('not-empty');
    };

    const handleBlur = (e) => {
        const { parentNode } = e.target;
        parentNode.classList.remove('focus');
        if (e.target.value === '') {
            parentNode.classList.remove('not-empty');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        emailjs
        .sendForm('service_cc4y9ua', 'template_2b4wvfj', form.current, {
          publicKey: 'wcynNBPoI2AH-OCjR',
        })
        .then(
          () => {
            setSubmitStatus('Your message has been sent successfully!');
            console.log('SUCCESS!');
            setInputs({
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            });
            setTimeout(() => {
                setSubmitStatus('');
            }, 4000);
            form.current.reset(); 
          },
          (error) => {
            setSubmitStatus('Failed to send the message. Please try again later.')
            console.log('FAILED...', error.text);
          },
        );
        console.log('Form submitted:', inputs);
    };

    return (
        <div className="two-column-container" id="contactUs">
          <div className="left-column">
          <div className="left">
                        <div className="form-wrapper">
                            <div className="contact-heading">
                                <h1>Contact Us <span>Now!</span></h1>
                            </div>
                            <form ref={form} onSubmit={sendEmail} className="contact-form">
                                <div className="input-wrap">
                                    <input
                                        className='contact-input'
                                        autoComplete='off'
                                        name="firstName"
                                        type="text"
                                        value={inputs.firstName}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    <label>First Name</label>
                                    <FontAwesomeIcon icon={faAddressCard} className='fontAwesomeIcon' />
                                </div>

                                <div className="input-wrap">
                                    <input
                                        className='contact-input'
                                        autoComplete='off'
                                        name="lastName"
                                        type="text"
                                        value={inputs.lastName}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    <label>Last Name</label>
                                    <FontAwesomeIcon icon={faAddressCard} className='fontAwesomeIcon' />
                                </div>

                                <div className="input-wrap w-100">
                                    <input
                                        className='contact-input'
                                        autoComplete='off'
                                        name="email"
                                        type="text"
                                        value={inputs.email}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    <label>Email</label>
                                    <FontAwesomeIcon icon={faEnvelope} className='fontAwesomeIcon'/>
                                </div>

                                <div className="input-wrap textarea w-100">
                                    <textarea
                                        className='contact-input'
                                        name="message"
                                        autoComplete='off'
                                        value={inputs.message}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        required
                                    ></textarea>
                                    <label>Message</label>
                                    {/* <FontAwesomeIcon icon={faInbox} className='fontAwesomeIcon'/> */}
                                </div>

                                <div className="contact-button">
                                    <input type='submit' value="Send message" className='sendBtn'></input>
                                </div>
                            </form>
                            {submitStatus && (
                            <div className="submit-message">
                               {submitStatus}
                            </div>
                            )}
                        </div>
                    </div>
          </div>
          <div className="right-column">
          <div className="right">
                        <div className="image-wrapper">
                            <div className="contactImage">
                            <div className="map-heading">
                                <h2>Laura Joy Law, <span >Office Location</span></h2>
                            </div>  
                            <iframe
                            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d94431.17549308222!2d-83.10994106853069!3d42.30041520496183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x883b2d1fc0a71c95%3A0x38964b77418b811d!2s1500%20Ouellette%20Ave%20Suite%20101%2C%20Windsor%2C%20ON%20N8X%201K7!3m2!1d42.3004447!2d-83.0275403!5e0!3m2!1sen!2sca!4v1719332480484!5m2!1sen!2sca"
                            className='location'
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                            </div>
                        </div>
                    </div>
          </div>
        </div>
      );
}

export default contactUs