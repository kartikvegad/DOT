import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import svg2img from 'svg2img';

// Vercel Serverless Function Handler
export default async function handler(req, res) {
    // 1. Set CORS headers (vimportant for Vercel)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request for CORS preflight
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { user_name, user_email, service_type, budget, summary } = req.body;

    if (!user_email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        // Transporter setup
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Helper function for logo conversion
        const getLogoBuffer = () => {
            return new Promise((resolve, reject) => {
                // On Vercel, process.cwd() is the root of the project
                const svgPath = path.join(process.cwd(), 'Dot.svg');

                if (!fs.existsSync(svgPath)) {
                    console.error('Logo not found at:', svgPath);
                    // Return null or handle error if logo is missing
                    return resolve(null);
                }

                const svgString = fs.readFileSync(svgPath, 'utf8');
                const whiteSvgString = svgString.replace(/fill="black"/g, 'fill="white"');

                svg2img(whiteSvgString, { format: 'png', width: 400 }, (error, buffer) => {
                    if (error) reject(error);
                    else resolve(buffer);
                });
            });
        };

        const logoBuffer = await getLogoBuffer();
        const attachments = logoBuffer ? [{
            filename: 'logo.png',
            content: logoBuffer,
            cid: 'dotlogo'
        }] : [];

        // ── 1. Notify YOU (DOT team) ──────────────────
        const adminMailOptions = {
            from: `"DOT Website" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `New Inquiry: ${service_type} – from ${user_name || user_email}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0a0a0a; color: #f0f0f0; border-radius: 12px;">
                    <h2 style="color: #f97316; border-bottom: 1px solid #222; padding-bottom: 12px;">📨 New Project Inquiry</h2>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
                        <tr><td style="padding: 8px 0; color: #888; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: bold;">${user_name || 'Not provided'}</td></tr>
                        <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0;"><a href="mailto:${user_email}" style="color: #f97316;">${user_email}</a></td></tr>
                        <tr><td style="padding: 8px 0; color: #888;">Service</td><td style="padding: 8px 0;">${service_type}</td></tr>
                        <tr><td style="padding: 8px 0; color: #888;">Budget</td><td style="padding: 8px 0;">${budget}</td></tr>
                        <tr><td style="padding: 8px 0; color: #888; vertical-align: top;">Summary</td><td style="padding: 8px 0;">${summary || 'Not provided'}</td></tr>
                    </table>
                </div>
            `,
        };

        // ── 2. Send confirmation to the USER ──────────
        const userMailOptions = {
            from: `"DOT" <${process.env.EMAIL_USER}>`,
            to: user_email,
            subject: `We've received your inquiry, ${user_name || 'there'}! – DOT`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0a0a0a; color: #f0f0f0; border-radius: 12px;">
                    <div style="margin-bottom: 24px;">
                        <img src="cid:dotlogo" alt="DOT." width="100" style="display: block;" />
                    </div>
                    <hr style="border: none; border-top: 1px solid #1e1e1e; margin: 24px 0;" />
                    <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 8px;">
                        Hey ${user_name || 'there'}, we've got your request! 👋
                    </h2>
                    <p style="color: #aaa; line-height: 1.7; margin-bottom: 24px;">
                        Thank you for reaching out to DOT. Our team has received your inquiry and will
                        get back to you within <strong style="color: #f0f0f0;">24–48 hours</strong>.
                    </p>
                    <div style="background: #111; border: 1px solid #1e1e1e; border-radius: 10px; padding: 20px; margin-bottom: 24px;">
                        <h3 style="font-size: 13px; color: #555; text-transform: uppercase; letter-spacing: 1px; margin-top: 0;">Your Inquiry Summary</h3>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr><td style="padding: 6px 0; color: #666; width: 130px; font-size: 14px;">Service</td><td style="padding: 6px 0; font-size: 14px;">${service_type}</td></tr>
                            <tr><td style="padding: 6px 0; color: #666; font-size: 14px;">Budget</td><td style="padding: 6px 0; font-size: 14px;">${budget}</td></tr>
                            ${summary ? `<tr><td style="padding: 6px 0; color: #666; font-size: 14px; vertical-align: top;">Summary</td><td style="padding: 6px 0; font-size: 14px;">${summary}</td></tr>` : ''}
                        </table>
                    </div>
                    <p style="color: #aaa; line-height: 1.7;">
                        In the meantime, feel free to reply to this email or reach us directly at
                        <a href="mailto:${process.env.EMAIL_USER}" style="color: #f97316;">${process.env.EMAIL_USER}</a>.
                    </p>
                    <hr style="border: none; border-top: 1px solid #1e1e1e; margin: 24px 0;" />
                    <p style="font-size: 12px; color: #333; margin: 0;">
                        © ${new Date().getFullYear()} DOT. All rights reserved.
                    </p>
                </div>
            `,
            attachments: attachments
        };

        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions),
        ]);

        return res.status(200).json({ message: 'Emails sent successfully' });
    } catch (error) {
        console.error('Email error:', error);
        return res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
}
