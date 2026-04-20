"use client";

import React from "react";
import { Column, Flex, Heading, Text, Tag } from "@once-ui-system/core";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface Experience {
  company: string;
  timeframe: string;
  role: string;
  achievements: React.ReactNode[];
}

export function AnimatedExperience({ experiences }: { experiences: Experience[] }) {
  return (
    <Column fillWidth gap="xl" style={{ position: "relative" }}>
      {/* Vertical Timeline Line */}
      <div style={{
        position: "absolute",
        left: "32px",
        top: "0",
        bottom: "0",
        width: "2px",
        background: "linear-gradient(to bottom, var(--brand-solid-strong) 0%, rgba(160, 20, 240, 0) 100%)",
        opacity: 0.3,
        zIndex: 0
      }} />

      {experiences.map((exp, index) => (
        <motion.div
          key={`${exp.company}-${index}`}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: "flex", gap: "32px", position: "relative", zIndex: 1 }}
        >
          {/* Timeline Dot */}
          <motion.div
            whileHover={{ scale: 1.2, backgroundColor: "var(--brand-solid-strong)" }}
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "var(--neutral-alpha-strong)",
              border: "2px solid var(--brand-solid-strong)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 0 20px rgba(160, 20, 240, 0.2)",
              backdropFilter: "blur(4px)"
            }}
          >
            <Briefcase size={24} color="var(--brand-solid-strong)" />
          </motion.div>

          {/* Content Card */}
          <motion.div
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              flex: 1,
              padding: "32px",
              background: "var(--brand-alpha-weak)",
              border: "1px solid var(--neutral-medium)",
              borderRadius: "24px",
              backdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }}
          >
            <Flex fillWidth horizontal="space-between" vertical="end" wrap>
              <Heading as="h3" variant="heading-strong-xl">
                {exp.company}
              </Heading>
              <Tag size="m" variant="brand">
                {exp.timeframe}
              </Tag>
            </Flex>
            
            <Text variant="heading-default-l" onBackground="brand-weak">
              {exp.role}
            </Text>

            <Column as="ul" gap="12" style={{ paddingLeft: "20px" }}>
              {exp.achievements.map((achievement, i) => (
                <Text
                  as="li"
                  variant="body-default-m"
                  key={i}
                  style={{ listStyleType: "disc", color: "var(--neutral-on)" }}
                >
                  {achievement}
                </Text>
              ))}
            </Column>
          </motion.div>
        </motion.div>
      ))}
    </Column>
  );
}
