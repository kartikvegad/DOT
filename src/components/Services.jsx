import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Globe, Smartphone, Database, Code2, Zap } from 'lucide-react';
import './Services.css';

const services = [
    {
        title: "Web Development",
        desc: "Custom websites built with modern standards, focusing on performance and SEO.",
        icon: <Globe size={32} />
    },
    {
        title: "Full Stack Apps",
        desc: "End-to-end solutions for complex products, from database design to frontend polish.",
        icon: <Layers size={32} />
    },
    {
        title: "Mobile & Responsive",
        desc: "Seamless experiences across all devices and screen sizes.",
        icon: <Smartphone size={32} />
    },
    {
        title: "Backend Architecture",
        desc: "Robust APIs, scalable databases, and secure authentication systems.",
        icon: <Database size={32} />
    },
    {
        title: "UI/UX Implementation",
        desc: "Translating sophisticated designs into pixel-perfect interactive reality.",
        icon: <Code2 size={32} />
    },
    {
        title: "Performance & Scaling",
        desc: "Optimization for speed, load times, and high-traffic reliability.",
        icon: <Zap size={32} />
    }
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
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Services;
