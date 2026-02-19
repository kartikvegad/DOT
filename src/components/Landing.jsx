import React from 'react';
import './Landing.css';

const Landing = () => {
    const scrollToHero = () => {
        const element = document.getElementById('hero');
        if (element) {
            const offset = 64; // Navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="landing-section" onClick={scrollToHero} style={{ cursor: 'pointer' }}>
            <div className="landing-logo-wrapper">
                <svg className="landing-logo" viewBox="0 0 1371 531" fill="none">
                    <path d="M383.453 90.0998H384.907V429.791L283.908 429.611V530.426H101.165H0V0.609673H86.2694H183.635V0.363306L183.999 0H279.548V0.363306L279.911 0L281.001 1.08992H283.908V3.63306L383.453 90.0998ZM283.908 137.33L243.217 102.089H101.165V429.611H283.908V137.33Z" fill="currentColor" />
                    <path d="M522.6 134.786L523 429.595H422.013L422 88.6097L526.804 0.611328H706V98.6092L564.38 98.4558L522.6 134.786ZM806 424.609L716 530.611L522.756 530.502L523 429.595L669 429.611L706 387.609V98.6092H806V424.609Z" fill="currentColor" />
                    <path d="M1022 0.611328V98.6113H843V0.611328H1022ZM1193 0.611328H1371V103.61H1193V0.611328ZM1022 118.438L1122.42 117.711V530.61H1022V118.438ZM1022 118.438L1126.41 26.8846L1193 103.61L1122.42 164.214V117.711L1022 118.438Z" fill="currentColor" />
                    <path d="M1268 427.61H1371V530.61H1268V427.61Z" fill="#ff4400" />
                </svg>
            </div>
        </section>
    );
};

export default Landing;
