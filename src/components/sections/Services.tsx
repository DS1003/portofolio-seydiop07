"use client";

import React from "react";
import { Column, Flex, Heading, Text } from "@once-ui-system/core";
import { motion } from "framer-motion";
import { PenTool, Code, Cloud, ShoppingCart } from "lucide-react";

const servicesData = [
  {
    title: "UI/UX Design",
    description: "Conception d'interfaces intuitives, esthétiques et centrées sur l'utilisateur. Du wireframing au prototypage haute fidélité, je me concentre sur la création d'expériences fluides.",
    icon: <PenTool size={32} color="var(--brand-solid-strong)" />
  },
  {
    title: "Développement Web",
    description: "Création d'applications web rapides, responsives et accessibles en utilisant des technologies modernes telles que Next.js, React et TypeScript.",
    icon: <Code size={32} color="var(--brand-solid-strong)" />
  },
  {
    title: "Développement SaaS",
    description: "Architecture de plateformes SaaS sécurisées et évolutives. Je construis des backends robustes avec Node.js, Prisma et PostgreSQL.",
    icon: <Cloud size={32} color="var(--brand-solid-strong)" />
  },
  {
    title: "Solutions E-commerce",
    description: "Création de boutiques en ligne optimisées pour la conversion. J'intègre des passerelles de paiement modernes et développe des marketplaces performantes.",
    icon: <ShoppingCart size={32} color="var(--brand-solid-strong)" />
  }
];

export function Services() {
  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      <Heading as="h2" variant="display-strong-xs" marginBottom="20">
        Mes Services
      </Heading>

      <Flex gap="24" wrap style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {servicesData.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}
            style={{
              padding: "32px",
              background: "var(--brand-alpha-weak)",
              border: "1px solid var(--neutral-medium)",
              borderRadius: "24px",
              backdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              cursor: "pointer"
            }}
          >
            <div style={{
              width: "60px",
              height: "60px",
              borderRadius: "16px",
              background: "var(--brand-alpha-medium)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {service.icon}
            </div>
            <Heading as="h3" variant="heading-strong-l">
              {service.title}
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {service.description}
            </Text>
          </motion.div>
        ))}
      </Flex>
    </Column>
  );
}
