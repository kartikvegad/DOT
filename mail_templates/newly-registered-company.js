import { buildEmail, escapeHtml, paragraph, featureCard, DOT } from './shared.js';

/**
 * Outreach email for newly registered / incorporated companies.
 *
 * @param {object} data
 * @param {string} data.companyName
 * @param {string} [data.contactName] - Recipient first name or contact person
 * @param {string} [data.industry] - e.g. "fintech", "retail"
 * @param {string} [data.ctaUrl]
 * @param {string} [data.senderName]
 * @returns {{ subject: string, html: string, text: string }}
 */
export function newlyRegisteredCompanyEmail(data = {}) {
    const companyName = escapeHtml(data.companyName || 'your company');
    const contactName = data.contactName ? escapeHtml(data.contactName) : 'there';
    const industry = data.industry ? escapeHtml(data.industry) : 'your space';
    const ctaUrl = data.ctaUrl || DOT.contactUrl;
    const senderName = data.senderName || DOT.name;

    const bodyHtml = `
        ${paragraph(`Hi ${contactName},`)}
        ${paragraph(
            `Congratulations on registering <strong style="color: ${DOT.colors.text};">${companyName}</strong> — that&apos;s a major milestone. As you build momentum, your digital presence is often the first impression clients, partners, and investors see.`
        )}
        ${paragraph(
            `We&apos;re <strong style="color: ${DOT.colors.text};">${DOT.name}</strong>, a web development studio that helps new companies launch with clarity — not cookie-cutter templates. From brand-forward landing pages to full-stack products, we engineer sites that look sharp and perform under pressure.`
        )}
        ${featureCard([
            'Custom website built for your brand — not a generic template',
            'Mobile-first, fast-loading, and SEO-ready from day one',
            'Scalable architecture as your team and product grow',
            'End-to-end delivery: design, build, deploy, and handoff',
        ])}
        ${paragraph(
            `If ${companyName} is ready to establish a professional online foundation in ${industry}, we&apos;d love a short conversation — no pressure, just a clear picture of what&apos;s possible.`
        )}
        ${paragraph(`— ${escapeHtml(senderName)}`)}
    `;

    const html = buildEmail({
        label: 'New Ventures',
        title: 'Launch Your Digital Presence',
        bodyHtml,
        ctaLabel: 'Start a Project',
        ctaUrl,
    });

    const text = [
        `Hi ${data.contactName || 'there'},`,
        '',
        `Congratulations on registering ${data.companyName || 'your company'}!`,
        '',
        `${DOT.name} helps newly registered companies build high-performance websites and digital products.`,
        '',
        'What we offer:',
        '- Custom website tailored to your brand',
        '- Mobile-first, fast, and SEO-ready',
        '- Scalable architecture for growth',
        '- End-to-end design, build, and deployment',
        '',
        `Start a project: ${ctaUrl}`,
        '',
        `— ${senderName}`,
    ].join('\n');

    return {
        subject: `${data.companyName || 'Your company'} deserves a strong launch online – ${DOT.name}`,
        html,
        text,
    };
}

export default newlyRegisteredCompanyEmail;
