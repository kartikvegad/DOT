import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { handleScrollTo } from '../utils/scrollToSection';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                >
                    <div className="hero-label">Web Development Studio</div>

                    <h1 className="hero-title">
                        Code. Ship. Scale.
                    </h1>

                    <p className="hero-subtitle">
                        We build high-performance web applications with precision engineering. <br></br>
                        From concept to deployment, we transform complex requirements into scalable digital products.
                    </p>

                    <div className="hero-cta-group">
                        <Link to="/contact" className="btn-primary" onClick={() => window.scrollTo(0, 0)}>
                            Start a Project <ArrowRight size={18} />
                        </Link>
                        <a href="#work" className="btn-secondary" onClick={(e) => handleScrollTo(e, 'work')}>
                            View Work
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
