import React from 'react'
import './footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../assets/lauraJoyLogo.png';
import { HashLink } from 'react-router-hash-link';
import { useEffect } from 'react';

const Footer = () => {

	const scrollWithOffset = (el) => {
		const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
		const yOffset = -80; 
		window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
	  };

  return (
    <>
          <footer className="mainFooter">
  	 <div className="footerContainer">
  	 	<div className="row">
           <div className="footer-col logo-col">
              <img src={logo} alt="Company Logo" className="footer-logo" />
            </div>
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				{/* <li><a href="#">About Us</a></li> */}
  	 				{/* <li><a href="#">Practise Areas</a></li> */}
  	 				<li><HashLink to="/#media" scroll={scrollWithOffset}>Media</HashLink></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Practise Areas</h4>
				   <ul>
					<li><HashLink to="/practiseAreas/#1" scroll={scrollWithOffset}>Sexual Assault</HashLink></li>
					<li><HashLink to="/practiseAreas/#2" scroll={scrollWithOffset}>Impaired Driving/DUI</HashLink></li>
					<li><HashLink to="/practiseAreas/#3" scroll={scrollWithOffset}>Domestic Assault</HashLink></li>
					<li><HashLink to="/practiseAreas/#4" scroll={scrollWithOffset}>Assault</HashLink></li>
					<li><HashLink to="/practiseAreas/#5" scroll={scrollWithOffset}>Uttering Threats</HashLink></li>
					<li><HashLink to="/practiseAreas/#6" scroll={scrollWithOffset}>Mischief</HashLink></li>
					<li><HashLink to="/practiseAreas/#7" scroll={scrollWithOffset}>Criminal Harassment</HashLink></li>
					<li><HashLink to="/practiseAreas/#8" scroll={scrollWithOffset}>Theft</HashLink></li>
    			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>contact us</h4>
  	 			<ul>
                    <li><a href="https://maps.app.goo.gl/tGTVWjHXVNRj2U6t9" target="_blank" rel="noopener noreferrer">1500 Ouellette Ave Suite 101, Windsor, ON N8X 1K7</a></li>
  	 				<li><a href="tel:+15195616237">Phone: (519) 561-6237</a></li>
  	 				<li><a href="mailto:support@laurajoylaw.ca">Email: support@laurajoylaw.ca</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="https://www.facebook.com/profile.php?id=100085925238721&mibextid=LQQJ4d"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				{/* <a href="#"><i className="fab fa-instagram"></i></a> */}
  	 				<a href="https://www.linkedin.com/in/laura-joy-8b1752190/?originalSubdomain=ca"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </>
  )
}

export default Footer