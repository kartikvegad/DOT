import React from 'react';
import { ArrowRight } from 'lucide-react';

const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        const offset = 64;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const offsetPosition = elementRect - bodyRect - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    }
};

const SectionCTA = ({ label = 'Get in Touch', href = 'contact' }) => {
    return (
        <div className="section-cta-wrap">
            <a
                href={`#${href}`}
                className="section-cta"
                onClick={(e) => scrollToSection(e, href)}
            >
                {label} <ArrowRight size={18} />
            </a>
        </div>
    );
};

export default SectionCTA;
