import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Globe } from 'lucide-react';
import kvPhoto from '../assets/Photos/vk.jpeg';
import pcPhoto from '../assets/Photos/PC.jpeg';
import nbPhoto from '../assets/Photos/NB.jpg';
import dnPhoto from '../assets/Photos/';
import './Team.css';

const teamMembers = [
    {
        name: "Kartik Vegad",
        role: "Founder & Director",
        image: kvPhoto,
        socials: {
            github: "https://github.com/notkartik1806",
            linkedin: "https://www.linkedin.com/in/kartikvegad/",
            instagram: "https://www.instagram.com/kartikvegad/",
            portfolio: "https://kartikvegad.in"
        }
    }
    {
        name: "Prayas Chavda",
        role: "Co-Founder",
        image: pcPhoto,
        socials: {
            github: "https://github.com/Caffeinechic",
            linkedin: "https://www.linkedin.com/in/chavdaprayas/",
            instagram: "",
            portfolio: "https://prayaschavda.vercel.app/"
        }
    }

    {
        name: "Nandish Bhatt",
        role: "Co-Founder",
        image: nbPhoto,
        socials: {
            github: "",
            linkedin: "https://www.linkedin.com/in/nandish-bhatt/",
            instagram: "",
            portfolio: ""
        }
    }

    {
        name: "Daksh Ninama",
        role: "Co-Founder",
        image: dnPhoto,
        socials: {
            github: "",
            linkedin: "https://www.linkedin.com/in/daksh-ninama/",
            instagram: "",
            portfolio: ""
        }
    }
];

const Team = () => {
    return (
        <section id="team" className="section-padding team-section">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Brainpower</div>
                    <h2 className="section-title">Meet the Team</h2>
                    <p className="section-description">
                        An engineering-first team dedicated to building high-performance digital products and scalable systems.
                    </p>
                </div>

                <div className="team-grid single-member">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="team-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="team-photo-wrapper">
                                <div className="team-photo-inner">
                                    <img src={member.image} alt={member.name} className="team-photo" />
                                </div>
                                <div className="team-social-overlay">
                                    <div className="social-links">
                                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="social-link-icon">
                                            <Github size={20} />
                                        </a>
                                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link-icon">
                                            <Linkedin size={20} />
                                        </a>
                                        <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-link-icon">
                                            <Instagram size={20} />
                                        </a>
                                        <a href={member.socials.portfolio} target="_blank" rel="noopener noreferrer" className="social-link-icon">
                                            <Globe size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-info">
                                <h3 className="team-name">{member.name}</h3>
                                <div className="team-role">{member.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
