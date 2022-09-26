import sgMail from "@sendgrid/mail";
import { MailDataRequired } from "@sendgrid/mail/src/mail";
import dotenv from "dotenv";
import { NextApiRequest, NextApiResponse } from "next";
export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse
) {
  dotenv.config();

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY as string;
  const USER = process.env.USER;
  const PASSWORD = process.env.PASSWORD;

  sgMail.setApiKey(SENDGRID_API_KEY);

  const mailData: MailDataRequired = {
    from: USER as string,
    to: USER,
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  sgMail
    .send(mailData)
    .then(() => {
      console.log("email sent");
    })
    .catch((err) => console.error(err));
  res.status(200);
  res.send("Success");
}
