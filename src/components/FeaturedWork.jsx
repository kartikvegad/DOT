import React from 'react';
import { motion } from 'framer-motion';
import './FeaturedWork.css';

const FeaturedWork = () => {
    return (
        <section id="work" className="portfolio-section section-padding">
            <div className="portfolio-container">
                <div className="section-header">
                    <div className="section-label">Case Studies</div>
                    <h2 className="section-title">Featured Work</h2>
                    <p className="section-description">
                        We are currently collaborating on several high-stakes projects. Check back soon for our latest technical Case Studies.
                    </p>
                </div>

                <div className="portfolio-grid">
                    {[1, 2].map((i, index) => (
                        <motion.div
                            key={i}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="project-image generic-placeholder">
                                <div className="placeholder-content">
                                    <div className="status-badge">In Development</div>
                                    <span className="project-id">ID: DOT-2026-00{i}</span>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-meta">
                                    <h3 className="project-title">Technical Prototype</h3>
                                </div>
                                <p className="project-description">
                                    Full-stack implementation featuring scalable architecture and modern engineering standards. Details reserved for official release.
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;
