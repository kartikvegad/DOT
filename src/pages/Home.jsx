import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Landing from '../components/Landing';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FeaturedWork from '../components/FeaturedWork';
import { Process, WhyDot, TechStack, Footer } from '../components/Sections';
import AboutDot from '../components/AboutDot';
import { scrollToSection } from '../utils/scrollToSection';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return;

        const id = location.hash.replace('#', '');
        const timer = window.setTimeout(() => scrollToSection(id), 100);

        return () => window.clearTimeout(timer);
    }, [location]);

    return (
        <>
            <Landing />
            <Hero />
            <div className="section-divider" />
            <Services />
            <div className="section-divider" />
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
            <Footer />
        </>
    );
};

export default Home;
