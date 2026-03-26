// components/Origin.jsx
import React from 'react';
import './Origin.css';

const Origin = () => {
  return (
    <section className="origin section">
      <div className="container">
        <div className="origin-content">
          <div className="origin-image">
            <div className="image-placeholder">
              <span>Origin Story Image</span>
            </div>
          </div>
          <div className="origin-text">
            <h2 className="origin-title">THE ORIGIN OF CLARITY</h2>
            <p className="origin-description">
              Born from ancient volcanic traces, this fine mineral ash purifies 
              the skin and absorbs impurities, helping restore its natural balance.
            </p>
            <div className="origin-featured">
              <div className="featured-product">
                <div className="product-tag">RECOMMEND</div>
                <h3 className="product-title">AURA VEIL FACIAL CREAM</h3>
                <p className="product-price">$200,000 USD</p>
                <a href="#shop" className="btn">VISIT MORE →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Origin;