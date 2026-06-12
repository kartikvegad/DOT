import React from 'react';
import { motion } from 'framer-motion';
import { Target, Layers, MessageSquare, Shield, Zap, Handshake } from 'lucide-react';
import './WhyChooseDot.css';

const reasons = [
    {
        icon: <Target size={28} />,
        title: 'Purpose-built solutions',
        desc: 'We tailor every project to your business goals — not generic templates or bloated feature lists.',
    },
    {
        icon: <Layers size={28} />,
        title: 'Design + development in one team',
        desc: 'Visual identity and technical build stay aligned from day one, so your site looks and performs as one product.',
    },
    {
        icon: <MessageSquare size={28} />,
        title: 'Clear, honest communication',
        desc: 'Regular updates, no jargon, and full transparency through discovery, build, and launch.',
    },
    {
        icon: <Shield size={28} />,
        title: 'Trust at first glance',
        desc: 'We focus on hierarchy, spacing, and narrative flow so visitors feel confident in your brand immediately.',
    },
    {
        icon: <Zap size={28} />,
        title: 'Performance-minded builds',
        desc: 'Fast load times, responsive layouts, and scalable foundations that grow with your business.',
    },
    {
        icon: <Handshake size={28} />,
        title: 'Long-term partnership',
        desc: 'We build for maintainability and future updates — not just a one-time handoff.',
    },
];

const WhyChooseDot = () => {
    return (
        <section id="why-choose" className="section-padding why-choose-section">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">The Difference</div>
                    <h2 className="section-title">Why Choose DOT.</h2>
                    <p className="section-description">
                        A studio that treats your website as a business asset — designed to convert, built to last.
                    </p>
                </div>

                <div className="why-choose-grid">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            className="why-choose-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <div className="why-choose-icon">{reason.icon}</div>
                            <h3>{reason.title}</h3>
                            <p>{reason.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseDot;
