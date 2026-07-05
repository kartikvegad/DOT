import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Database, Server, Smartphone, Cpu, Cloud } from 'lucide-react';
import { SITE_SECTIONS } from '../config/siteSections';
import SectionCTA from './SectionCTA';
import './Sections.css';

export const Process = () => {
    const steps = [
        { num: "01", title: "Discover", desc: "We deep dive into your goals, user needs, and technical constraints." },
        { num: "02", title: "Design", desc: "Blueprint architecture and high-fidelity prototypes." },
        { num: "03", title: "Build", desc: "Agile development with bi-weekly sprints and regular updates." },
        { num: "04", title: "Ship", desc: "Rigorous testing, deployment automation, and launch." },
        { num: "05", title: "Support", desc: "Ongoing maintenance, monitoring, and scaling." }
    ];

    return (
        <section id="process" className="section-padding process-section">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">The Protocol</div>
                    <h2 className="section-title">Process</h2>
                    <p className="section-description">
                        An engineering-led approach to product development, from discovery to long-term scaling.
                    </p>
                </div>

                <div className="process-timeline" aria-label="Project process timeline">
                    <motion.div
                        className="process-timeline-spine"
                        aria-hidden="true"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
                    />
                    {steps.map((step, index) => (
                        <motion.article
                            key={step.num}
                            className="process-journey-step"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.35 }}
                            custom={index}
                            variants={{
                                hidden: { opacity: 0, y: 56 },
                                visible: (i) => ({
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.75,
                                        delay: i * 0.08,
                                        ease: [0.19, 1, 0.22, 1],
                                    },
                                }),
                            }}
                        >
                            <div className="process-journey-marker" aria-hidden="true">
                                <motion.span
                                    className="process-journey-num"
                                    initial={{ scale: 0.88 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                        duration: 0.65,
                                        delay: index * 0.08 + 0.1,
                                        ease: [0.19, 1, 0.22, 1],
                                    }}
                                >
                                    {step.num}
                                </motion.span>
                            </div>

                            <motion.div
                                className="process-journey-content"
                                initial={{ opacity: 0, x: 24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.35 }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.08 + 0.2,
                                    ease: [0.19, 1, 0.22, 1],
                                }}
                            >
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </motion.div>
                        </motion.article>
                    ))}
                </div>

                <SectionCTA label="Kick Off Your Build" />
            </div>
        </section>
    );
};

export const WhyDot = () => {
    const reasons = [
        { title: "Clean Engineering", desc: "Code that is readable, maintainable, and built to last." },
        { title: "Scalable Architecture", desc: "Systems designed to grow with your user base." },
        { title: "Clear Communication", desc: "No jargon. Regular updates. Full transparency." },
        { title: "Long-term Thinking", desc: "We build for the future, not just for launch day." },
        { title: "Attention to Detail", desc: "Micro-interactions and polish that users notice." },
        { title: "Security First", desc: "Modern security practices baked into every layer." }
    ];

    return (
        <section id="why-us" className="section-padding">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Core Values</div>
                    <h2 className="section-title">Why Us?</h2>
                    <p className="section-description">
                        We prioritize quality, clarity, and long-term scalability in every line of code we ship.
                    </p>
                </div>
                <div className="why-grid">
                    {reasons.map((r, i) => (
                        <motion.div
                            key={i}
                            className="why-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <h3>{r.title}</h3>
                            <p>{r.desc}</p>
                        </motion.div>
                    ))}
                </div>
                <SectionCTA label="Work With DOT." />
            </div>
        </section>
    );
};

export const TechStack = () => {
    const stack = [
        { icon: Code, name: "REACT" },
        { icon: Server, name: "NODE" },
        { icon: Database, name: "POSTGRES" },
        { icon: Smartphone, name: "MOBILE" },
        { icon: Cpu, name: "TYPESCRIPT" },
        { icon: Cloud, name: "AWS" },
    ];

    return (
        <section id="stack" className="section-padding stack-section">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Infrastructure</div>
                    <h2 className="section-title">Stack</h2>
                    <p className="section-description">
                        We use a battle-tested tech stack optimized for performance, security, and developer velocity.
                    </p>
                </div>
                <div className="stack-badges">
                    {stack.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.name}
                                className="stack-badge-wrap"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.19, 1, 0.22, 1] }}
                            >
                                <div className="stack-badge">
                                    <Icon className="stack-icon" size={30} strokeWidth={1.25} />
                                    <span className="stack-badge-label">{item.name}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
                <SectionCTA label="Let's Talk Tech" />
            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo-link">
                        <svg
                            width="80"
                            height="32"
                            viewBox="0 0 1371 531"
                            fill="none"
                            className="footer-logo-svg"
                        >
                            <path d="M383.453 90.0998H384.907V429.791L283.908 429.611V530.426H101.165H0V0.609673H86.2694H183.635V0.363306L183.999 0H279.548V0.363306L279.911 0L281.001 1.08992H283.908V3.63306L383.453 90.0998ZM283.908 137.33L243.217 102.089H101.165V429.611H283.908V137.33Z" fill="currentColor" />
                            <path d="M522.6 134.786L523 429.595H422.013L422 88.6097L526.804 0.611328H706V98.6092L564.38 98.4558L522.6 134.786ZM806 424.609L716 530.611L522.756 530.502L523 429.595L669 429.611L706 387.609V98.6092H806V424.609Z" fill="currentColor" />
                            <path d="M1022 0.611328V98.6113H843V0.611328H1022ZM1193 0.611328H1371V103.61H1193V0.611328ZM1022 118.438L1122.42 117.711V530.61H1022V118.438ZM1022 118.438L1126.41 26.8846L1193 103.61L1122.42 164.214V117.711L1022 118.438Z" fill="currentColor" />
                            <path className="footer-logo-dot" d="M1268 427.61H1371V530.61H1268V427.61Z" />
                        </svg>
                        </Link>
                        <p className="footer-tagline">
                            Engineering high-performance digital products with precision and purpose.
                        </p>
                    </div>

                    <div className="footer-grid">
                        <div className="footer-col">
                            <h4>Navigator</h4>
                            <ul>
                                <li><Link to="/#services">SERVICES</Link></li>
                                {SITE_SECTIONS.showPricing && <li><Link to="/#pricing">PRICING</Link></li>}
                                {SITE_SECTIONS.showTestimonials && <li><Link to="/#reviews">REVIEWS</Link></li>}
                                <li><Link to="/#work">PORTFOLIO</Link></li>
                                <li><Link to="/#process">PROCESS</Link></li>
                                <li><Link to="/#why-us">WHY US?</Link></li>
                                {SITE_SECTIONS.showTeam ? (
                                    <li><Link to="/#team">TEAM</Link></li>
                                ) : (
                                    <li><Link to="/#about">ABOUT US</Link></li>
                                )}
                                <li><Link to="/contact">CONTACT</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Connect</h4>
                            <ul>
                                <li><a href="https://www.linkedin.com/company/dot-kv">LINKEDIN</a></li>
                                <li><a href="#">INSTAGRAM</a></li>
                                <li><a href="#">TWITTER</a></li>
                                <li><a href="#">GITHUB</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="footer-bottom">
                    <div className="copyright">
                        <span>&copy; {new Date().getFullYear()} DOT. ALL RIGHTS RESERVED.</span>
                        <span className="version">V.2.1.0</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
