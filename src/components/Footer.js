import React from "react";
import LogoFooter from "../assets/logoFooter2.png";
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
          <a
            className="socialIcon"
            href="https://twitter.com/your_twitter_account"
          >
            <FaTwitter size={32} />
          </a>
          <a
            className="socialIcon"
            href="https://www.facebook.com/your_facebook_page"
          >
            <FaFacebook size={32} />
          </a>
          <a
            className="socialIcon"
            href="https://www.instagram.com/your_instagram_account"
          >
            <IoLogoInstagram size={32} />
          </a>
        </div>
      </div>
      <div className="contactInfo">
        <h2>Contact Us</h2>
        <p>Address: 456 Oak Avenue, Sunnyville, CA 98765</p>
        <p>Phone: (555) 789-0123</p>
        <p>Email: contact@littlelemonrestaurant.com</p>
        <p>Website: www.littlelemonrestaurant.com</p>
        <p>Opening Hours: Monday to Saturday, 11:00 AM to 10:00 PM</p>
      </div>
      <div className="usefulLinks">
        <h2>Useful Links</h2>
        <ul>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/booking">Booking</a>
          </li>
          <li>
            <a href="/order-online">Order online</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
