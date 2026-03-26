import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import "./HeroSection.css";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(".hero-badge", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          ".hero-brand",
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          ".hero-tagline",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to(
          ".hero-description",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          ".hero-cta",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          ".hero-divider",
          {
            opacity: 1,
            scaleY: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(
          ".hero-scroll-hint",
          {
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        );

      // Set initial states
      gsap.set(
        [
          ".hero-badge",
          ".hero-brand",
          ".hero-tagline",
          ".hero-description",
          ".hero-cta",
        ],
        { y: 30 }
      );
      gsap.set(".hero-divider", { scaleY: 0 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" id="home" ref={sectionRef}>
      <div className="hero-inner">
        <div className="hero-badge">✦ Digital Awareness</div>
        <h1 className="hero-brand">SPN Traders</h1>
        <p className="hero-tagline">
          From The Sacred Soil of Arca
        </p>
        <p className="hero-description">
          Where ancient volcanic minerals meet modern beauty science.
          Premium skincare crafted from the purest elements nature has
          refined over millennia.
        </p>
        <a href="#products" className="hero-cta">
          Explore Collection
          <ArrowRight size={16} />
        </a>
        <div className="hero-divider" />
        <p className="hero-scroll-hint">Scroll to discover</p>
      </div>
    </section>
  );
};

export default HeroSection;
