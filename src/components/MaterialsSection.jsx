import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, Gem, Droplets } from "lucide-react";
import "./MaterialsSection.css";

gsap.registerPlugin(ScrollTrigger);

const materials = [
  {
    icon: "🌋",
    name: "Volcanic Ash",
    description:
      "Minerals left by ancient eruptions, purifying the skin and absorbing impurities to restore natural balance.",
  },
  {
    icon: "💧",
    name: "Pure Water",
    description:
      "Flowing through layered earth, filtered by centuries of geological refinement into its purest form.",
  },
  {
    icon: "🌿",
    name: "Wild Botanicals",
    description:
      "Nurtured in silence by untouched forests, each botanical is a product of time and nature's care.",
  },
];

const MaterialsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.to(".materials-label", {
        scrollTrigger: {
          trigger: ".materials-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.set(".materials-label", { opacity: 0, y: 20 });

      gsap.to(".materials-heading", {
        scrollTrigger: {
          trigger: ".materials-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.set(".materials-heading", { opacity: 0, y: 30 });

      // Cards stagger
      ScrollTrigger.batch(".material-card", {
        start: "top 85%",
        onEnter: (elements) => {
          gsap.to(elements, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          });
        },
      });

      // Badges
      ScrollTrigger.batch(".materials-badge", {
        start: "top 90%",
        onEnter: (elements) => {
          gsap.to(elements, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="materials-section"
      id="materials"
      ref={sectionRef}
    >
      <div className="materials-inner">
        <p className="materials-label">Our Ingredients</p>
        <h2 className="materials-heading">
          Nature's Most Refined Elements
        </h2>

        <div className="materials-grid">
          {materials.map((mat, i) => (
            <div className="material-card" key={i}>
              <span className="material-icon">{mat.icon}</span>
              <h3 className="material-name">{mat.name}</h3>
              <p className="material-desc">{mat.description}</p>
            </div>
          ))}
        </div>

        <div className="materials-badges">
          <div className="materials-badge">
            <span className="materials-badge-icon">
              <Leaf size={16} />
            </span>
            Vegan
          </div>
          <div className="materials-badge">
            <span className="materials-badge-icon">
              <Gem size={16} />
            </span>
            Mineral-Based
          </div>
          <div className="materials-badge">
            <span className="materials-badge-icon">
              <Droplets size={16} />
            </span>
            Cruelty-Free
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
