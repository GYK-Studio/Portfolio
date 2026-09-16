export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  year: string;
}

export const projects: Project[] = [
  {
    title: 'E-commerce Moderno',
    description: 'Tienda online rápida con Astro + checkout optimizado. / Fast online store built with Astro + optimized checkout.',
    tags: ['Astro', 'E-commerce', 'UI/UX'],
    link: '#',
    year: '2025',
  },
  {
    title: 'Landing para Startup',
    description: 'Landing page de alta conversión con animaciones ligeras. / High-conversion landing with lightweight animations.',
    tags: ['Landing', 'SEO', 'Copywriting'],
    link: '#',
    year: '2025',
  },
  {
    title: 'Dashboard SaaS',
    description: 'Panel administrativo con gráficas y modo oscuro. / Admin dashboard with charts and dark mode.',
    tags: ['Dashboard', 'SaaS', 'Design System'],
    link: '#',
    year: '2024',
  },
  {
    title: 'Portafolio Creativo',
    description: 'Sitio personal para fotógrafo con galería optimizada. / Personal site for a photographer with optimized gallery.',
    tags: ['Portfolio', 'Fotografía', 'Performance'],
    link: '#',
    year: '2024',
  },
  {
    title: 'Blog + CMS',
    description: 'Blog con colecciones de contenido y newsletter. / Blog with content collections and newsletter.',
    tags: ['Blog', 'Content', 'Astro'],
    link: '#',
    year: '2024',
  },
  {
    title: 'Identidad de Marca',
    description: 'Branding completo: logo, paleta y guía de estilo. / Full branding: logo, palette and style guide.',
    tags: ['Branding', 'Logo', 'UI'],
    link: '#',
    year: '2023',
  },
];
