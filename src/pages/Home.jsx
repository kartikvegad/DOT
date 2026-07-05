import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Landing from '../components/Landing';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FeaturedWork from '../components/FeaturedWork';
import { Process, WhyDot, TechStack, Footer } from '../components/Sections';
import Studio from '../components/AboutDot';
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
        <main className="page-flow">
            <Landing />
            <Hero />
            <Services />
            <FeaturedWork />
            <Process />
            <WhyDot />
            <TechStack />
            <Studio />
            <Footer />
        </main>
    );
};

export default Home;
