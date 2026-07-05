import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Globe, Smartphone, Database, Code2, Zap } from 'lucide-react';
import SectionCTA from './SectionCTA';
import './Services.css';

const services = [
    {
        title: "Web Development",
        desc: "Custom websites built with modern standards, focusing on performance, SEO, and clean architecture that scales with your business.",
        icon: Globe,
        tags: ["React", "Next.js", "SEO"],
    },
    {
        title: "Full Stack Apps",
        desc: "End-to-end solutions for complex products — from database design and APIs to frontend polish and reliable deployment pipelines.",
        icon: Layers,
        tags: ["Node.js", "PostgreSQL", "APIs"],
    },
    {
        title: "Mobile & Responsive",
        desc: "Seamless experiences across all devices and screen sizes, with touch-friendly interfaces and fluid layouts that feel native everywhere.",
        icon: Smartphone,
        tags: ["Responsive", "PWA", "Touch UI"],
    },
    {
        title: "Backend Architecture",
        desc: "Robust APIs, scalable databases, and secure authentication systems built to handle growth without compromising reliability.",
        icon: Database,
        tags: ["REST", "Auth", "Scalable DB"],
    },
    {
        title: "UI/UX Implementation",
        desc: "Translating sophisticated designs into pixel-perfect, interactive reality — with motion, responsiveness, and craftsmanship in every detail.",
        icon: Code2,
        tags: ["Figma", "Motion", "CSS"],
    },
    {
        title: "Performance & Scaling",
        desc: "Optimization for speed, load times, and high-traffic reliability through caching, CDN strategy, and continuous performance monitoring.",
        icon: Zap,
        tags: ["CDN", "Caching", "Core Vitals"],
    },
];

const Services = () => {
    return (
        <section id="services" className="services-section section-padding">
            <div className="services-container">
                <div className="section-header">
                    <div className="section-label">What We Do</div>
                    <h2 className="section-title">Services</h2>
                    <p className="section-description">
                        We specialize in building scalable web applications with cutting-edge technology and engineering best practices.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const indexLabel = String(index + 1).padStart(2, '0');

                        return (
                            <motion.div
                                key={service.title}
                                className="service-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <span className="service-index" aria-hidden="true">{indexLabel}</span>
                                <div className="service-body">
                                    <div className="service-icon">
                                        <Icon size={26} strokeWidth={1.5} />
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                    <div className="service-tags">
                                        {service.tags.map((tag) => (
                                            <span key={tag} className="service-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
                <SectionCTA label="Discuss Your Project" />
            </div>
        </section>
    );
};

export default Services;
