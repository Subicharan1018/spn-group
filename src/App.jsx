// App.jsx — SPN Traders Digital Awareness Platform
import React from 'react';
import './App.css';
import { SpiralAnimation } from './components/ui/SpiralAnimation';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MaterialsSection from './components/MaterialsSection';
import OriginSection from './components/OriginSection';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Spiral Animation Background */}
      <div className="spiral-bg-fixed">
        <SpiralAnimation lightMode={true} />
      </div>

      {/* Content */}
      <div className="app-content">
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