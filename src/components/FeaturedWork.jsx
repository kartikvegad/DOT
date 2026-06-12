import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import happywindsImage from '../assets/Photos/Projects/ProjectHappywinds.png';
import SectionCTA from './SectionCTA';
import './FeaturedWork.css';

const projects = [
    {
        id: 'happywinds',
        title: 'Happywinds',
        badge: 'Website Redesign',
        image: happywindsImage,
        imageAlt: 'Happywinds logo',
        website: 'https://happywinds.com',
        description:
            'A full website redesign for a logo and branding studio — improving visual hierarchy, brand storytelling, and a trustworthy digital presence.',
    },
];

// Case study details (hidden) — restore for popup or detail page later
// const happywindsCaseStudy = { overview, problem, solution, process, results, ... };

// Hidden placeholder templates — uncomment when adding in-development projects back
// const placeholderProjects = [ ... ];

const FeaturedWork = () => {
    return (
        <section id="work" className="portfolio-section section-padding">
            <div className="portfolio-container">
                <div className="section-header">
                    <div className="section-label">Case Studies</div>
                    <h2 className="section-title">Featured Work</h2>
                    <p className="section-description">
                        Real projects built by DOT. — focused on brand clarity, user experience, and lasting digital presence.
                    </p>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            className="portfolio-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="portfolio-card-logo">
                                <img src={project.image} alt={project.imageAlt} />
                            </div>
                            <span className="portfolio-card-badge">{project.badge}</span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="portfolio-visit-btn"
                            >
                                Visit Website <ArrowUpRight size={16} />
                            </a>
                        </motion.article>
                    ))}
                </div>
                <SectionCTA label="Build Something Great" />
            </div>
        </section>
    );
};

export default FeaturedWork;
