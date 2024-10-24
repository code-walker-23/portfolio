"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("Running on server");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  console.log("Sender Email:", senderEmail);
  console.log("Message:", message);

  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "vinaychhabra786@gmail.com",
      subject: "Message from contact form",
      text: "Hello World!",
    });
    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
