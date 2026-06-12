/**
 * Shared DOT. email layout — matches site tokens (#030303, #FF4400, mono labels).
 */

export const DOT = {
    name: 'DOT.',
    tagline: 'Engineering high-performance digital products with precision and purpose.',
    website: 'https://dot-site.vercel.app',
    contactUrl: 'https://dot-site.vercel.app/contact',
    portfolioUrl: 'https://dot-site.vercel.app/#work',
    email: 'kartikvegad1806@gmail.com',
    colors: {
        bg: '#030303',
        bgCard: '#080808',
        bgInset: '#111111',
        text: '#FFFFFF',
        textSecondary: '#a0a0a0',
        textMuted: '#666666',
        accent: '#FF4400',
        border: '#161616',
    },
};

export function escapeHtml(value) {
    if (value == null) return '';
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function logoBlock() {
    return `
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 0 0 24px;">
            <tr>
                <td style="font-family: 'Space Grotesk', Arial, sans-serif; font-size: 28px; font-weight: 700; color: ${DOT.colors.text}; letter-spacing: -0.02em; line-height: 1;">
                    DOT.<span style="display: inline-block; width: 8px; height: 8px; background: ${DOT.colors.accent}; margin-left: 2px; vertical-align: baseline;"></span>
                </td>
            </tr>
        </table>
    `;
}

function sectionLabel(text) {
    return `
        <p style="margin: 0 0 16px; font-family: 'JetBrains Mono', Consolas, monospace; font-size: 10px; color: ${DOT.colors.accent}; text-transform: uppercase; letter-spacing: 0.15em; display: inline-block; padding: 6px 12px; border: 1px solid ${DOT.colors.border};">
            ${escapeHtml(text)}
        </p>
    `;
}

function divider() {
    return `<hr style="border: none; border-top: 1px solid ${DOT.colors.border}; margin: 28px 0;" />`;
}

function ctaButton(label, href) {
    return `
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 28px 0 8px;">
            <tr>
                <td style="background: ${DOT.colors.text}; border-radius: 0;">
                    <a href="${escapeHtml(href)}" target="_blank" style="display: inline-block; padding: 14px 32px; font-family: 'JetBrains Mono', Consolas, monospace; font-size: 11px; font-weight: 600; color: ${DOT.colors.bg}; text-decoration: none; text-transform: uppercase; letter-spacing: 0.05em;">
                        ${escapeHtml(label)} &rarr;
                    </a>
                </td>
            </tr>
        </table>
    `;
}

function featureCard(items) {
    const rows = items
        .map(
            (item) => `
            <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid ${DOT.colors.border}; font-family: 'Space Grotesk', Arial, sans-serif; font-size: 14px; color: ${DOT.colors.textSecondary}; line-height: 1.6;">
                    <span style="color: ${DOT.colors.accent}; margin-right: 8px;">//</span>${escapeHtml(item)}
                </td>
            </tr>
        `
        )
        .join('');

    return `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background: ${DOT.colors.bgInset}; border: 1px solid ${DOT.colors.border}; margin: 24px 0;">
            <tr>
                <td style="padding: 20px 24px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                        ${rows}
                    </table>
                </td>
            </tr>
        </table>
    `;
}

function footerBlock() {
    const year = new Date().getFullYear();
    return `
        ${divider()}
        <p style="margin: 0 0 8px; font-family: 'Space Grotesk', Arial, sans-serif; font-size: 13px; color: ${DOT.colors.textMuted}; line-height: 1.6;">
            ${DOT.tagline}
        </p>
        <p style="margin: 0; font-family: 'JetBrains Mono', Consolas, monospace; font-size: 11px; color: #333; text-transform: uppercase; letter-spacing: 0.08em;">
            &copy; ${year} ${DOT.name} All rights reserved.
        </p>
    `;
}

/**
 * @param {object} options
 * @param {string} options.label - Section label chip (e.g. "Outreach")
 * @param {string} options.title - Main heading
 * @param {string} options.bodyHtml - Inner HTML paragraphs / blocks
 * @param {string} [options.ctaLabel]
 * @param {string} [options.ctaUrl]
 */
export function buildEmail({ label, title, bodyHtml, ctaLabel, ctaUrl }) {
    const cta = ctaLabel && ctaUrl ? ctaButton(ctaLabel, ctaUrl) : '';

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)} – ${DOT.name}</title>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet" />
</head>
<body style="margin: 0; padding: 0; background: ${DOT.colors.bg};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background: ${DOT.colors.bg}; padding: 32px 16px;">
        <tr>
            <td align="center">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background: ${DOT.colors.bgCard}; border: 1px solid ${DOT.colors.border};">
                    <tr>
                        <td style="padding: 40px 36px;">
                            ${logoBlock()}
                            ${sectionLabel(label)}
                            <h1 style="margin: 0 0 20px; font-family: 'Space Grotesk', Arial, sans-serif; font-size: 26px; font-weight: 700; color: ${DOT.colors.text}; text-transform: uppercase; letter-spacing: -0.02em; line-height: 1.2;">
                                ${escapeHtml(title)}
                            </h1>
                            ${bodyHtml}
                            ${cta}
                            ${footerBlock()}
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `.trim();
}

export function paragraph(text) {
    return `<p style="margin: 0 0 16px; font-family: 'Space Grotesk', Arial, sans-serif; font-size: 15px; color: ${DOT.colors.textSecondary}; line-height: 1.7;">${text}</p>`;
}

export { featureCard, ctaButton, sectionLabel };
