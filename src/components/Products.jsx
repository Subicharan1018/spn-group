// components/Products.jsx
import React from 'react';
import './Products.css';

const products = [
  {
    id: 1,
    name: 'LUMINATIONING SPIRUM & MAROLUD',
    price: 'VERY PRODUCT',
    image: 'product1'
  },
  {
    id: 2,
    name: 'THERA SOIL RODY EMULSION & MAROLUD',
    price: 'VERY PRODUCT',
    image: 'product2'
  },
  {
    id: 3,
    name: 'MOSS BLOOM HAIR OIL & MAROLUD',
    price: 'VERY PRODUCT',
    image: 'product3'
  },
  {
    id: 4,
    name: 'AURA VEIL FACIAL CREAM',
    price: '$220,000 USD',
    image: 'product4'
  }
];

const Products = () => {
  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="products-header">
          <h2 className="section-title">ORLA</h2>
          <div className="recommend-tag">
            <span>RECOMMEND</span>
          </div>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <div className="image-placeholder">
                  <span>Product Image</span>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button className="btn btn-secondary">VIEW PRODUCT</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;