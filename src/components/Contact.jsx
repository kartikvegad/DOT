import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        query: '',
    });

    const updateData = (key, value) => {
        setError(null);
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!formData.name.trim() || !formData.email.trim()) {
            setError('Please enter your name and email.');
            return;
        }

        setIsSubmitting(true);

        const payload = {
            user_name: formData.name.trim(),
            user_email: formData.email.trim(),
            query: formData.query.trim(),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setSubmitted(true);
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

    const resetForm = () => {
        setSubmitted(false);
        setFormData({ name: '', email: '', query: '' });
        setError(null);
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
                    {submitted ? (
                        <div className="success-message">
                            <div className="success-icon">
                                <Check size={40} />
                            </div>
                            <h3>Request Received</h3>
                            <p>
                                Thank you for reaching out! The DOT. team has received your inquiry and will contact you
                                within <strong>24–48 hours</strong>. A confirmation has been sent to{' '}
                                <strong>{formData.email}</strong>.
                            </p>
                            <button type="button" className="btn-next" onClick={resetForm}>
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="contact-name">Name</label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    className="form-input"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={(e) => updateData('name', e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="contact-email">Email</label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    className="form-input"
                                    placeholder="name@company.com"
                                    value={formData.email}
                                    onChange={(e) => updateData('email', e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="contact-query">Query (optional)</label>
                                <textarea
                                    id="contact-query"
                                    className="form-textarea"
                                    placeholder="Tell us about your project or question..."
                                    rows={3}
                                    value={formData.query}
                                    onChange={(e) => updateData('query', e.target.value)}
                                />
                            </div>

                            {error && <div className="error-message-ui">{error}</div>}

                            <div className="form-actions">
                                <button
                                    type="submit"
                                    className="btn-next"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Submit'} <ArrowRight size={18} />
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
