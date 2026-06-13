import { buildMarketingEmail, escapeHtml, DOT } from './shared.js';

/**
 * Outreach email for newly registered / incorporated companies.
 *
 * @param {object} data
 * @param {string} data.companyName
 * @param {string} [data.contactName]
 * @param {string} [data.industry]
 * @param {string} [data.ctaUrl]
 * @returns {{ subject: string, html: string, text: string }}
 */
export function newlyRegisteredCompanyEmail(data = {}) {
    const companyName = data.companyName || 'your company';
    const contactName = data.contactName || 'there';
    const industry = data.industry || 'your industry';
    const ctaUrl = data.ctaUrl || DOT.contactUrl;
    const safeCompany = escapeHtml(companyName);

    const html = buildMarketingEmail({
        pageTitle: 'Build Digital Presence',
        hero: {
            line1: 'Build Digital',
            line2Accent: 'Presence.',
            subtitle: `Hi ${escapeHtml(contactName)}, congratulations on registering <strong style="color: ${DOT.colors.text};">${safeCompany}</strong>. We help ambitious brands create memorable digital products that attract attention, build trust, and drive growth.`,
            ctaLabel: "Let's Talk",
            ctaUrl,
        },
        sections: [
            {
                label: 'Why Digital Presence Matters?',
                heading: 'First impressions happen before conversations.',
                body: 'Customers discover, evaluate, and trust businesses online long before they reach out. A strong launch sets the tone for every partnership ahead.',
                cards: [
                    {
                        title: 'Professional',
                        desc: 'A polished site signals that your new company is serious, credible, and ready to deliver.',
                    },
                    {
                        title: 'Visible',
                        desc: 'Get found by the right clients in ' + escapeHtml(industry) + ' with SEO-ready structure from day one.',
                    },
                    {
                        title: 'Scalable',
                        desc: 'Built to grow with your team — from landing page to full product without starting over.',
                    },
                ],
            },
        ],
        split: {
            label: 'Always Working',
            heading: 'Your brand works 24/7.',
            body: `${safeCompany} deserves a digital presence that keeps building trust and generating opportunities while you focus on running the business.`,
        },
        closing: {
            heading: 'Ready to Build Something Great?',
            subtitle: `Let's discuss your goals for ${safeCompany} and explore what's possible.`,
            ctaLabel: 'Book a Call',
            ctaUrl,
        },
    });

    const text = [
        `Hi ${contactName},`,
        '',
        `Congratulations on registering ${companyName}!`,
        '',
        'BUILD DIGITAL PRESENCE.',
        '',
        `${DOT.name} helps newly registered companies launch professional, high-performance websites.`,
        '',
        'Why it matters:',
        '- Professional — credible first impression',
        '- Visible — SEO-ready from day one',
        '- Scalable — grows with your business',
        '',
        'Your brand works 24/7. Let us help you build a presence that earns trust around the clock.',
        '',
        `Book a call: ${ctaUrl}`,
        '',
        DOT.email,
    ].join('\n');

    return {
        subject: `${companyName} deserves a strong launch online – ${DOT.name}`,
        html,
        text,
    };
}

export default newlyRegisteredCompanyEmail;
