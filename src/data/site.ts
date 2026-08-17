export const siteConfig = {
  name: 'Alex Rivera',
  role: 'Frontend Developer',
  tagline: 'I build fast, accessible, pixel-perfect web experiences.',
  description:
    'Frontend Developer specializing in React, Next.js, TypeScript and performance-obsessed, accessible interfaces — from Figma to production.',
  location: 'Remote / Worldwide',
  email: 'hello@alexrivera.dev',
  resumeUrl: '/resume.pdf',
  nav: [
    { label: 'Home', href: '/#hero' },
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/#contact' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'linkedin' },
    { label: 'Twitter', href: 'https://twitter.com/', icon: 'twitter' },
    { label: 'Email', href: 'mailto:hello@alexrivera.dev', icon: 'mail' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
