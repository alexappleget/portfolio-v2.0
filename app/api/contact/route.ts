import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, projectType, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "alexapplegetdev@gmail.com",
        pass: "neku wweb sbpj stda",
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${email}>`,
      to: "alexapplegetdev@gmail.com",
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
