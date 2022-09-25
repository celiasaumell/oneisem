import * as dotenv from "dotenv";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import SMTPConnection from "nodemailer/lib/smtp-connection";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse
) {
  dotenv.config();
  const USER = process.env.USER;
  const PASSWORD = process.env.PASSWORD;

  const transportOptions: SMTPTransport.Options = {
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
      user: USER,
      password: PASSWORD,
    } as SMTPConnection.AuthenticationType,
  };

  const transporter = nodemailer.createTransport(transportOptions);

  const mailData = {
    from: USER,
    to: USER,
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  res.status(200);
  res.send("Success");
}
