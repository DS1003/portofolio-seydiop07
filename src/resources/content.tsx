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
  title: <>Subscribe to {person.name}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
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
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <> Let’s Build The Digital Future !!! 🚀🧩💻</>,
  featured: {
    display: true,
    title: (
      <>Portofolio à 35% !</>
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
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
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
        Designer UI/UX passionné, je combine créativité et expertise technique pour concevoir des interfaces modernes, intuitives et esthétiques. Avec plusieurs années d’expérience en design digital, je maîtrise Figma, Adobe XD et les technologies web pour créer des expériences utilisateur engageantes et optimisées. Mon approche repose sur une compréhension approfondie des besoins des utilisateurs et des tendances actuelles en UI/UX. J’ai travaillé sur divers projets web et mobiles, en intégrant wireframes, prototypes interactifs et parcours utilisateurs optimisés. Mon sens du détail et ma collaboration étroite avec les développeurs garantissent une exécution fluide et efficace de chaque projet.
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
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
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
