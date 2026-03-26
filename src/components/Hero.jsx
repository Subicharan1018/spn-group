// components/Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-tagline">MOTORHAL</h2>
            <h3 className="hero-title">FROM THE SACRED SOIL OF ARCA</h3>
            <p className="hero-description">
              FOR AFTER AWAKENED THE STRIPER THROUGH A REPUBLIC DANGUARD EITHER...
            </p>
            <a href="#shop" className="btn">EXPLORE COLLECTION</a>
          </div>
          <div className="hero-image">
            {/* This would be your hero image */}
            <div className="image-placeholder">
              <span>Hero Product Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;