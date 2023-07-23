import React from "react";
import LogoFooter from "../assets/logoFooter.png";
import "../styles/Footer.css";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="leftContent">
        <img
          src={LogoFooter}
          alt="Little Lemon Restaurant"
          className="logoFooter"
        />
        <p className="socialText">Follow us on social media:</p>
        <div className="socialMedia">
          <a href="https://twitter.com/your_twitter_account">
            <FaTwitter size={32} />
          </a>
          <a href="https://www.facebook.com/your_facebook_page">
            <FaFacebook size={32} />
          </a>
          <a href="https://www.instagram.com/your_instagram_account">
            <IoLogoInstagram size={32} />
          </a>
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
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          {/* Add more useful links here */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
