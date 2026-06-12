import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SectionCTA = ({ label = 'Get in Touch', to = '/contact' }) => {
    const scrollToTop = () => window.scrollTo(0, 0);

    return (
        <div className="section-cta-wrap">
            <Link to={to} className="section-cta" onClick={scrollToTop}>
                {label} <ArrowRight size={18} />
            </Link>
        </div>
    );
};

export default SectionCTA;
