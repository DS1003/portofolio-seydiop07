"use client";

import React, { useState } from "react";
import { Column, Flex, Heading, Text, Button } from "@once-ui-system/core";
import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Usually connects to an API/Email service
    alert("Message envoyé avec succès !");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Column fillWidth gap="xl" marginBottom="64" paddingX="l" id="contact">
      <Heading as="h2" variant="display-strong-xs" marginBottom="20">
        Discutons Ensemble
      </Heading>

      <Flex mobileDirection="column" gap="40" fillWidth>
        {/* Contact Info */}
        <Column flex={1} gap="24">
          <Text variant="heading-strong-xl" marginBottom="16">
            Prêt à démarrer votre prochain projet ?
          </Text>
          <Text variant="body-default-l" onBackground="neutral-weak" marginBottom="24">
            N'hésitez pas à me contacter pour des collaborations, des demandes de projets, ou simplement pour dire bonjour. Je suis toujours ouvert aux nouveaux projets et aux idées créatives.
          </Text>

          <Flex direction="column" gap="20">
            <motion.a 
              href="mailto:mouhaleecr7@gmail.com"
              whileHover={{ x: 5 }}
              style={{ display: "flex", alignItems: "center", gap: "16px", textDecoration: "none", color: "inherit" }}
            >
              <div style={{ padding: "12px", background: "var(--brand-alpha-weak)", borderRadius: "12px" }}>
                <Mail size={24} color="var(--brand-solid-strong)" />
              </div>
              <Flex direction="column">
                <Text variant="label-strong-m">Email</Text>
                <Text variant="body-default-m" onBackground="neutral-weak">mouhaleecr7@gmail.com</Text>
              </Flex>
            </motion.a>

            <motion.a 
              href="tel:+221785993546"
              whileHover={{ x: 5 }}
              style={{ display: "flex", alignItems: "center", gap: "16px", textDecoration: "none", color: "inherit" }}
            >
              <div style={{ padding: "12px", background: "var(--brand-alpha-weak)", borderRadius: "12px" }}>
                <Phone size={24} color="var(--brand-solid-strong)" />
              </div>
              <Flex direction="column">
                <Text variant="label-strong-m">Téléphone</Text>
                <Text variant="body-default-m" onBackground="neutral-weak">+221 78 599 35 46</Text>
              </Flex>
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/seydina-mouhammad-diop-98546121b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              style={{ display: "flex", alignItems: "center", gap: "16px", textDecoration: "none", color: "inherit" }}
            >
              <div style={{ padding: "12px", background: "var(--brand-alpha-weak)", borderRadius: "12px" }}>
                <ExternalLink size={24} color="var(--brand-solid-strong)" />
              </div>
              <Flex direction="column">
                <Text variant="label-strong-m">LinkedIn</Text>
                <Text variant="body-default-m" onBackground="neutral-weak">Seydina Mouhammad Diop</Text>
              </Flex>
            </motion.a>
          </Flex>
        </Column>

        {/* Contact Form */}
        <Column flex={1}>
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              padding: "40px",
              background: "var(--brand-alpha-weak)",
              border: "1px solid var(--neutral-medium)",
              borderRadius: "24px",
              backdropFilter: "blur(12px)"
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label htmlFor="name" style={{ fontSize: "14px", fontWeight: "600", color: "var(--neutral-on)" }}>Nom</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Moussa Diop"
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  border: "1px solid var(--neutral-strong)",
                  background: "var(--neutral-alpha-weak)",
                  color: "var(--neutral-on)",
                  outline: "none",
                  fontSize: "16px"
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label htmlFor="email" style={{ fontSize: "14px", fontWeight: "600", color: "var(--neutral-on)" }}>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  border: "1px solid var(--neutral-strong)",
                  background: "var(--neutral-alpha-weak)",
                  color: "var(--neutral-on)",
                  outline: "none",
                  fontSize: "16px"
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label htmlFor="message" style={{ fontSize: "14px", fontWeight: "600", color: "var(--neutral-on)" }}>Message</label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Parlez-moi de votre projet..."
                rows={4}
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  border: "1px solid var(--neutral-strong)",
                  background: "var(--neutral-alpha-weak)",
                  color: "var(--neutral-on)",
                  outline: "none",
                  fontSize: "16px",
                  resize: "vertical"
                }}
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="l"
              weight="default"
              style={{ justifyContent: "center", marginTop: "8px" }}
            >
              <Flex gap="8" vertical="center">
                Envoyer le message <Send size={18} />
              </Flex>
            </Button>
          </motion.form>
        </Column>
      </Flex>
    </Column>
  );
}
