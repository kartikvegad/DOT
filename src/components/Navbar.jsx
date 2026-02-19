import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isDark, setIsDark] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        // Check for saved theme preference or default to dark
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setIsDark(savedTheme === 'dark');
        document.documentElement.setAttribute('data-theme', savedTheme);

        // Handle scroll and active section
        const handleScroll = () => {
            const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
            setIsVisible(scrollPos > 100);

            // Active section detection
            const sections = ['services', 'pricing', 'reviews', 'work', 'process', 'why-dot', 'stack', 'team'];
            let current = '';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        current = section;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        setIsDark(!isDark);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScrollTo = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 40; // Navbar height + minimal gap
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${isVisible ? 'visible' : ''}`}>
            <div className="nav-container">
                <div className="brand-wrapper">
                    <svg
                        width="60"
                        height="24"
                        viewBox="0 0 1371 531"
                        fill="none"
                        className="dot-logo"
                        onClick={(e) => handleScrollTo(e, 'hero')}
                        style={{ cursor: 'pointer' }}
                    >
                        <path d="M383.453 90.0998H384.907V429.791L283.908 429.611V530.426H101.165H0V0.609673H86.2694H183.635V0.363306L183.999 0H279.548V0.363306L279.911 0L281.001 1.08992H283.908V3.63306L383.453 90.0998ZM283.908 137.33L243.217 102.089H101.165V429.611H283.908V137.33Z" fill="currentColor" />
                        <path d="M522.6 134.786L523 429.595H422.013L422 88.6097L526.804 0.611328H706V98.6092L564.38 98.4558L522.6 134.786ZM806 424.609L716 530.611L522.756 530.502L523 429.595L669 429.611L706 387.609V98.6092H806V424.609Z" fill="currentColor" />
                        <path d="M1022 0.611328V98.6113H843V0.611328H1022ZM1193 0.611328H1371V103.61H1193V0.611328ZM1022 118.438L1122.42 117.711V530.61H1022V118.438ZM1022 118.438L1126.41 26.8846L1193 103.61L1122.42 164.214V117.711L1022 118.438Z" fill="currentColor" />
                        <path d="M1268 427.61H1371V530.61H1268V427.61Z" fill="#ff4400" />
                    </svg>
                </div>

                <div className="nav-right-group">
                    <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                        <a href="#services" className={`nav-item ${activeSection === 'services' ? 'active' : ''}`} onClick={(e) => handleScrollTo(e, 'services')}>Services</a>
                        <a href="#pricing" className={`nav-item ${activeSection === 'pricing' ? 'active' : ''}`} onClick={(e) => handleScrollTo(e, 'pricing')}>Pricing</a>
                        <a href="#reviews" className={`nav-item ${activeSection === 'reviews' ? 'active' : ''}`} onClick={(e) => handleScrollTo(e, 'reviews')}>Reviews</a>
                        <a href="#work" className={`nav-item ${activeSection === 'work' ? 'active' : ''}`} onClick={(e) => handleScrollTo(e, 'work')}>Portfolio</a>
                        <a href="#process" className={`nav-item ${activeSection === 'process' ? 'active' : ''}`} onClick={(e) => handleScrollTo(e, 'process')}>Process</a>
                        <a href="#why-dot" className={`nav-item ${activeSection === 'why-dot' ? 'active' : ''}`} onClick={(e) => handleScrollTo(e, 'why-dot')}>Why Dot</a>
                        <a href="#stack" className={`nav-item ${activeSection === 'stack' ? 'active' : ''}`} onClick={(e) => handleScrollTo(e, 'stack')}>Stack</a>
                        <a href="#team" className={`nav-item ${activeSection === 'team' ? 'active' : ''}`} onClick={(e) => handleScrollTo(e, 'team')}>Team</a>
                        <a href="#contact" className="nav-item contact-btn" onClick={(e) => handleScrollTo(e, 'contact')}>Start Project</a>
                    </div>

                    <div className="nav-actions">
                        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={isDark ? 'moon' : 'sun'}
                                    initial={{ rotate: -180, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 180, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    style={{ display: 'flex' }}
                                >
                                    {isDark ? <Moon size={18} className="theme-icon" /> : <Sun size={18} className="theme-icon" />}
                                </motion.div>
                            </AnimatePresence>
                        </button>
                        <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
