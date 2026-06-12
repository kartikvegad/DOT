import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './ScrollToTop.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                const rect = servicesSection.getBoundingClientRect();
                // Show if Services section has passed the viewport top
                if (rect.top <= 0) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

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
