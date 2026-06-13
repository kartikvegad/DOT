import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import svg2img from 'svg2img';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the Vite build directory
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Health check for API
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
    },
});

// Helper function to convert SVG to PNG buffer
const getLogoBuffer = () => {
    return new Promise((resolve, reject) => {
        const svgPath = path.join(__dirname, 'Dot.svg');
        const svgString = fs.readFileSync(svgPath, 'utf8');

        // Change black fill to white for the dark email background
        const whiteSvgString = svgString.replace(/fill="black"/g, 'fill="white"');

        svg2img(whiteSvgString, { format: 'png', width: 400 }, (error, buffer) => {
            if (error) reject(error);
            else resolve(buffer);
        });
    });
};

app.post('/api/contact', async (req, res) => {
    console.log(`📩 New inquiry request from: ${req.body.user_email}`);
    const { user_name, user_email, user_phone, query, summary } = req.body;
    const userQuery = (query || summary || '').trim() || 'Not provided';
    const phone = (user_phone || '').trim();

    if (!user_email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    if (!phone) {
        return res.status(400).json({ error: 'Phone number is required' });
    }

    try {
        const logoBuffer = await getLogoBuffer();

        // ── 1. Notify YOU (DOT. team) ──────────────────
        const adminMailOptions = {
            from: `"DOT. Website" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `New inquiry from ${user_name || user_email} – DOT.`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0a0a0a; color: #f0f0f0; border-radius: 12px;">
                    <h2 style="color: #FF4400; border-bottom: 1px solid #222; padding-bottom: 12px;">📨 New Contact Inquiry</h2>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
                        <tr><td style="padding: 8px 0; color: #888; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: bold;">${user_name || 'Not provided'}</td></tr>
                        <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0;"><a href="mailto:${user_email}" style="color: #FF4400;">${user_email}</a></td></tr>
                        <tr><td style="padding: 8px 0; color: #888;">Phone</td><td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #FF4400;">${phone}</a></td></tr>
                        <tr><td style="padding: 8px 0; color: #888; vertical-align: top;">Query</td><td style="padding: 8px 0;">${userQuery}</td></tr>
                    </table>
                </div>
            `,
        };

        // ── 2. Send confirmation to the USER ──────────
        const userMailOptions = {
            from: `"DOT." <${process.env.EMAIL_USER}>`,
            to: user_email,
            subject: `We've received your inquiry, ${user_name || 'there'}! – DOT.`,
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
                        Thank you for reaching out! The DOT. team has received your inquiry and will
                        get back to you within <strong style="color: #f0f0f0;">24–48 hours</strong>.
                    </p>

                    <div style="background: #111; border: 1px solid #1e1e1e; border-radius: 10px; padding: 20px; margin-bottom: 24px;">
                        <h3 style="font-size: 13px; color: #555; text-transform: uppercase; letter-spacing: 1px; margin-top: 0;">Your Message</h3>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr><td style="padding: 6px 0; color: #666; width: 130px; font-size: 14px;">Name</td><td style="padding: 6px 0; font-size: 14px;">${user_name || 'Not provided'}</td></tr>
                            <tr><td style="padding: 6px 0; color: #666; font-size: 14px;">Email</td><td style="padding: 6px 0; font-size: 14px;">${user_email}</td></tr>
                            <tr><td style="padding: 6px 0; color: #666; font-size: 14px;">Phone</td><td style="padding: 6px 0; font-size: 14px;">${phone}</td></tr>
                            <tr><td style="padding: 6px 0; color: #666; font-size: 14px; vertical-align: top;">Query</td><td style="padding: 6px 0; font-size: 14px;">${userQuery}</td></tr>
                        </table>
                    </div>

                    <p style="color: #aaa; line-height: 1.7;">
                        In the meantime, feel free to reply to this email or reach us directly at
                        <a href="mailto:${process.env.EMAIL_USER}" style="color: #FF4400;">${process.env.EMAIL_USER}</a>.
                    </p>

                    <hr style="border: none; border-top: 1px solid #1e1e1e; margin: 24px 0;" />

                    <p style="font-size: 12px; color: #333; margin: 0;">
                        © ${new Date().getFullYear()} DOT. All rights reserved.
                    </p>
                </div>
            `,
            attachments: [{
                filename: 'logo.png',
                content: logoBuffer,
                cid: 'dotlogo' // same cid value as in the html img src
            }]
        };

        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions),
        ]);
        res.status(200).json({ message: 'Emails sent successfully' });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
});

const PORT = process.env.PORT || 5000;

// Catch-all to serve index.html for SPA routing
app.get('*', (req, res) => {
    // Only serve index.html if it's not an API call
    if (!req.path.startsWith('/api')) {
        const indexHtml = path.join(distPath, 'index.html');
        if (fs.existsSync(indexHtml)) {
            res.sendFile(indexHtml);
        } else {
            res.status(404).send('Frontend not built. Run npm run build.');
        }
    } else {
        res.status(404).json({ error: 'API route not found' });
    }
});

app.listen(PORT, () => {
    console.log(`✅ DOT. backend running on http://localhost:${PORT}`);
});

