import { ProjectItem, ServiceItem, CertificationItem, PackageTier } from '../types/portfolio';

export const portfolioProjects: ProjectItem[] = [
  {
    id: 'dark-purple-landing',
    number: '01',
    name: 'Dark & Purple Interactive UI',
    category: '(Angular & Animations)',
    col1Img1: '/project_purple.png',
    col1Img2: '/project_purple.png',
    col2Img: '/project_purple.png',
    liveUrl: 'https://landing-page-dark-theme-mauve.vercel.app/',
    githubUrl: 'https://github.com/ahmedelmogy1',
    tools: ['Angular', 'Tailwind CSS', 'CSS Keyframes', 'RGB Glow Effects', 'Responsive UI'],
    overview:
      'A modern landing page designed with Angular featuring dynamic RGB hover transitions, subtle micro-interactions on icons, fluid fade-in animations, and high responsiveness across all device viewports.',
    deliverables: [
      'Dynamic RGB Hover Glow on Cards',
      'Smooth CSS Animations & Micro-Interactions',
      'Modular Clean Component Architecture',
      'Fully Responsive Mobile-First Design',
    ],
  },
  {
    id: 'fresh-cart-ecommerce',
    number: '02',
    name: 'Fresh Cart E-Commerce',
    category: '(Angular & TypeScript)',
    col1Img1: '/project_freshcart.png',
    col1Img2: '/project_freshcart.png',
    col2Img: '/project_freshcart.png',
    liveUrl: 'https://ahmedelmogy1.github.io/e-commerce/home',
    githubUrl: 'https://github.com/ahmedelmogy1',
    tools: ['Angular', 'TypeScript', 'Bootstrap 5', 'RxJS', 'REST APIs', 'Route Guards'],
    overview:
      'A fully responsive e-commerce platform built with Angular and TypeScript. Features product browsing, real-time cart state management, checkout flows, custom product sliders, and lazy-loaded modules for high performance.',
    deliverables: [
      'Product Browsing, Categories & Filtering',
      'Real-time Cart Management & Checkout Flow',
      'Lazy Loaded Routing & Component Architecture',
      'Route Security with Angular Guards & Custom Pipes',
    ],
  },
  {
    id: 'yummy-recipe-app',
    number: '03',
    name: 'Yummy Gourmet Recipe App',
    category: '(JavaScript & REST API)',
    col1Img1: '/project_yummy.png',
    col1Img2: '/project_yummy.png',
    col2Img: '/project_yummy.png',
    liveUrl: 'https://ahmedelmogy1.github.io/Yummy/',
    githubUrl: 'https://github.com/ahmedelmogy1',
    tools: ['JavaScript (ES6+)', 'REST APIs', 'Async/Await', 'DOM Manipulation', 'Bootstrap 5'],
    overview:
      'A dynamic recipe application utilizing external APIs to search, fetch, and display food recipes and culinary instructions with advanced DOM manipulation, filtering, and real-time form validation.',
    deliverables: [
      'Dynamic Recipe Search & Categories Feed',
      'Detailed Ingredients & Cooking Guide View',
      'Regex Client-Side Form Validation',
      'Fast Asynchronous API Integration',
    ],
  },
];

export const marqueeShowcase = [
  {
    title: 'Dark & Purple UI',
    src: '/project_purple.png',
    link: 'https://landing-page-dark-theme-mauve.vercel.app/',
    tag: 'Angular • UI Motion',
  },
  {
    title: 'Fresh Cart Platform',
    src: '/project_freshcart.png',
    link: 'https://ahmedelmogy1.github.io/e-commerce/home',
    tag: 'Angular • E-Commerce',
  },
  {
    title: 'Yummy Recipe App',
    src: '/project_yummy.png',
    link: 'https://ahmedelmogy1.github.io/Yummy/',
    tag: 'JavaScript • REST API',
  },
  {
    title: 'Landing Page System',
    src: '/project_purple.png',
    link: 'https://landing-page-dark-theme-mauve.vercel.app/',
    tag: 'Tailwind CSS • RGB Effects',
  },
  {
    title: 'E-Commerce Storefront',
    src: '/project_freshcart.png',
    link: 'https://ahmedelmogy1.github.io/e-commerce/home',
    tag: 'TypeScript • RxJS',
  },
  {
    title: 'Gourmet Meal Finder',
    src: '/project_yummy.png',
    link: 'https://ahmedelmogy1.github.io/Yummy/',
    tag: 'DOM • Form Validation',
  },
];

