import React from 'react'
import './footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../assets/lauraJoyLogo.png';

const Footer = () => {
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
  	 				<li><a href="#">About Us</a></li>
  	 				{/* <li><a href="#">Practise Areas</a></li> */}
  	 				<li><a href="#">Media</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Practise Areas</h4>
  	 			<ul>
  	 				<li><a href="#">Gun Charges</a></li>
  	 				<li><a href="#">Drug Charges</a></li>
  	 				<li><a href="#">Violent Crime</a></li>
  	 				<li><a href="#">Domestic Violence</a></li>
  	 				<li><a href="#">DUI/Traffic</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>contact us</h4>
  	 			<ul>
                    <li><a href="#">1500 Ouellette Ave Suite 101, Windsor, ON N8X 1K7</a></li>
  	 				<li><a href="#">Phone: (519) 561-6237</a></li>
  	 				<li><a href="#">Email: support@laurajoylaw.ca</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="https://www.facebook.com/profile.php?id=100085925238721&mibextid=LQQJ4d"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
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