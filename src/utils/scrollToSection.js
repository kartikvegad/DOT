const NAVBAR_HEIGHT = 64;

export const scrollToSection = (id, offset = NAVBAR_HEIGHT) => {
    const element = document.getElementById(id);
    if (!element) return;

    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const offsetPosition = elementRect - bodyRect - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
    });
};

export const handleScrollTo = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
};
