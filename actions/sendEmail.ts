"use server";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/components/ContactFormEmail";
import React from "react";

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
  let data;
  try {
    data = await resend.emails.send({
      from: "Conatct Form <onboarding@resend.com>",
      to: "vinaychhabra786@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
  return { data };
};
