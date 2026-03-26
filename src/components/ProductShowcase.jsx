import React, { useRef } from "react";
import { FullScreenScrollFX } from "./ui/FullScreenScrollFX";
import "./ProductShowcase.css";

const sections = [
  {
    leftLabel: "Industrial",
    title: "Glass Cullet",
    rightLabel: "Recycled Grade",
    background:
      "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=1920&h=1080&fit=crop&q=80",
  },
  {
    leftLabel: "Heavy Duty",
    title: "Metal Scrap",
    rightLabel: "Ferrous & Non-Ferrous",
    background:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1920&h=1080&fit=crop&q=80",
  },
  {
    leftLabel: "Packaging",
    title: "Kraft Paper",
    rightLabel: "Industrial Strength",
    background:
      "https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=1920&h=1080&fit=crop&q=80",
  },
  {
    leftLabel: "Circular",
    title: "Industrial Plastics",
    rightLabel: "Polymer Material",
    background:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1920&h=1080&fit=crop&q=80",
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
