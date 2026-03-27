import React, { useRef } from "react";
import { FullScreenScrollFX } from "./ui/FullScreenScrollFX";
import "./ProductShowcase.css";
import glassCulletImg from "../assets/glasscullet.jpeg";
import metalScrapImg from "../assets/MetalScrap.jpg";

const sections = [
  {
    leftLabel: "Industrial",
    title: "Glass Cullet",
    rightLabel: "Recycled Grade",
    background: glassCulletImg,
  },
  {
    leftLabel: "Heavy Duty",
    title: "Metal Scrap",
    rightLabel: "Ferrous & Non-Ferrous",
    background: metalScrapImg,
  },
  {
    leftLabel: "Packaging",
    title: "Kraft Paper",
    rightLabel: "Industrial Strength",
    background:
      "https://shreevarudi.com/uploads/media/o_1gpk29g9vf341t42cen1aik158ta.jpg",
  },
  {
    leftLabel: "Circular",
    title: "Industrial Plastics",
    rightLabel: "Polymer Material",
    background:
      "https://cdn.timesofabetterindia.com/uploads/inspiring-stories/f-P3FlhJ94F68X3ufh8kS4uRD18aim6h-metaSW5saW5lIGltYWdlIDEwMDAgeCA3NTAgcHguanBn-.jpg",
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
