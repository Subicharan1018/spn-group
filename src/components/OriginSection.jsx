import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mountain } from "lucide-react";
import "./OriginSection.css";

gsap.registerPlugin(ScrollTrigger);

const OriginSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".origin-section",
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(".origin-visual", {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      }).to(
        ".origin-text",
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="origin-section" id="about" ref={sectionRef}>
      <div className="origin-inner">
        <div className="origin-visual">
          <div className="origin-visual-placeholder">
            <Mountain size={48} />
            <span>Industrial Material Hub</span>
          </div>
          <div className="origin-visual-badge">
            Est. 2024 — Modern Material Chain
          </div>
        </div>

        <div className="origin-text">
          <p className="origin-label">Our Mission</p>
          <h2 className="origin-heading">
            Bridging the Gap
            <br />
            in Material Supply
          </h2>
          <p className="origin-description">
            SPN Traders was founded to solve a critical market fragmentation. We connect localized material collectors and small-scale vendors directly with large-scale industrial corporations. 
            By digitizing the material supply chain, we ensure that recycled and raw materials reach their full potential in the modern production cycle.
          </p>
          <blockquote className="origin-quote">
            "Streamlining the connection between localized supply and global industrial demand."
          </blockquote>
          <div className="origin-featured">
            <div className="origin-featured-img">✦</div>
            <div className="origin-featured-info">
              <span className="origin-featured-tag">Service Highlight</span>
              <span className="origin-featured-name">
                B2B Material Procurement
              </span>
              <span className="origin-featured-price">Commercial Logistics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginSection;
