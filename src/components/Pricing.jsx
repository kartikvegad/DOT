import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import './Pricing.css';

const pricingPlans = [
    {
        title: "Foundation",
        price: "₹4,999 – ₹9,999",
        tagline: "For individuals and early stage ideas",
        features: [
            "Graphic design support",
            "Single page web design",
            "Basic web development",
            "Static site deployment",
            "One revision round",
            "Email support"
        ],
        cta: "Get Started",
        recommended: false
    },
    {
        title: "Growth",
        price: "₹14,999 – ₹29,999",
        tagline: "For startups and small businesses",
        features: [
            "Complete UI UX design",
            "Multi page website",
            "Responsive web development",
            "Deployment with domain setup",
            "Basic SEO and performance setup",
            "Up to three revision rounds",
            "Priority support"
        ],
        cta: "Get a Quote",
        recommended: true
    },
    {
        title: "Scale",
        price: "Starting at ₹39,999",
        tagline: "For brands that need end to end execution",
        features: [
            "Brand focused graphic design",
            "Full website design and development",
            "Advanced deployment and optimisation",
            "Analytics integration",
            "Unlimited revisions during project",
            "Dedicated support"
        ],
        cta: "Contact Us",
        recommended: false
    }
];

const addOns = [
    "Additional pages",
    "Content writing",
    "Website maintenance",
    "Redesigns",
    "Hosting assistance"
];

const Pricing = () => {
    const handleCTAClick = (plan) => {
        // Scroll to contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="pricing" className="pricing-section section-padding">
            <div className="pricing-container">
                <div className="section-header">
                    <div className="section-label">Pricing</div>
                    <h2 className="section-title">Pricing</h2>
                    <p className="section-description">
                        Flexible pricing based on project scope and requirements
                    </p>
                </div>

                <div className="pricing-grid">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="pricing-header">
                                <div className="plan-title-row">
                                    <h3 className="plan-title">{plan.title}</h3>
                                    {plan.recommended && (
                                        <div className="recommended-badge">Recommended</div>
                                    )}
                                </div>
                                <div className="plan-price">{plan.price}</div>
                                <p className="plan-tagline">{plan.tagline}</p>
                            </div>

                            <div className="pricing-features">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="feature-item">
                                        <Check size={16} className="feature-icon" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="pricing-action-container">
                    <button
                        className="main-pricing-cta"
                        onClick={() => handleCTAClick()}
                    >
                        Get Started
                        <ArrowRight size={20} />
                    </button>
                    <div className="pricing-disclaimer">
                        Final pricing may vary based on project scope and requirements.
                    </div>
                </div>

                <div className="add-ons-section">
                    <h4 className="add-ons-title">Optional Add-Ons</h4>
                    <div className="add-ons-list">
                        {addOns.map((addon, index) => (
                            <span key={index} className="add-on-item">
                                {addon}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
