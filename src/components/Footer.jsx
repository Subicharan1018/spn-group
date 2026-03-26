import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <h2 className="footer-brand-name">SPN Traders</h2>
            <p className="footer-brand-desc">
              Awakening the senses through nature's most refined
              elements. A digital awareness platform celebrating the
              art of premium skincare.
            </p>
          </div>

          <div className="footer-col">
            <h3 className="footer-col-title">Discover</h3>
            <a href="#products">Our Products</a>
            <a href="#materials">Ingredients</a>
            <a href="#about">Our Story</a>
            <a href="#home">Philosophy</a>
          </div>

          <div className="footer-col">
            <h3 className="footer-col-title">Company</h3>
            <a href="#about">About Us</a>
            <a href="#about">Mission</a>
            <a href="#about">Sustainability</a>
            <a href="#about">Press</a>
          </div>

          <div className="footer-col">
            <h3 className="footer-col-title">Connect</h3>
            <a href="#contact">Contact</a>
            <a href="#contact">Newsletter</a>
            <a href="#contact">Instagram</a>
            <a href="#contact">LinkedIn</a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <span className="footer-copyright">
            © SPN Traders 2026. All Rights Reserved. Digital
            Awareness Platform.
          </span>
          <div className="footer-legal">
            <a href="#terms">Terms</a>
            <a href="#privacy">Privacy</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;