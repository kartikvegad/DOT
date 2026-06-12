import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedWork from './components/FeaturedWork';
import { Process, WhyDot, TechStack, Footer } from './components/Sections';
import AboutDot from './components/AboutDot';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
// Re-enable hidden sections: set flags in config/siteSections.js, then uncomment imports + JSX blocks below
// import Pricing from './components/Pricing';
// import Testimonials from './components/Testimonials';
// import WhyChooseDot from './components/WhyChooseDot';
// import Team from './components/Team';
// import { SITE_SECTIONS } from './config/siteSections';
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

      {/* Pricing (hidden) — uncomment to restore
      {SITE_SECTIONS.showPricing && (
        <>
          <Pricing />
          <div className="section-divider" />
        </>
      )}
      */}

      {/* Testimonials / WhyChooseDot (hidden) — uncomment to restore
      {SITE_SECTIONS.showTestimonials ? (
        <>
          <Testimonials />
          <div className="section-divider" />
        </>
      ) : SITE_SECTIONS.showWhyChooseDot ? (
        <>
          <WhyChooseDot />
          <div className="section-divider" />
        </>
      ) : null}
      */}

      <FeaturedWork />
      <div className="section-divider" />
      <Process />
      <div className="section-divider" />
      <WhyDot />
      <div className="section-divider" />
      <TechStack />
      <div className="section-divider" />

      <AboutDot />
      <div className="section-divider" />

      {/* Team (hidden) — swap AboutDot for Team when restoring
      {SITE_SECTIONS.showTeam ? (
        <>
          <Team />
          <div className="section-divider" />
        </>
      ) : (
        <>
          <AboutDot />
          <div className="section-divider" />
        </>
      )}
      */}

      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
