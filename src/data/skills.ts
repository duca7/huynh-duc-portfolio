export type Skill = {
  name: string;
  level: 'Core' | 'Proficient' | 'Familiar';
};

export const skillCategories: { title: string; skills: Skill[] }[] = [
  {
    title: 'Languages & Frameworks',
    skills: [
      { name: 'React', level: 'Core' },
      { name: 'Next.js', level: 'Core' },
      { name: 'TypeScript', level: 'Core' },
      { name: 'JavaScript (ES6+)', level: 'Core' },
    ],
  },
  {
    title: 'Styling & Design',
    skills: [
      { name: 'Tailwind CSS', level: 'Core' },
      { name: 'Figma → Code', level: 'Core' },
      { name: 'Framer Motion', level: 'Proficient' },
      { name: 'CSS / SCSS', level: 'Core' },
    ],
  },
  {
    title: 'Engineering & Tooling',
    skills: [
      { name: 'Performance Optimization', level: 'Core' },
      { name: 'Testing (Jest/RTL)', level: 'Proficient' },
      { name: 'REST / GraphQL', level: 'Proficient' },
      { name: 'CI/CD & Vercel', level: 'Familiar' },
    ],
  },
];

export const achievements = [
  'Shipped 15+ production web apps used by 500K+ monthly users',
  'Improved Core Web Vitals (LCP) by 48% on a high-traffic e-commerce app',
  'Built and open-sourced a component library adopted across 6 teams',
  'Mentored 4 junior engineers through structured code reviews',
];
