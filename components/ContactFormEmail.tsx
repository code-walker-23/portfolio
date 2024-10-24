import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

import React from "react";
type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};
const ContactFormEmail = ({ message, senderEmail }: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Heading>
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
