/**
 * DOT. marketing email layout — matches landing-page mockup aesthetic.
 */

export const DOT = {
    name: 'DOT.',
    tagline: 'Engineering high-performance digital products with precision and purpose.',
    website: 'https://dot-site.vercel.app',
    contactUrl: 'https://dot-site.vercel.app/contact',
    portfolioUrl: 'https://dot-site.vercel.app/#work',
    email: 'kartikvegad1806@gmail.com',
    colors: {
        bg: '#000000',
        bgCard: '#141414',
        bgCardHover: '#1a1a1a',
        text: '#FFFFFF',
        textSecondary: '#9a9a9a',
        textMuted: '#666666',
        accent: '#FF4400',
        border: '#222222',
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

const fontDisplay = "'Space Grotesk', Arial, Helvetica, sans-serif";
const fontMono = "'JetBrains Mono', Consolas, monospace";

function logoBlock() {
    return `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 40px;">
            <tr>
                <td style="font-family: ${fontDisplay}; font-size: 22px; font-weight: 700; color: ${DOT.colors.text}; letter-spacing: -0.02em;">
                    ${DOT.name}
                </td>
            </tr>
        </table>
    `;
}

function orangeCta(label, href, align = 'left') {
    return `
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="${align}" style="margin: 28px 0 0;">
            <tr>
                <td style="background: ${DOT.colors.accent}; border-radius: 999px;">
                    <a href="${escapeHtml(href)}" target="_blank" style="display: inline-block; padding: 14px 28px; font-family: ${fontDisplay}; font-size: 14px; font-weight: 600; color: ${DOT.colors.text}; text-decoration: none; letter-spacing: 0.01em;">
                        ${escapeHtml(label)} &rarr;
                    </a>
                </td>
            </tr>
        </table>
    `;
}

function sectionLabel(text) {
    return `
        <p style="margin: 0 0 12px; font-family: ${fontMono}; font-size: 11px; font-weight: 600; color: ${DOT.colors.accent}; text-transform: uppercase; letter-spacing: 0.12em;">
            ${escapeHtml(text)}
        </p>
    `;
}

function heroBlock({ line1, line2Accent, subtitle, ctaLabel, ctaUrl }) {
    return `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 56px;">
            <tr>
                <td>
                    <h1 class="hero-title" style="margin: 0 0 20px; font-family: ${fontDisplay}; font-size: 40px; font-weight: 700; color: ${DOT.colors.text}; text-transform: uppercase; letter-spacing: -0.03em; line-height: 1.05;">
                        ${escapeHtml(line1)}<br />
                        <span style="color: ${DOT.colors.accent};">${escapeHtml(line2Accent)}</span>
                    </h1>
                    <p style="margin: 0; font-family: ${fontDisplay}; font-size: 16px; color: ${DOT.colors.textSecondary}; line-height: 1.65; max-width: 480px;">
                        ${subtitle}
                    </p>
                    ${orangeCta(ctaLabel, ctaUrl)}
                </td>
            </tr>
        </table>
    `;
}

function iconPlaceholder() {
    return `
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 14px;">
            <tr>
                <td width="36" height="36" style="width: 36px; height: 36px; background: ${DOT.colors.bg}; border: 1px solid ${DOT.colors.border}; border-radius: 8px; font-size: 0; line-height: 0;">&nbsp;</td>
            </tr>
        </table>
    `;
}

function featureCards(cards) {
    const cells = cards
        .map(
            (card) => `
            <td class="card-col" width="33%" valign="top" style="width: 33%; padding: 0 6px; vertical-align: top;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background: ${DOT.colors.bgCard}; border-radius: 12px;">
                    <tr>
                        <td style="padding: 20px 16px;">
                            ${iconPlaceholder()}
                            <p style="margin: 0 0 8px; font-family: ${fontDisplay}; font-size: 15px; font-weight: 700; color: ${DOT.colors.text}; line-height: 1.3;">
                                ${escapeHtml(card.title)}
                            </p>
                            <p style="margin: 0; font-family: ${fontDisplay}; font-size: 13px; color: ${DOT.colors.textSecondary}; line-height: 1.55;">
                                ${escapeHtml(card.desc)}
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        `
        )
        .join('');

    return `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 28px;">
            <tr>
                ${cells}
            </tr>
        </table>
    `;
}

function contentSection({ label, heading, body, cards }) {
    return `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 56px;">
            <tr>
                <td>
                    ${sectionLabel(label)}
                    <h2 class="section-title" style="margin: 0 0 12px; font-family: ${fontDisplay}; font-size: 28px; font-weight: 700; color: ${DOT.colors.text}; letter-spacing: -0.02em; line-height: 1.15;">
                        ${escapeHtml(heading)}
                    </h2>
                    <p style="margin: 0; font-family: ${fontDisplay}; font-size: 15px; color: ${DOT.colors.textSecondary}; line-height: 1.65; max-width: 520px;">
                        ${body}
                    </p>
                    ${cards ? featureCards(cards) : ''}
                </td>
            </tr>
        </table>
    `;
}

function splitSection({ label, heading, body }) {
    return `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 56px;">
            <tr>
                <td class="split-text" width="58%" valign="top" style="width: 58%; padding-right: 20px; vertical-align: top;">
                    ${sectionLabel(label)}
                    <h2 style="margin: 0 0 12px; font-family: ${fontDisplay}; font-size: 28px; font-weight: 700; color: ${DOT.colors.text}; letter-spacing: -0.02em; line-height: 1.15;">
                        ${escapeHtml(heading)}
                    </h2>
                    <p style="margin: 0; font-family: ${fontDisplay}; font-size: 15px; color: ${DOT.colors.textSecondary}; line-height: 1.65;">
                        ${body}
                    </p>
                </td>
                <td class="split-visual" width="42%" valign="middle" style="width: 42%; vertical-align: middle;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                            <td height="160" style="height: 160px; background: ${DOT.colors.bgCard}; border: 1px solid ${DOT.colors.border}; border-radius: 12px; font-size: 0; line-height: 0;">&nbsp;</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    `;
}

function closingBlock({ heading, subtitle, ctaLabel, ctaUrl }) {
    return `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 48px;">
            <tr>
                <td align="center" style="text-align: center;">
                    <h2 class="closing-title" style="margin: 0 0 12px; font-family: ${fontDisplay}; font-size: 32px; font-weight: 700; color: ${DOT.colors.text}; text-transform: uppercase; letter-spacing: -0.02em; line-height: 1.1;">
                        ${escapeHtml(heading)}
                    </h2>
                    <p style="margin: 0; font-family: ${fontDisplay}; font-size: 15px; color: ${DOT.colors.textSecondary}; line-height: 1.65;">
                        ${subtitle}
                    </p>
                    ${orangeCta(ctaLabel, ctaUrl, 'center')}
                </td>
            </tr>
        </table>
    `;
}

function footerBar() {
    return `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top: 1px solid ${DOT.colors.border};">
            <tr>
                <td style="padding-top: 24px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                            <td style="font-family: ${fontDisplay}; font-size: 14px; font-weight: 700; color: ${DOT.colors.text};">
                                ${DOT.name}
                            </td>
                            <td align="right" style="font-family: ${fontMono}; font-size: 12px; color: ${DOT.colors.textMuted};">
                                <a href="mailto:${DOT.email}" style="color: ${DOT.colors.textMuted}; text-decoration: none;">${DOT.email}</a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    `;
}

/**
 * @param {object} options
 * @param {string} options.pageTitle
 * @param {object} options.hero
 * @param {object[]} options.sections
 * @param {object} [options.split]
 * @param {object} options.closing
 */
export function buildMarketingEmail({ pageTitle, hero, sections = [], split, closing }) {
    const sectionsHtml = sections.map((s) => contentSection(s)).join('');
    const splitHtml = split ? splitSection(split) : '';

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(pageTitle)} – ${DOT.name}</title>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet" />
    <style>
        @media only screen and (max-width: 520px) {
            .hero-title { font-size: 30px !important; }
            .section-title { font-size: 22px !important; }
            .closing-title { font-size: 24px !important; }
            .card-col { display: block !important; width: 100% !important; padding: 0 0 12px 0 !important; }
            .split-text, .split-visual { display: block !important; width: 100% !important; padding: 0 !important; }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background: ${DOT.colors.bg};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background: ${DOT.colors.bg};">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px;">
                    <tr>
                        <td style="padding: 0 8px;">
                            ${logoBlock()}
                            ${heroBlock(hero)}
                            ${sectionsHtml}
                            ${splitHtml}
                            ${closingBlock(closing)}
                            ${footerBar()}
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

export {
    heroBlock,
    contentSection,
    splitSection,
    closingBlock,
    featureCards,
    orangeCta,
    sectionLabel,
    footerBar,
};
