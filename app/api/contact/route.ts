import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, projectType, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.HOST as string,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER as string,
        pass: process.env.EMAIL_PASS as string,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER as string,
      subject: `New Contract Form Submission: ${projectType}`,
      text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    throw error;
  }
}
