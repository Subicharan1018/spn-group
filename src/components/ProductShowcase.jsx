import React, { useRef } from "react";
import { FullScreenScrollFX } from "./ui/FullScreenScrollFX";
import "./ProductShowcase.css";

const sections = [
  {
    leftLabel: "Flagship",
    title: "Aura Veil",
    rightLabel: "Facial Cream",
    background:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1920&h=1080&fit=crop&q=80",
  },
  {
    leftLabel: "Botanical",
    title: "Moss Bloom",
    rightLabel: "Hair Oil",
    background:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=1920&h=1080&fit=crop&q=80",
  },
  {
    leftLabel: "Serum",
    title: "Luminationing Spirum",
    rightLabel: "Skin Enhancer",
    background:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1920&h=1080&fit=crop&q=80",
  },
  {
    leftLabel: "Emulsion",
    title: "Thera Soil",
    rightLabel: "Body Emulsion",
    background:
      "https://images.unsplash.com/photo-1570194065650-d99fb4b38bff?w=1920&h=1080&fit=crop&q=80",
  },
];

const ProductShowcase = () => {
  const apiRef = useRef(null);

  return (
    <div className="product-showcase-wrapper" id="products">
      <div className="product-showcase-intro">
        <p className="product-showcase-label">The Collection</p>
        <h2 className="product-showcase-heading">Our Products</h2>
      </div>

      <FullScreenScrollFX
        sections={sections}
        apiRef={apiRef}
        header={
          <>
            <div
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                fontSize: "clamp(1.5rem, 4vw, 3rem)",
              }}
            >
              SPN Traders
            </div>
            <div
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                opacity: 0.6,
                marginTop: "0.5rem",
              }}
            >
              COLLECTION
            </div>
          </>
        }
        footer={<div />}
        showProgress
        durations={{ change: 0.7, snap: 800 }}
        bgTransition="fade"
        colors={{
          text: "rgba(26,26,26,0.9)",
          overlay: "rgba(255,255,255,0.5)",
          pageBg: "#FAFAF7",
          stageBg: "#F0EDE8",
        }}
      />
    </div>
  );
};

export default ProductShowcase;
