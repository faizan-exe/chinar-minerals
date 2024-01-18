import { createTransport } from "nodemailer";

// import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const { subject, email, message, fname, lname, number } = await req.json();

    const transporter = createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,

      auth: {
        user: "chinar-minerals-transporter@outlook.com",
        pass: "tankionline123",
      },
    });

    console.log("Response Object:");

    const mailOptions = {
      from: "chinar-minerals-transporter@outlook.com",
      to: "sabdulrehman67@gmail.com",
      subject: subject,
      text: `
                First Name: ${fname}
                Last Name: ${lname}
                Phone Number: ${number}
                Email: ${email}
                Subject: ${subject}
                Message: ${message}
  `,
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err: any, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });

    return NextResponse.json({
      message: "Email sent successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Email sending error:", error);
  }
}
