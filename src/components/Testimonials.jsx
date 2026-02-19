import React, { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Sections.css';
import './Testimonials.css';

const reviews = [
    {
        name: "Arjun Mehta",
        role: "Founder, Fintech Solutions",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
        text: "DOT. transformed our legacy platform into a high-performance engine. Their technical precision is unmatched in the local market."
    },
    {
        name: "Sarah Williams",
        role: "CTO, Nexus Systems",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        text: "The delivery process was seamless. They don't just write code; they build scalable digital products with a very clear vision."
    },
    {
        name: "Vikram Singh",
        role: "Product Head, GreenTech",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
        text: "Precision engineering at its best. DOT team handles complex backend requirements with ease and delivers pixel-perfect UI."
    },
    {
        name: "Neha Kapoor",
        role: "CEO, Streamline AI",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
        text: "Exceptional attention to detail. They helped us scale our infrastructure to handle 10x traffic without breaking a sweat."
    },
    {
        name: "David Chen",
        role: "Engineering Director",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
        text: "A true technical partner. Their ability to bridge the gap between complex engineering and user-centric design is rare."
    },
    {
        name: "Priya Sharma",
        role: "Founder, Bloom Edu",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
        text: "Working with DOT was a game-changer for our startup. They delivered a robust, secure, and beautiful product ahead of schedule."
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = isMobile ? reviews.length - 1 : reviews.length - 2;

    const next = useCallback(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const prev = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    return (
        <section id="reviews" className="section-padding">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Validation</div>
                    <h2 className="section-title">Client Reviews</h2>
                    <p className="section-description">
                        Trusted by engineering-first companies to build and scale their most ambitious digital products.
                    </p>
                </div>

                <div className="carousel-wrapper">
                    <button className="carousel-control prev" onClick={prev} aria-label="Previous">
                        <ChevronLeft size={20} />
                    </button>

                    <div className="reviews-carousel">
                        <div
                            className="carousel-track"
                            style={{
                                transform: `translateX(calc(-${currentIndex * (isMobile ? 100 : 50)}% - ${currentIndex > 0 ? (currentIndex * (isMobile ? 0 : 32)) : 0}px))`
                            }}
                        >
                            {reviews.map((review, idx) => (
                                <div key={idx} className="carousel-card-wrapper">
                                    <div className="review-card">
                                        <div className="review-header">
                                            <div className="review-avatar">
                                                <img src={review.image} alt={review.name} />
                                            </div>
                                            <div className="review-info">
                                                <h3 className="review-name">{review.name}</h3>
                                                <div className="review-role">{review.role}</div>
                                            </div>
                                        </div>
                                        <div className="review-body">
                                            <Quote className="quote-icon" size={20} />
                                            <p className="review-text">{review.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="carousel-control next" onClick={next} aria-label="Next">
                        <ChevronRight size={20} />
                    </button>
                </div>

                <div className="carousel-indicators">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <div
                            key={i}
                            className={`indicator ${currentIndex === i ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
