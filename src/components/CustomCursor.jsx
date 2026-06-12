import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const updateHoverState = (e) => {
            const target = e.target;
            const isClickable = target.closest('a, button, [role="button"], .selection-card, .team-card, .dot-logo, .landing-section, .project-card, .indicator');
            setIsHovered(!!isClickable);
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', updateHoverState);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', updateHoverState);
        };
    }, []);

    return (
        <div
            className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        />
    );
};

export default CustomCursor;
