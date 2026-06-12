import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import './ScrollToTop.css';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const isHome = pathname === '/';
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!isHome) {
            setIsVisible(false);
            return;
        }

        const toggleVisibility = () => {
            const servicesSection = document.getElementById('services');
            if (!servicesSection) {
                setIsVisible(false);
                return;
            }

            const rect = servicesSection.getBoundingClientRect();
            setIsVisible(rect.top <= 0);
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        toggleVisibility();

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [isHome]);

    if (!isHome) return null;

    const scrollToHero = () => {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            const offset = 64; // Navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = heroSection.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <button
            className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToHero}
            aria-label="Scroll to Hero"
        >
            <ArrowUp size={20} />
        </button>
    );
};

export default ScrollToTop;
