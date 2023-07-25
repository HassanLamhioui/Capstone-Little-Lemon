import React from "react";
import lemonImage from "../assets/Lemons-About-BG.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Little Lemon Restaurant</h1>
      <img
        src={lemonImage}
        alt="Little Lemon Restaurant"
        className="about-image"
      />
      <p className="about-text">
        Welcome to Little Lemon Restaurant! We are passionate about serving
        delicious and fresh food to our customers. Our mission is to provide a
        delightful dining experience in a cozy and friendly atmosphere.
      </p>
      <p className="about-text">
        Our chefs are dedicated to using the finest ingredients, sourced locally
        whenever possible, to create mouthwatering dishes that will satisfy your
        taste buds.
      </p>
      <p className="about-text">
        Whether you're looking for a quick lunch, a romantic dinner for two, or
        a family gathering, Little Lemon Restaurant has something to offer for
        everyone. Come and enjoy our delightful menu, including a wide variety
        of appetizers, entrees, and delectable desserts.
      </p>
      <p className="about-text about-last-paragraph">
        We look forward to welcoming you to our restaurant and making your
        dining experience memorable.
      </p>
      <p className="about-text">Enjoy your experience with us!</p>
    </div>
  );
};

export default About;
