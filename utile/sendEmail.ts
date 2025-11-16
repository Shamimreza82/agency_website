import { transporter } from "@/lib/config/nodemailer";



export const sendEmail = async (to: string, subject: string, html: string) => {
    // Wrap in an async IIFE so we can use await.
    const info = await transporter.sendMail({
        from: `"SM Agency" <${process.env.NODE_MAILER_EMAIL}>`, // sender address
        cc: "shamimrezaone@gmail.com",      // optional carbon copy
        bcc: "almamuncool88@gmail.com",    // optional blind carbon copy
        to,
        subject,
        html,
    });

    console.log("Message sent:", info.messageId);
};