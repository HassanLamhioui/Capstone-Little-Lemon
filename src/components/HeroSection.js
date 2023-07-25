import React from 'react';
import '../styles/HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-section-background">
      <div className="hero-section-container">
        <div className="section-left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to="/booking">
            <button className="btn" aria-label="Reserve a Table">
              Reserve a Table
            </button>
          </Link>
        </div>
        <div className="section-right">
          <div className="image-box" role="img" aria-label="Restaurant Image"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
