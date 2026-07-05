import { useEffect } from 'react';

const STYLE_ID = 'dot-selection-style';

const ACCENT_SURFACES = [
    '.footer',
    '.nav-item.contact-btn',
    '.recommended-badge',
    '.main-pricing-cta',
];

const HOVER_ACCENT_SURFACES = [
    '.service-card',
    '.portfolio-card',
    '.why-card',
    '.stack-badge',
    '.process-journey-content',
    '.about-card',
    '.why-choose-card',
    '.team-card',
    '.review-card',
    '.pricing-card',
    '.section-cta',
    '.scroll-to-top',
    '.btn-primary',
    '.btn-next',
    '.carousel-control',
];

const DEFAULT_COLORS = {
    light: { bg: '#4BC772', color: '#000000' },
    dark: { bg: '#4BC772', color: '#FFFFFF' },
};

const ACCENT_COLORS = {
    light: { bg: '#000000', color: '#FFFFFF' },
    dark: { bg: '#FFFFFF', color: '#000000' },
};

const getTheme = () => (
    document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
);

const isOnAccentSurface = (node) => {
    let el = node?.nodeType === Node.TEXT_NODE ? node.parentElement : node;

    while (el && el !== document.documentElement) {
        if (ACCENT_SURFACES.some((selector) => el.matches?.(selector))) {
            return true;
        }

        if (HOVER_ACCENT_SURFACES.some((selector) => el.matches?.(selector) && el.matches(':hover'))) {
            return true;
        }

        el = el.parentElement;
    }

    return false;
};

const getSelectionColors = () => {
    const theme = getTheme();
    const selection = window.getSelection();
    const anchor = selection?.anchorNode;

    if (selection && !selection.isCollapsed && isOnAccentSurface(anchor)) {
        return ACCENT_COLORS[theme];
    }

    return DEFAULT_COLORS[theme];
};

const ensureStyleTag = () => {
    let style = document.getElementById(STYLE_ID);

    if (!style) {
        style = document.createElement('style');
        style.id = STYLE_ID;
        document.head.appendChild(style);
    }

    return style;
};

const applySelectionStyle = () => {
    const { bg, color } = getSelectionColors();
    const style = ensureStyleTag();

    style.textContent = `
        *::selection {
            background-color: ${bg} !important;
            color: ${color} !important;
        }
        *::-moz-selection {
            background-color: ${bg} !important;
            color: ${color} !important;
        }
    `;

    document.head.appendChild(style);

    const selection = window.getSelection();
    if (typeof Highlight === 'undefined' || !CSS.highlights || !selection || selection.isCollapsed) {
        CSS.highlights?.delete('dot-selection');
        return;
    }

    const ranges = [];
    for (let i = 0; i < selection.rangeCount; i += 1) {
        ranges.push(selection.getRangeAt(i));
    }

    CSS.highlights.set('dot-selection', new Highlight(...ranges));
};

const SelectionHighlight = () => {
    useEffect(() => {
        applySelectionStyle();

        document.addEventListener('selectionchange', applySelectionStyle);
        document.addEventListener('mouseup', applySelectionStyle);
        document.addEventListener('keyup', applySelectionStyle);

        const themeObserver = new MutationObserver(applySelectionStyle);
        themeObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme'],
        });

        return () => {
            document.removeEventListener('selectionchange', applySelectionStyle);
            document.removeEventListener('mouseup', applySelectionStyle);
            document.removeEventListener('keyup', applySelectionStyle);
            themeObserver.disconnect();
            CSS.highlights?.delete('dot-selection');
            document.getElementById(STYLE_ID)?.remove();
        };
    }, []);

    return null;
};

export default SelectionHighlight;
