import React from 'react';
import { motion } from 'framer-motion';
import SectionCTA from './SectionCTA';
import './AboutDot.css';

const highlights = [
    {
        title: 'Engineering-first studio',
        desc: 'We build high-performance web products with clean code, scalable architecture, and attention to detail.',
    },
    {
        title: 'Design meets development',
        desc: 'From wireframes to deployment, we align visual identity with technical execution so your brand feels cohesive end to end.',
    },
    {
        title: 'Built for real businesses',
        desc: 'We partner with founders and teams who need a trustworthy digital presence — not just a template, but a product that converts.',
    },
    {
        title: 'Custom pricing',
        desc: 'Every project is different. We offer custom pricing for websites based on your scope, timeline, and goals — no one-size-fits-all packages.',
    },
];

const AboutDot = () => {
    return (
        <section id="about" className="section-padding about-dot-section">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Who We Are</div>
                    <h2 className="section-title">ABOUT US</h2>
                    <p className="section-description about-intro">
                        DOT. is a web development studio focused on building polished, performant digital experiences.
                        We help businesses strengthen their online presence through thoughtful design, solid engineering,
                        and a process built on clarity and trust.
                    </p>
                </div>

                <div className="about-grid">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className="about-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
                <SectionCTA label="Reach Out" />
            </div>
        </section>
    );
};

export default AboutDot;
