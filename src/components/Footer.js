import React from 'react';
import LogoFooter from "../assets/logoFooter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="leftContent">
        <img src={LogoFooter} alt="Little Lemon Restaurant"  className='logoFooter'/>
        <div className="socialMedia">
          {/* Replace the links below with the actual social media links */}
          <a href="https://www.facebook.com/littlelemonrestaurant" target="_blank" rel="noopener noreferrer">
            <img src="facebook_icon" alt="Facebook" className="socialIcon" />
          </a>
          <a href="https://www.instagram.com/littlelemonrestaurant" target="_blank" rel="noopener noreferrer">
            <img src="instagram_icon" alt="Instagram" className="socialIcon" />
          </a>
          <a href="https://www.twitter.com/littlelemonrestaurant" target="_blank" rel="noopener noreferrer">
            <img src="twitter_icon" alt="Twitter" className="socialIcon" />
          </a>
          {/* Add more social media icons as needed */}
        </div>
      </div>
      <div className="contactInfo">
        <h3>Contact Us</h3>
        <p>Address: 123 Main Street, City, State ZIP</p>
        <p>Phone: (555) 123-4567</p>
        <p>Email: info@littlelemonrestaurant.com</p>
        <p>Website: www.littlelemonrestaurant.com</p>
      </div>
      <div className="usefulLinks">
        <h3>Useful Links</h3>
        <ul>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/about">About Us</a></li>
          {/* Add more useful links here */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
