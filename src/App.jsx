import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import FeaturedWork from './components/FeaturedWork';
import Testimonials from './components/Testimonials';
import { Process, WhyDot, TechStack, Footer } from './components/Sections';
import Team from './components/Team';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {

  useEffect(() => {
    // Theme initialization
    if (!document.documentElement.hasAttribute('data-theme')) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <Landing />
      <Hero />
      <div className="section-divider" />
      <Services />
      <div className="section-divider" />
      <Pricing />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <FeaturedWork />
      <div className="section-divider" />
      <Process />
      <div className="section-divider" />
      <WhyDot />
      <div className="section-divider" />
      <TechStack />
      <div className="section-divider" />
      <Team />
      <div className="section-divider" />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
