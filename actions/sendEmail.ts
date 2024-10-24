"use server";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("Running on server");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  console.log("Sender Email:", senderEmail);
  console.log("Message:", message);

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid Message",
    };
  }
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid Email",
    };
  }

  try {
    const response = await resend.emails.send({
      from: "Conatct Form <onboarding@resend.dev>",
      to: "vinaychhabra786@gmail.com",
      subject: "Message from contact form",
      text: message as string,
      replyTo: senderEmail as string,
    });
    console.log("Email sent successfully:", response);
    return { success: true };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};
