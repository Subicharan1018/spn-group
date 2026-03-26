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
            <span>Sacred Soil of Arca</span>
          </div>
          <div className="origin-visual-badge">
            Est. Origin — Arca Region
          </div>
        </div>

        <div className="origin-text">
          <p className="origin-label">Our Story</p>
          <h2 className="origin-heading">
            The Origin
            <br />
            of Clarity
          </h2>
          <p className="origin-description">
            Born from ancient volcanic traces, this fine mineral ash
            purifies the skin and absorbs impurities, helping restore
            its natural balance. Each product carries the legacy of
            geological processes that span millennia.
          </p>
          <blockquote className="origin-quote">
            "Where earth's deepest minerals surface, true beauty is
            found — not manufactured, but revealed."
          </blockquote>
          <div className="origin-featured">
            <div className="origin-featured-img">✦</div>
            <div className="origin-featured-info">
              <span className="origin-featured-tag">Recommend</span>
              <span className="origin-featured-name">
                Aura Veil Facial Cream
              </span>
              <span className="origin-featured-price">Luxury Skincare</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginSection;
