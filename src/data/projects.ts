export type ProjectCategory =
  | 'All'
  | 'React'
  | 'Next.js'
  | 'TypeScript'
  | 'UI/UX';

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  categories: ProjectCategory[];
  tech: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'nova-dashboard',
    title: 'Nova Analytics Dashboard',
    description:
      'A real-time analytics dashboard with data visualizations, dark mode, and sub-second interactions for 50K+ daily users.',
    image: '/projects/nova-dashboard.svg',
    categories: ['React', 'Next.js', 'TypeScript'],
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Recharts'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com/',
    featured: true,
  },
  {
    slug: 'orbit-commerce',
    title: 'Orbit Commerce',
    description:
      'A performance-first storefront with a 48% LCP improvement, built with the App Router and edge rendering.',
    image: '/projects/orbit-commerce.svg',
    categories: ['Next.js', 'TypeScript'],
    tech: ['Next.js', 'Stripe', 'Tailwind', 'Zod'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com/',
    featured: true,
  },
  {
    slug: 'pulse-design-system',
    title: 'Pulse Design System',
    description:
      'An open-source, accessible component library with Figma-to-code parity, adopted across 6 product teams.',
    image: '/projects/pulse-design-system.svg',
    categories: ['React', 'UI/UX', 'TypeScript'],
    tech: ['React', 'Storybook', 'Radix UI', 'TypeScript'],
    sourceUrl: 'https://github.com/',
    featured: true,
  },
  {
    slug: 'sprint-planner',
    title: 'Sprint Planner',
    description:
      'A drag-and-drop agile planning tool with optimistic UI updates and real-time collaboration.',
    image: '/projects/sprint-planner.svg',
    categories: ['React', 'TypeScript'],
    tech: ['React', 'dnd-kit', 'Firebase'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com/',
  },
  {
    slug: 'aperture-portfolio',
    title: 'Aperture Portfolio Builder',
    description:
      'A no-code portfolio builder for photographers with a custom drag-and-drop layout engine.',
    image: '/projects/aperture-portfolio.svg',
    categories: ['Next.js', 'UI/UX'],
    tech: ['Next.js', 'Framer Motion', 'Cloudinary'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com/',
  },
  {
    slug: 'signal-chat',
    title: 'Signal Chat UI',
    description:
      'A polished, accessible chat interface with virtualization for 100K+ message threads.',
    image: '/projects/signal-chat.svg',
    categories: ['React', 'UI/UX'],
    tech: ['React', 'TanStack Virtual', 'WebSockets'],
    sourceUrl: 'https://github.com/',
  },
];

export const projectCategories: ProjectCategory[] = [
  'All',
  'React',
  'Next.js',
  'TypeScript',
  'UI/UX',
];
