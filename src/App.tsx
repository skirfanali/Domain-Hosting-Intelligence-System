import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <div className="relative z-10">
      <Header />
      <Hero />
      <Features />
      <Footer />
      </div>
    </div>
  );
}

export default App;