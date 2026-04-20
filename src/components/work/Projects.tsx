"use client";

import React, { useState } from "react";
import { Column, Flex, Heading, Text } from "@once-ui-system/core";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Info, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  link: string;
  technologies: string[];
  image: string;
}

const projectsData: Project[] = [
  {
    title: "Mbor B. Store",
    description: "Une plateforme e-commerce élégante offrant une expérience d'achat fluide pour les consommateurs modernes.",
    link: "https://mbor-b-store-web-site17.vercel.app/",
    technologies: ["Next.js", "Tailwind", "TypeScript", "E-Commerce"],
    image: "/images/gallery/barakaS4.png",
  },
  {
    title: "Trésor Moomel",
    description: "Une marketplace numérique dédiée aux cosmétiques bio africains, incluant un blog complet et des fonctionnalités d'achat.",
    link: "https://tresor-moomel.vercel.app/",
    technologies: ["React", "Node.js", "MongoDB", "UI/UX"],
    image: "/images/gallery/sparklearn.png",
  },
  {
    title: "Amicale des Femmes de la Présidence",
    description: "Plateforme web officielle facilitant la connectivité et le partage d'informations pour l'Amicale des Femmes de la Présidence.",
    link: "https://www.amicaledesfemmesdelapresidence.com/",
    technologies: ["Next.js", "CMS", "Web Design"],
    image: "/images/gallery/loginSplash.png",
  },
  {
    title: "Marketplace 2.0",
    description: "Une marketplace multi-vendeurs de nouvelle génération axée sur la vitesse, les transactions fluides et l'engagement utilisateur.",
    link: "https://marketplace2-0-nu.vercel.app/",
    technologies: ["React", "Prisma", "PostgreSQL", "Tailwind CSS"],
    image: "/images/gallery/odc-inside.png",
  },
  {
    title: "Baraka Shop",
    description: "Une boutique d'électronique et de revente en ligne robuste, conçue pour l'optimisation des conversions.",
    link: "https://baraka-shop-alpha.vercel.app/",
    technologies: ["Next.js", "Stripe", "Framer Motion"],
    image: "/images/gallery/vertical-2.jpg",
  }
];

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      <Heading as="h2" variant="display-strong-xs" marginBottom="20">
        Projets Sélectionnés
      </Heading>
      
      <Flex direction="column" gap="48" fillWidth>
        {projectsData.map((project, index) => {
          const isHovered = hoveredIndex === index;
          
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                animate={{
                  y: isHovered ? -8 : 0,
                  boxShadow: isHovered 
                    ? "0 30px 60px -15px rgba(160, 20, 240, 0.15), 0 0 0 1px rgba(160, 20, 240, 0.3)" 
                    : "0 10px 30px -10px rgba(0, 0, 0, 0.2), 0 0 0 1px var(--neutral-medium)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0",
                  background: "var(--brand-alpha-weak)",
                  borderRadius: "24px",
                  alignItems: "stretch",
                  flexWrap: "wrap",
                  position: "relative",
                  overflow: "hidden",
                  backdropFilter: "blur(16px)",
                }}
              >
                {/* Image Section - Left Panel */}
                <div style={{
                  flex: "1 1 350px",
                  minHeight: "300px",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  <motion.div
                    animate={{ scale: isHovered ? 1.08 : 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{
                      position: "absolute",
                      top: 0, left: 0, right: 0, bottom: 0,
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  {/* Gradient Overlay that shifts on hover */}
                  <motion.div 
                    animate={{ 
                      opacity: isHovered ? 0.8 : 0.2,
                      background: isHovered 
                        ? "linear-gradient(to top, rgba(160,20,240,0.8), transparent)"
                        : "linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                    }}
                    transition={{ duration: 0.4 }}
                    style={{
                      position: "absolute",
                      bottom: 0, left: 0, right: 0, top: 0,
                    }}
                  />
                  
                  {/* Floating Live Demo CTA on Image */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          position: "absolute",
                          bottom: "24px",
                          left: "0",
                          right: "0",
                          display: "flex",
                          justifyContent: "center"
                        }}
                      >
                        <motion.a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            padding: "12px 24px",
                            background: "rgba(255, 255, 255, 0.95)",
                            borderRadius: "100px",
                            color: "var(--brand-solid-strong)",
                            backdropFilter: "blur(10px)",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            textDecoration: "none",
                            fontWeight: "bold",
                            boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                          }}
                        >
                          Voir en Direct <ExternalLink size={18} />
                        </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Content Section - Right Panel */}
                <Flex direction="column" flex={2} style={{ minWidth: "300px", padding: "40px" }} gap="24" vertical="center" justify="center">
                  <div style={{ width: "100%" }}>
                    <motion.div
                      animate={{ x: isHovered ? 8 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Heading as="h3" variant="display-default-xs" style={{ marginBottom: "16px" }}>
                        {project.title}
                      </Heading>
                    </motion.div>

                    <Text variant="body-default-l" onBackground="neutral-weak" style={{ lineHeight: "1.6", marginBottom: "24px", display: "block" }}>
                      {project.description}
                    </Text>

                    <Flex gap="12" wrap marginBottom="32">
                      {project.technologies.map((tech, i) => (
                        <motion.div 
                          key={tech} 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * i }}
                          style={{
                            padding: "6px 16px",
                            background: "var(--brand-alpha-weak)",
                            border: "1px solid var(--brand-alpha-medium)",
                            borderRadius: "100px",
                            color: "var(--brand-solid-strong)",
                            fontSize: "14px",
                            fontWeight: 500,
                            letterSpacing: "0.5px"
                          }}
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </Flex>
                    
                    <Flex gap="16">
                      <motion.a 
                        href={project.link} 
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "12px 0",
                          color: "var(--neutral-on)",
                          fontWeight: 600,
                          textDecoration: "none",
                          borderBottom: isHovered ? "2px solid var(--brand-solid-strong)" : "2px solid transparent",
                          transition: "all 0.3s ease"
                        }}
                      >
                        Voir les Détails <ArrowRight size={18} color={isHovered ? "var(--brand-solid-strong)" : "currentColor"} />
                      </motion.a>
                    </Flex>
                  </div>
                </Flex>
              </motion.div>
            </motion.div>
          );
        })}
      </Flex>
    </Column>
  );
}
