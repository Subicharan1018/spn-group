// components/Materials.jsx
import React from 'react';
import './Materials.css';

const Materials = () => {
  return (
    <section className="materials section" id="materials">
      <div className="container">
        <h2 className="section-title">MATERIAL</h2>
        <div className="materials-content">
          <div className="materials-text">
            <p className="materials-description">
              Minerals left by volcanic ash, pure water flowing through layered earth, 
              and wild botanicals nurtured in silence—each element is a product of 
              time and nature's refinement.
            </p>
            <div className="features">
              <div className="feature">
                <span className="feature-icon">🌿</span>
                <span className="feature-text">VEGAN</span>
              </div>
              <div className="feature">
                <span className="feature-icon">💎</span>
                <span className="feature-text">BONE</span>
              </div>
            </div>
          </div>
          <div className="materials-visual">
            <div className="visual-placeholder">
              <span>Materials Visual</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;