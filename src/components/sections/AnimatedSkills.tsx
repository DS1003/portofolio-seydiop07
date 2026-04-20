"use client";

import React from "react";
import { Column, Flex, Heading, Text, Tag } from "@once-ui-system/core";
import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  description: React.ReactNode;
}

export function AnimatedSkills({ skills }: { skills: SkillCategory[] }) {
  // Extract text from ReactNode for easier parsing if needed, but since it's just a fragment of text separated by commas, we can convert it to tags.
  const parseSkills = (description: React.ReactNode): string[] => {
    try {
      // @ts-ignore - simplistic extraction for the known format in content.tsx
      const text = description?.props?.children || "";
      if (typeof text === 'string') {
        return text.split(',').map(s => s.trim());
      }
      return [];
    } catch {
      return [];
    }
  };

  return (
    <Column fillWidth gap="l">
      <Flex wrap gap="24" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        {skills.map((skillGroup, index) => {
          const items = parseSkills(skillGroup.description);
          return (
            <motion.div
              key={skillGroup.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              style={{
                padding: "24px",
                background: "var(--brand-alpha-weak)",
                border: "1px solid var(--neutral-medium)",
                borderRadius: "16px",
                backdropFilter: "blur(8px)",
                display: "flex",
                flexDirection: "column",
                gap: "16px"
              }}
            >
              <Heading as="h3" variant="heading-strong-l" style={{ color: "var(--brand-solid-strong)" }}>
                {skillGroup.title}
              </Heading>
              <Flex gap="8" wrap>
                {items.length > 0 ? (
                  items.map(item => (
                    <motion.div key={item} whileHover={{ scale: 1.1 }}>
                      <Tag size="m" variant="neutral">{item}</Tag>
                    </motion.div>
                  ))
                ) : (
                  <Text variant="body-default-m" onBackground="neutral-weak">{skillGroup.description}</Text>
                )}
              </Flex>
            </motion.div>
          );
        })}
      </Flex>
    </Column>
  );
}
