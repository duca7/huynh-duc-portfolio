import { CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { Badge } from '@/components/ui/badge';
import { skillCategories, achievements } from '@/data/skills';

export function AboutSection() {
  return (
    <section
      id='about'
      className='border-t-2 border-border-strong py-24 sm:py-28'
    >
      <Container className='flex flex-col gap-12'>
        <Reveal>
          <SectionHeading
            eyebrow='About Me'
            title='Frontend engineer with a design-first mindset.'
            description='I bridge the gap between design and engineering — translating Figma files into fast, accessible, production-grade interfaces.'
          />
        </Reveal>

        <div className='grid grid-cols-1 gap-10 lg:grid-cols-5'>
          <Reveal delay={0.05} className='lg:col-span-3'>
            <div className='flex flex-col gap-6'>
              <p className='text-base leading-relaxed text-foreground/80 sm:text-lg'>
                Over the past several years I&apos;ve worked across startups and
                product teams, specializing in React and Next.js architectures,
                component systems, and performance tuning. I care deeply about
                the details — from motion timing to bundle size — because
                that&apos;s what makes a product feel premium.
              </p>
              <ul className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
                {achievements.map((item) => (
                  <li
                    key={item}
                    className='flex items-start gap-2 rounded-xl border-2 border-border-strong bg-surface p-4 text-sm shadow-brutal-sm'
                  >
                    <CheckCircle2
                      size={18}
                      className='mt-0.5 shrink-0 text-accent-2'
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className='lg:col-span-2'>
            <div className='flex flex-col gap-5 rounded-2xl border-2 border-border-strong bg-surface p-6 shadow-brutal'>
              {skillCategories.map((group) => (
                <div key={group.title}>
                  <p className='mb-2 text-xs font-bold uppercase tracking-widest text-foreground/50'>
                    {group.title}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        tone={skill.level === 'Core' ? 'accent' : 'neutral'}
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
