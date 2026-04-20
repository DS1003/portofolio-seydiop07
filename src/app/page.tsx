"use client";

import React from "react";
import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Schema } from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { motion } from "framer-motion";
import { MoveRight, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center" style={{ position: 'relative', overflow: 'hidden' }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Background Gradient Animation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 90, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "140%",
          height: "140%",
          background: "radial-gradient(circle, rgba(160, 20, 240, 0.15) 0%, rgba(0, 0, 0, 0) 60%)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      <Column fillWidth paddingY="24" gap="l" style={{ zIndex: 1 }}>
        <Column maxWidth="m">
          {home.featured.display && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
                <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false} href={home.featured.href}>
                  <Row paddingY="2">{home.featured.title}</Row>
                </Badge>
              </RevealFx>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ paddingBottom: "16px" }}
          >
            <Heading wrap="balance" variant="display-strong-xl" style={{ lineHeight: "1.1" }}>
              {home.headline} <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>|</motion.span>
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            style={{ paddingBottom: "32px", paddingLeft: "4px" }}
          >
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            style={{ paddingLeft: "12px", display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <Button
              id="view-projects"
              data-border="rounded"
              href="#projects"
              variant="primary"
              size="l"
              weight="default"
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                Voir les Projets
                <MoveRight size={18} />
              </Flex>
            </Button>
            <Button
              id="hire-me"
              data-border="rounded"
              href="#contact"
              variant="secondary"
              size="l"
              weight="default"
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                Me Recruter
                <Briefcase size={18} />
              </Flex>
            </Button>
          </motion.div>
        </Column>
      </Column>

      <div id="projects" style={{ width: "100%", scrollMarginTop: "100px" }}>
        <Projects />
      </div>

      <div id="services" style={{ width: "100%", scrollMarginTop: "100px" }}>
        <Services />
      </div>

      <div id="contact" style={{ width: "100%", scrollMarginTop: "100px" }}>
        <Contact />
      </div>

      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