export const portfolioServices: ServiceItem[] = [
  {
    number: '01',
    name: 'ANGULAR & SPA ARCHITECTURE',
    description:
      'Building scalable, high-performance Single Page Applications (SPAs) with Angular, TypeScript, RxJS, route guards, and modular lazy-loaded components.',
  },
  {
    number: '02',
    name: 'RESPONSIVE & PIXEL-PERFECT UI',
    description:
      'Translating Figma & Adobe XD designs into responsive, mobile-first layouts using Tailwind CSS, Bootstrap, and cross-browser compatibility practices.',
  },
  {
    number: '03',
    name: 'MODERN TYPESCRIPT & JAVASCRIPT',
    description:
      'Writing type-safe, clean, and maintainable code adhering to modern ECMAScript standards, object-oriented principles, and scalable logic.',
  },
  {
    number: '04',
    name: 'REST API & STATE MANAGEMENT',
    description:
      'Integrating backend APIs, asynchronous data handling, reactive state management, dynamic filtering, and robust client-side validation.',
  },
  {
    number: '05',
    name: 'INTERACTIVE UI & ANIMATIONS',
    description:
      'Crafting modern dark & vibrant themes featuring smooth CSS animations, interactive UI components, custom sliders, and micro-interactions.',
  },
];

export const portfolioCertifications: CertificationItem[] = [
  { title: 'Information Systems B.Sc.', org: 'Graduation Class of 2026', type: 'academic' },
  { title: 'Front-End Web Development', org: 'Route Academy Diploma', type: 'diploma' },
  { title: 'Programming Fundamentals', org: 'Route Academy Diploma', type: 'diploma' },
  { title: 'Front-End Web Development', org: 'Information Technology Institute (ITI)', type: 'diploma' },
];

export const portfolioPackages: PackageTier[] = [
  {
    id: 'landing',
    name: 'High-Impact Landing Page',
    tagline: 'Pixel-perfect, modern responsive landing page with animations',
    timeline: '3-5 Days',
    features: [
      'Tailwind CSS / Bootstrap 5 Architecture',
      'Fluid Micro-Animations & Dark/Light Themes',
      'Mobile-First & Cross-Browser Tested',
      'SEO Friendly & Fast Lighthouse Score',
      'Contact Form & API Integration',
    ],
  },
  {
    id: 'spa',
    name: 'Angular SPA Web App',
    tagline: 'Complex, modular Single Page Application with dynamic state',
    timeline: '1-2 Weeks',
    popular: true,
    features: [
      'Angular & TypeScript Robust Architecture',
      'Modular Lazy Loading & Route Guards',
      'RxJS & RESTful API Data Streams',
      'State Management & Custom Pipes',
      'Responsive Mobile UI & Sliders',
      'Clean, Documented & Maintainable Code',
    ],
  },
  {
    id: 'fulltime',
    name: 'Full-Time / Long-Term Role',
    tagline: 'Dedicated Front-End Engineer for engineering teams',
    timeline: 'Immediate Availability',
    features: [
      'Front-End Engineering (Angular, TypeScript, JS)',
      'Git / GitHub Version Control & Team Workflows',
      'Agile / Scrum Sprint Participation',
      'Continuous Learning & Problem Solving',
      'Degree in Information Systems (2026)',
      'Route & ITI Diplomas Certified',
    ],
  },
];
