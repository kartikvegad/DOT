import { buildEmail, escapeHtml, paragraph, featureCard, DOT } from './shared.js';

/**
 * Outreach email for companies with outdated or poor website design — redesign offer.
 *
 * @param {object} data
 * @param {string} data.companyName
 * @param {string} [data.contactName]
 * @param {string} [data.companyWebsite] - Their current site URL
 * @param {string} [data.ctaUrl]
 * @param {string} [data.portfolioUrl]
 * @param {string} [data.senderName]
 * @returns {{ subject: string, html: string, text: string }}
 */
export function websiteRedesignOfferEmail(data = {}) {
    const companyName = escapeHtml(data.companyName || 'your company');
    const contactName = data.contactName ? escapeHtml(data.contactName) : 'there';
    const website = data.companyWebsite ? escapeHtml(data.companyWebsite) : 'your current site';
    const ctaUrl = data.ctaUrl || DOT.contactUrl;
    const portfolioUrl = data.portfolioUrl || DOT.portfolioUrl;
    const senderName = data.senderName || DOT.name;

    const websiteLine = data.companyWebsite
        ? `${paragraph(
              `We came across <a href="${website}" target="_blank" style="color: ${DOT.colors.accent}; text-decoration: underline;">${website}</a> while researching businesses in your category. You&apos;ve clearly built something real — but your website may not be reflecting the quality of ${companyName} yet.`
          )}`
        : paragraph(
              `We&apos;ve been researching businesses in your category, and we believe ${companyName} has real potential — but your website may not be reflecting the quality of your work yet.`
          );

    const bodyHtml = `
        ${paragraph(`Hi ${contactName},`)}
        ${websiteLine}
        ${paragraph(
            `First impressions online happen in seconds. An outdated layout, slow load times, or unclear messaging can quietly cost you leads — even when your product or service is excellent.`
        )}
        ${paragraph(
            `<strong style="color: ${DOT.colors.text};">${DOT.name}</strong> specializes in website redesigns that elevate brand trust and conversion. We don&apos;t slap on a new skin — we rethink structure, storytelling, and performance so your site works as hard as your team does.`
        )}
        ${featureCard([
            'Full visual redesign aligned with your brand and audience',
            'Improved UX, clearer CTAs, and stronger conversion paths',
            'Performance optimization — faster loads, better SEO rankings',
            'Modern, responsive build that works flawlessly on every device',
        ])}
        ${paragraph(
            `We recently redesigned <a href="https://www.happywindslogo.com" target="_blank" style="color: ${DOT.colors.accent}; text-decoration: underline;">Happywinds</a> — a branding studio — with a sharper hierarchy and a more trustworthy digital presence. We&apos;d love to explore what a refresh could do for ${companyName}.`
        )}
        ${paragraph(
            `We&apos;re offering a <strong style="color: ${DOT.colors.text};">complimentary redesign consultation</strong> — a focused 20-minute call to outline opportunities, timeline, and investment. No obligation.`
        )}
        ${paragraph(`— ${escapeHtml(senderName)}`)}
        <p style="margin: 8px 0 0; font-family: 'JetBrains Mono', Consolas, monospace; font-size: 11px;">
            <a href="${escapeHtml(portfolioUrl)}" target="_blank" style="color: ${DOT.colors.textMuted}; text-decoration: underline;">View our portfolio</a>
        </p>
    `;

    const html = buildEmail({
        label: 'Redesign Opportunity',
        title: 'Your Website Can Do More',
        bodyHtml,
        ctaLabel: 'Book a Free Consultation',
        ctaUrl,
    });

    const text = [
        `Hi ${data.contactName || 'there'},`,
        '',
        data.companyWebsite
            ? `We came across ${data.companyWebsite} and believe ${data.companyName || 'your company'} could benefit from a website redesign.`
            : `We believe ${data.companyName || 'your company'} could benefit from a website redesign.`,
        '',
        `${DOT.name} specializes in redesigns that improve brand trust, UX, and performance.`,
        '',
        'What a redesign includes:',
        '- Visual refresh aligned with your brand',
        '- Better UX and conversion-focused layout',
        '- Performance and SEO improvements',
        '- Fully responsive, modern build',
        '',
        'We recently redesigned Happywinds (happywindslogo.com).',
        '',
        `Book a free consultation: ${ctaUrl}`,
        `View portfolio: ${portfolioUrl}`,
        '',
        `— ${senderName}`,
    ].join('\n');

    return {
        subject: `A redesign opportunity for ${data.companyName || 'your business'} – ${DOT.name}`,
        html,
        text,
    };
}

export default websiteRedesignOfferEmail;
