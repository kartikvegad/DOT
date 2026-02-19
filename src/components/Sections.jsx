import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Smartphone, Cpu, Cloud } from 'lucide-react';
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
        <section id="process" className="section-padding">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">The Protocol</div>
                    <h2 className="section-title">Process</h2>
                    <p className="section-description">
                        An engineering-led approach to product development, from discovery to long-term scaling.
                    </p>
                </div>
                <div className="process-list">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.num}
                            className="process-step"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <span className="step-num">{step.num}</span>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
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
        <section id="why-dot" className="section-padding">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Core Values</div>
                    <h2 className="section-title">Why Dot</h2>
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
            </div>
        </section>
    );
};

export const TechStack = () => {
    const stack = [
        { icon: <Code className="stack-icon" size={24} />, name: "REACT" },
        { icon: <Server className="stack-icon" size={24} />, name: "NODE" },
        { icon: <Database className="stack-icon" size={24} />, name: "POSTGRES" },
        { icon: <Smartphone className="stack-icon" size={24} />, name: "MOBILE" },
        { icon: <Cpu className="stack-icon" size={24} />, name: "TYPESCRIPT" },
        { icon: <Cloud className="stack-icon" size={24} />, name: "AWS" }
    ];

    return (
        <section id="stack" className="section-padding">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Infrastructure</div>
                    <h2 className="section-title">Stack</h2>
                    <p className="section-description">
                        We use a Battle-tested tech stack optimized for performance, security, and developer velocity.
                    </p>
                </div>
                <div className="stack-grid">
                    {stack.map((item, i) => (
                        <motion.div
                            key={i}
                            className="stack-item"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                        >
                            {item.icon}
                            {item.name}
                        </motion.div>
                    ))}
                </div>
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
                        <svg
                            width="80"
                            height="32"
                            viewBox="0 0 1371 531"
                            fill="none"
                            className="footer-logo-svg"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            style={{ cursor: 'pointer' }}
                        >
                            <path d="M383.453 90.0998H384.907V429.791L283.908 429.611V530.426H101.165H0V0.609673H86.2694H183.635V0.363306L183.999 0H279.548V0.363306L279.911 0L281.001 1.08992H283.908V3.63306L383.453 90.0998ZM283.908 137.33L243.217 102.089H101.165V429.611H283.908V137.33Z" fill="currentColor" />
                            <path d="M522.6 134.786L523 429.595H422.013L422 88.6097L526.804 0.611328H706V98.6092L564.38 98.4558L522.6 134.786ZM806 424.609L716 530.611L522.756 530.502L523 429.595L669 429.611L706 387.609V98.6092H806V424.609Z" fill="currentColor" />
                            <path d="M1022 0.611328V98.6113H843V0.611328H1022ZM1193 0.611328H1371V103.61H1193V0.611328ZM1022 118.438L1122.42 117.711V530.61H1022V118.438ZM1022 118.438L1126.41 26.8846L1193 103.61L1122.42 164.214V117.711L1022 118.438Z" fill="currentColor" />
                            <path d="M1268 427.61H1371V530.61H1268V427.61Z" fill="#ff4400" />
                        </svg>
                        <p className="footer-tagline">
                            Engineering high-performance digital products with precision and purpose.
                        </p>
                    </div>

                    <div className="footer-grid">
                        <div className="footer-col">
                            <h4>Navigator</h4>
                            <ul>
                                <li><a href="#services">SERVICES</a></li>
                                <li><a href="#work">PORTFOLIO</a></li>
                                <li><a href="#process">PROCESS</a></li>
                                <li><a href="#why-dot">WHY DOT</a></li>
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
