import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Logo } from "@once-ui-system/core";

const person: Person = {
  firstName: "Seydina Mouhammad",
  lastName: "Diop",
  name: `Seydina Mouhammad Diop`,
  role: "Développeur FullStack, Lead UI/UX Designer & DevSecOps Enthousiast",
  avatar: "/images/avatar.jpg",
  email: "mouhaleecr7@gmail.com",
  location: "Africa/Dakar", // IANA time zone
  languages: ["Français", "Anglais"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Abonnez-vous à la newsletter de {person.name}</>,
  description: (
    <>
      J'écris occasionnellement sur le design, la technologie, et je partage mes réflexions sur l'intersection entre la créativité et l'ingénierie.
    </>
  ),
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/DS1003",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/seydina-mouhammad-diop-98546121b/",
  },
  {
    name: "Site web",
    icon: "globe",
    link: "https://moomel.sn",
  },
  {
    name: "Portfolio",
    icon: "globe",
    link: "https://www.sparkline.sn/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Accueil",
  title: `Portfolio de ${person.name}`,
  description: `Site web portfolio présentant mon travail en tant que ${person.role}`,
  headline: <>Construisons le Futur Numérique 🚀🧩💻</>,
  featured: {
    display: true,
    title: (
      <>77%...</>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Je suis Seydina, passionné par le design et le développement web & mobile. J’accompagne les entreprises dans leur transformation numérique et conçois des interfaces modernes, intuitives et esthétiques.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description: `Découvrez ${person.name}, ${person.role} de ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Présentation",
    description: (
      <>
        Bonjour, je suis Seydina. Je combine la logique de l'ingénierie avec l'intuition du design.
        En tant que Développeur FullStack et Lead UI/UX Designer, je ne me contente pas d'écrire du code — je conçois des expériences numériques qui connectent les gens.
        <br /><br />
        Mon parcours est animé par une profonde curiosité pour le fonctionnement des choses et les émotions qu'elles suscitent. De l'architecture de systèmes backend robustes à l'affinage des micro-interactions dans une interface utilisateur, j'adopte une approche holistique pour la création de produits.
        <br /><br />
        Qu'il s'agisse de donner vie à la vision d'une startup ou de transformer le flux de travail d'une entreprise, je me concentre sur la livraison de solutions évolutives et performantes qui sont aussi belles que fonctionnelles. Créons ensemble quelque chose d'impactant.
      </>
    ),
  },
  work: {
    display: true,
    title: "Expériences professionnelles",
    experiences: [
      {
        company: "RH PERSPECTIVES",
        timeframe: "2025-07 - Aujourd'hui",
        role: "Développeur Frontend & Lead UI/UX Designer (Stage)",
        achievements: [
          <>Prototypage & Integration Pixel Perfect de solutions</>,
          <>Technologies : OWL, UI/UX Design(Figma), Odoo, NestJS, Neon Postgres, Prisma, AWS, Docker, Angular</>,
        ],
        images: [],
      },
      {
        company: "Sonatel DCIRE / ODC",
        timeframe: "2025-02 - Aujourd'hui",
        role: "Développeur FullStack & Lead UI/UX Designer (Stage)",
        achievements: [
          <>Création d’une solution E2E pour la gestion du cursus de l’Ecole du Code Sonatel Academy</>,
          <>Technologies : NextJS, NestJS, Neon Postgres, Prisma, Figma, Render, Vercel</>,
        ],
        images: [],
      },
      {
        company: "Dakar Multipurpose Terminal (DMT)",
        timeframe: "2024-11 - 2025-01",
        role: "Lead UI/UX Designer & Développeur Frontend (CDD)",
        achievements: [
          <>Refonte des solutions internes et design d’une solution de gestion QHSE</>,
          <>Technologies : NuxtJS, Figma</>,
        ],
        images: [],
      },
      {
        company: "SPARLINE",
        timeframe: "2024-11 - Aujourd'hui",
        role: "Co-Fondateur, Développeur FullStack & Lead UI/UX Designer",
        achievements: [
          <>Accompagnement des entreprises dans leur transformation numérique</>,
          <>Développement de plateformes robustes et formation dans l’optique du Giving Back de ODC</>,
        ],
        images: [],
      },
      {
        company: "Moomel (moomel.sn)",
        timeframe: "2023-01 - 2023-05",
        role: "Développeur FullStack & UI/UX Designer (CDD)",
        achievements: [
          <>Développement d’une marketplace pour cosmétiques bio africains</>,
          <>Création du blog Trésor Moomel</>,
        ],
        images: [],
      },
      {
        company: "Chic & Halal",
        timeframe: "2022 - Aujourd'hui",
        role: "Community Manager (Freelance, à distance)",
        achievements: [],
        images: [],
      },
      {
        company: "Intelcia Dakar",
        timeframe: "2021-07 - 2022-01",
        role: "Conseiller commercial (activité Antichurn SFR)",
        achievements: [],
        images: [],
      },
      {
        company: "Baraka Electronique",
        timeframe: "2019 - 2021",
        role: "Technicien maintenancier & IT Support",
        achievements: [],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formation",
    institutions: [
      {
        name: "Orange Digital Center / Sonatel Academy",
        description: <>Certification Pro Développement Web & Mobile (2024)</>,
      },
      {
        name: "Université Catholique de l’Afrique de l’Ouest",
        description: <>Licence 2 Informatique de Gestion (2018-2020)</>,
      },
      {
        name: "Lycée Blaise Diagne",
        description: <>Baccalauréat L2 (2018)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Compétences techniques",
    skills: [
      {
        title: "Front-end",
        description: (
          <>HTML, CSS, Tailwind CSS, ReactJS, NextJS, NuxtJS, JavaScript, TypeScript</>
        ),
        images: [],
      },
      {
        title: "Back-end",
        description: (
          <>NodeJS, ExpressJS, Laravel, PHP</>
        ),
        images: [],
      },
      {
        title: "Bases de données",
        description: (
          <>MySQL, PostgreSQL, MongoDB, Firebase</>
        ),
        images: [],
      },
      {
        title: "Cloud & Déploiement",
        description: (
          <>Cloudinary, Vercel, Render, Docker, Hostinger</>
        ),
        images: [],
      },
      {
        title: "CMS",
        description: (
          <>WordPress, PrestaShop</>
        ),
        images: [],
      },
      {
        title: "Langages supplémentaires",
        description: (
          <>C, Golang, VB.net, Python, Java</>
        ),
        images: [],
      },
      {
        title: "UI/UX Design",
        description: (
          <>Wireframe, Maquettage, Prototypage, Conception visuelle (affiches, logos, etc.), Figma, Adobe XD</>
        ),
        images: [],
      },
      {
        title: "Mobile",
        description: (
          <>Flutterflow</>
        ),
        images: [],
      },
      {
        title: "Bureautique",
        description: (
          <>Word, PowerPoint, Access, Excel (avancé)</>
        ),
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Écrire sur le design et la tech...",
  description: `Découvrez ce que ${person.name} a fait récemment`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projets",
  title: `Projets – ${person.name}`,
  description: `Projets de design et de développement de ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galerie",
  title: `Galerie de photos – ${person.name}`,
  description: `Une collection de photos par ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/loginSplash.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/sparklearn.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/odc-inside.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/barakaS4.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
