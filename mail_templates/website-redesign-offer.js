import { buildMarketingEmail, escapeHtml, DOT } from './shared.js';

/**
 * Outreach email for companies with outdated or poor website design — redesign offer.
 *
 * @param {object} data
 * @param {string} data.companyName
 * @param {string} [data.contactName]
 * @param {string} [data.companyWebsite]
 * @param {string} [data.ctaUrl]
 * @param {string} [data.portfolioUrl]
 * @returns {{ subject: string, html: string, text: string }}
 */
export function websiteRedesignOfferEmail(data = {}) {
    const companyName = data.companyName || 'your company';
    const contactName = data.contactName || 'there';
    const ctaUrl = data.ctaUrl || DOT.contactUrl;
    const portfolioUrl = data.portfolioUrl || DOT.portfolioUrl;
    const safeCompany = escapeHtml(companyName);

    const websiteNote = data.companyWebsite
        ? `We came across <a href="${escapeHtml(data.companyWebsite)}" target="_blank" style="color: ${DOT.colors.accent}; text-decoration: underline;">${escapeHtml(data.companyWebsite)}</a> — you've built something real, but your site may not reflect the quality of ${safeCompany} yet.`
        : `${safeCompany} has real potential, but your website may not be reflecting the quality of your work yet.`;

    const html = buildMarketingEmail({
        pageTitle: 'Redesign Your Website',
        hero: {
            line1: 'Redesign Digital',
            line2Accent: 'Experiences.',
            subtitle: `Hi ${escapeHtml(contactName)}, ${websiteNote} We help brands transform outdated sites into high-performance experiences that convert.`,
            ctaLabel: "Let's Talk",
            ctaUrl,
        },
        sections: [
            {
                label: 'Why a Redesign Matters?',
                heading: 'First impressions happen before conversations.',
                body: 'An outdated layout, slow load times, or unclear messaging can quietly cost you leads — even when your product or service is excellent.',
                cards: [
                    {
                        title: 'Trustworthy',
                        desc: 'Modern design and clear storytelling build confidence the moment visitors land on your page.',
                    },
                    {
                        title: 'Faster',
                        desc: 'Performance optimization improves load times, SEO rankings, and user retention.',
                    },
                    {
                        title: 'Converting',
                        desc: 'Stronger UX, sharper CTAs, and better hierarchy turn traffic into real opportunities.',
                    },
                ],
            },
        ],
        split: {
            label: 'Proven Results',
            heading: 'We redesign with purpose.',
            body: `We recently refreshed <a href="https://www.happywindslogo.com" target="_blank" style="color: ${DOT.colors.accent}; text-decoration: underline;">Happywinds</a> — a branding studio — with sharper hierarchy and a more trustworthy presence. <a href="${escapeHtml(portfolioUrl)}" target="_blank" style="color: ${DOT.colors.textSecondary}; text-decoration: underline;">View our portfolio</a> to see what's possible for ${safeCompany}.`,
        },
        closing: {
            heading: 'Ready to Build Something Great?',
            subtitle: 'Book a complimentary 20-minute consultation — no obligation, just a clear picture of what a redesign could do.',
            ctaLabel: 'Book a Call',
            ctaUrl,
        },
    });

    const text = [
        `Hi ${contactName},`,
        '',
        data.companyWebsite
            ? `We came across ${data.companyWebsite} and believe ${companyName} could benefit from a website redesign.`
            : `We believe ${companyName} could benefit from a website redesign.`,
        '',
        'REDESIGN DIGITAL EXPERIENCES.',
        '',
        'Why a redesign matters:',
        '- Trustworthy — modern, credible presence',
        '- Faster — performance and SEO gains',
        '- Converting — better UX and clearer CTAs',
        '',
        'We recently redesigned Happywinds (happywindslogo.com).',
        `Portfolio: ${portfolioUrl}`,
        '',
        `Book a free consultation: ${ctaUrl}`,
        '',
        DOT.email,
    ].join('\n');

    return {
        subject: `A redesign opportunity for ${companyName} – ${DOT.name}`,
        html,
        text,
    };
}

export default websiteRedesignOfferEmail;
