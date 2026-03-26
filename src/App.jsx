// App.jsx — SPN Traders Digital Awareness Platform
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './App.css';
import { SpiralAnimation } from './components/ui/SpiralAnimation';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MaterialsSection from './components/MaterialsSection';
import OriginSection from './components/OriginSection';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';

function App() {
  const [entered, setEntered] = useState(false);
  const [startVisible, setStartVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    // Fade out the splash UI and reveal the main content
    gsap.to('.splash-ui', {
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        setEntered(true);
        window.scrollTo(0, 0); // Ensure started at top
      }
    });

    // Make content fade in slightly
    gsap.fromTo(
      '.app-content',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.5 }
    );
  };

  return (
    <div className="App">
      {/* Spiral Animation Background — Always playing, acts as both splash bg and site bg */}
      <div className="spiral-bg-fixed">
        <SpiralAnimation lightMode={true} />
      </div>

      {/* Splash Screen UI */}
      {!entered && (
        <div className="splash-ui">
          <button
            onClick={handleEnter}
            className={`splash-enter-btn ${startVisible ? 'visible' : ''}`}
          >
            Enter
          </button>
        </div>
      )}

      {/* Main Content */}
      <div
        className="app-content"
        style={{
          visibility: entered ? 'visible' : 'hidden',
          opacity: entered ? 1 : 0,
        }}
      >
        <Header />
        <HeroSection />
        <MaterialsSection />
        <OriginSection />
        <ProductShowcase />
        <Footer />
      </div>
    </div>
  );
}

export default App;