import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { ProjectGrid } from '@/components/projects/project-grid';

export function ProjectsSection() {
  return (
    <section
      id='projects'
      className='border-t-2 border-border-strong py-24 sm:py-28'
    >
      <Container className='flex flex-col gap-12'>
        <Reveal>
          <SectionHeading
            eyebrow='Selected Work'
            title='Projects that ship, scale & convert.'
            description='A mix of production apps, open-source tools and design systems — filter by stack to explore.'
          />
        </Reveal>
        <Reveal delay={0.1}>
          <ProjectGrid />
        </Reveal>
      </Container>
    </section>
  );
}
