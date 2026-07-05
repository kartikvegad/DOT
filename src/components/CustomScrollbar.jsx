import React, { useCallback, useEffect, useRef, useState } from 'react';
import './CustomScrollbar.css';

const TRACK_INSET = 0;

const CustomScrollbar = () => {
    const dragRef = useRef(null);
    const [thumb, setThumb] = useState({ height: 80, top: 0 });
    const [visible, setVisible] = useState(false);
    const [dragging, setDragging] = useState(false);
    const [inFooter, setInFooter] = useState(false);

    const isOnLanding = useCallback(() => {
        const landing = document.querySelector('.landing-section');
        if (!landing) return false;
        return landing.getBoundingClientRect().bottom > window.innerHeight * 0.15;
    }, []);

    const getMetrics = useCallback(() => {
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        const trackHeight = Math.max(clientHeight - TRACK_INSET * 2, 0);

        return { scrollHeight, clientHeight, scrollTop, trackHeight };
    }, []);

    const updateThumb = useCallback(() => {
        const { scrollHeight, clientHeight, scrollTop, trackHeight } = getMetrics();

        if (scrollHeight <= clientHeight + 1 || trackHeight <= 0 || isOnLanding()) {
            setVisible(false);
            return;
        }

        setVisible(true);

        const ratio = clientHeight / scrollHeight;
        const thumbHeight = Math.max(80, trackHeight * ratio);
        const maxTop = Math.max(trackHeight - thumbHeight, 0);
        const scrollable = scrollHeight - clientHeight;
        const scrollRatio = scrollable > 0 ? scrollTop / scrollable : 0;

        setThumb({
            height: thumbHeight,
            top: scrollRatio * maxTop,
        });

        const footer = document.querySelector('.footer');
        if (footer) {
            const footerRect = footer.getBoundingClientRect();
            const thumbTop = scrollRatio * maxTop;
            const thumbBottom = thumbTop + thumbHeight;
            setInFooter(thumbBottom > footerRect.top && thumbTop < footerRect.bottom);
        } else {
            setInFooter(false);
        }
    }, [getMetrics, isOnLanding]);

    useEffect(() => {
        updateThumb();

        window.addEventListener('scroll', updateThumb, { passive: true });
        window.addEventListener('resize', updateThumb);

        const observer = new ResizeObserver(updateThumb);
        observer.observe(document.documentElement);
        observer.observe(document.body);

        const timer = window.setTimeout(updateThumb, 100);

        return () => {
            window.clearTimeout(timer);
            window.removeEventListener('scroll', updateThumb);
            window.removeEventListener('resize', updateThumb);
            observer.disconnect();
        };
    }, [updateThumb]);

    const handlePointerDown = (e) => {
        e.preventDefault();
        dragRef.current = {
            startY: e.clientY,
            startScrollTop: window.scrollY,
            trackHeight: getMetrics().trackHeight,
            thumbHeight: thumb.height,
        };
        setDragging(true);
    };

    useEffect(() => {
        const handlePointerMove = (e) => {
            if (!dragRef.current) return;

            const { startY, startScrollTop, trackHeight, thumbHeight } = dragRef.current;
            const { scrollHeight, clientHeight } = getMetrics();
            const maxThumbTop = Math.max(trackHeight - thumbHeight, 0);
            const scrollable = scrollHeight - clientHeight;
            const deltaY = e.clientY - startY;
            const scrollDelta = maxThumbTop > 0 ? (deltaY / maxThumbTop) * scrollable : 0;

            window.scrollTo(0, startScrollTop + scrollDelta);
        };

        const handlePointerUp = () => {
            dragRef.current = null;
            setDragging(false);
        };

        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('pointerup', handlePointerUp);

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
        };
    }, [getMetrics, thumb.height]);

    if (!visible) return null;

    return (
        <div className="custom-scrollbar" aria-hidden="true">
            <div
                className={`custom-scrollbar-thumb ${dragging ? 'dragging' : ''} ${inFooter ? 'in-footer' : ''}`}
                style={{
                    height: `${thumb.height}px`,
                    transform: `translateY(${thumb.top}px)`,
                }}
                onPointerDown={handlePointerDown}
            />
        </div>
    );
};

export default CustomScrollbar;
