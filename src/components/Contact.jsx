import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [step, setStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        service: '',
        scope: '< ₹10k',
        description: '',
        email: '',
        name: ''
    });

    const handleNext = () => {
        setError(null);
        if (step === 2) {
            handleSubmit();
        } else {
            setStep(prev => prev + 1);
        }
    };

    const handleBack = () => {
        setError(null);
        setStep(prev => prev - 1);
    };

    const updateData = (key, value) => {
        setError(null);
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setError(null);

        const payload = {
            user_name: formData.name,
            user_email: formData.email,
            service_type: formData.service,
            budget: formData.scope,
            summary: formData.description
        };

        try {
            const API_URL = '/api/contact';

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setStep(3);
            } else {
                const data = await response.json();
                throw new Error(data.details || 'Failed to send');
            }
        } catch (err) {
            console.error('Submission error:', err);
            setError(
                'Something went wrong. Please try again or contact us directly at kartikvegad1806@gmail.com'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const steps = [
        // Step 0: Service Type
        <div className="form-step">
            <h3 className="form-title">What can we build for you?</h3>
            <div className="selection-grid">
                {['Web Application', 'Website / Platform', 'Mobile App', 'Design System', 'Technical Audit', 'Other'].map(option => (
                    <div
                        key={option}
                        className={`selection-card ${formData.service === option ? 'selected' : ''}`}
                        onClick={() => updateData('service', option)}
                    >
                        <h4>{option}</h4>
                    </div>
                ))}
            </div>
        </div>,

        // Step 1: Scale
        <div className="form-step">
            <h3 className="form-title">Project Scale</h3>
            <div className="form-group slider-group">
                <label className="form-label">Estimated Budget Range</label>
                <div className="range-wrapper">
                    <input
                        type="range"
                        min="1"
                        max="4"
                        step="1"
                        className="form-range"
                        value={formData.scope === '< ₹10k' ? 1 : formData.scope === '₹10k - ₹30k' ? 2 : formData.scope === '₹30k - ₹40k' ? 3 : 4}
                        onChange={(e) => {
                            const val = parseInt(e.target.value);
                            const label = val === 1 ? '< ₹10k' : val === 2 ? '₹10k - ₹30k' : val === 3 ? '₹30k - ₹40k' : '> ₹40k';
                            updateData('scope', label);
                        }}
                    />
                    <div className="range-labels">
                        <span className={`range-label ${formData.scope === '< ₹10k' ? 'active' : ''}`}>&lt; ₹10k</span>
                        <span className={`range-label ${formData.scope === '₹10k - ₹30k' ? 'active' : ''}`}>₹10k - ₹30k</span>
                        <span className={`range-label ${formData.scope === '₹30k - ₹40k' ? 'active' : ''}`}>₹30k - ₹40k</span>
                        <span className={`range-label ${formData.scope === '> ₹40k' ? 'active' : ''}`}>&gt; ₹40k</span>
                    </div>
                </div>
            </div>
        </div>,

        // Step 2: Contact Details
        <div className="form-step">
            <h3 className="form-title">Your Details</h3>
            <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                    type="text"
                    className="form-input"
                    placeholder="E.g. Rahul Sharma"
                    value={formData.name}
                    onChange={e => updateData('name', e.target.value)}
                />
            </div>
            <div className="form-group">
                <label className="form-label">Quick Summary (Optional)</label>
                <input
                    type="text"
                    className="form-input"
                    placeholder="E.g. E-commerce platform / Fintech dashboard"
                    value={formData.description}
                    onChange={e => updateData('description', e.target.value)}
                />
            </div>
            <div className="form-group">
                <label className="form-label">Business Email</label>
                <input
                    type="email"
                    className="form-input"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={e => updateData('email', e.target.value)}
                />
            </div>
        </div>,

        // Step 3: Success
        <div className="form-step success-message">
            <div style={{ display: 'inline-flex', padding: '1rem', background: 'var(--accent-glow)', borderRadius: '50%', color: 'var(--accent)', marginBottom: '1.5rem' }}>
                <Check size={40} />
            </div>
            <h3>Request Received</h3>
            <p>
                Thank you for reaching out! The DOT team has received your inquiry and will contact you
                within <strong>24–48 hours</strong>. A confirmation has been sent to{' '}
                <strong>{formData.email}</strong>.
            </p>
            <button
                className="btn-next"
                onClick={() => {
                    setStep(0);
                    setFormData({ service: '', scope: '< ₹10k', description: '', email: '', name: '' });
                }}
                style={{ margin: '2rem auto' }}
            >
                Start New Inquiry
            </button>
        </div>
    ];

    const canProceed = () => {
        if (step === 0) return !!formData.service;
        if (step === 1) return !!formData.scope;
        if (step === 2) return !!formData.email;
        return true;
    };

    return (
        <section id="contact" className="section-padding contact-section">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Get In Touch</div>
                    <h2 className="section-title">Contact</h2>
                    <p className="section-description">
                        Ready to scale your next project? Let's discuss your requirements and build something exceptional.
                    </p>
                </div>

                <div className="form-container">
                    {step < 3 && (
                        <div className="step-indicator">
                            {[0, 1, 2].map(i => (
                                <div key={i} className={`step-dot ${i <= step ? 'active' : ''} ${i < step ? 'completed' : ''}`}></div>
                            ))}
                        </div>
                    )}

                    {steps[step]}

                    {error && <div className="error-message-ui">{error}</div>}

                    {step < 3 && (
                        <div className="form-actions">
                            <button
                                className="btn-back"
                                onClick={handleBack}
                                disabled={step === 0}
                                style={{ visibility: step === 0 ? 'hidden' : 'visible' }}
                            >
                                Back
                            </button>
                            <button
                                className="btn-next"
                                onClick={handleNext}
                                disabled={!canProceed() || isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : (step === 2 ? 'Submit' : 'Next')} <ArrowRight size={18} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
export default Contact;
