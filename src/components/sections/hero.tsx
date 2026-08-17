'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/data/site';

const floatingBadges = [
  { label: 'React', className: 'left-[4%] top-[18%]', delay: 0 },
  { label: 'TypeScript', className: 'right-[6%] top-[28%]', delay: 0.4 },
  { label: 'Tailwind CSS', className: 'left-[8%] bottom-[22%]', delay: 0.8 },
  { label: 'Next.js', className: 'right-[3%] bottom-[16%]', delay: 1.2 },
];

export function Hero() {
  return (
    <section
      id='hero'
      className='relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-grid'
    >
      {/* Floating background blobs */}
      <motion.div
        aria-hidden
        className='pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl'
        animate={{ y: [0, 24, 0], x: [0, 16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className='pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-accent-2/25 blur-3xl'
        animate={{ y: [0, -28, 0], x: [0, -20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating tech badges (desktop only) */}
      <div className='pointer-events-none absolute inset-0 hidden lg:block'>
        {floatingBadges.map((badge) => (
          <motion.span
            key={badge.label}
            className={`absolute rounded-lg border-2 border-border-strong bg-surface px-3 py-1.5 text-xs font-bold uppercase tracking-wide shadow-brutal-sm ${badge.className}`}
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: badge.delay,
            }}
          >
            {badge.label}
          </motion.span>
        ))}
      </div>

      <Container className='relative py-24 sm:py-28'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className='mx-auto flex max-w-3xl flex-col items-center text-center'
        >
          <span className='mb-6 inline-flex items-center gap-2 rounded-full border-2 border-border-strong bg-surface px-4 py-1.5 text-sm font-semibold shadow-brutal-sm'>
            <Sparkles size={14} className='text-accent-2' />
            Available for new opportunities
          </span>

          <h1 className='font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl'>
            {siteConfig.role.split(' ')[0]}{' '}
            <span className='relative inline-block'>
              <span className='relative z-10'>
                {siteConfig.role.split(' ').slice(1).join(' ')}
              </span>
              <span className='absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 bg-accent sm:h-5' />
            </span>{' '}
            crafting interfaces that convert.
          </h1>

          <p className='mt-6 max-w-xl text-lg text-foreground/70 sm:text-xl'>
            Hi, I&apos;m {siteConfig.name} — I design and build fast,
            accessible, pixel-perfect products with React, Next.js and
            TypeScript.
          </p>

          <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
            <Button href='/#projects' size='lg'>
              View Projects <ArrowUpRight size={18} />
            </Button>
            <Button href='/#contact' size='lg' variant='outline'>
              Contact Me
            </Button>
          </div>
        </motion.div>
      </Container>

      <motion.a
        href='#about'
        aria-label='Scroll to About section'
        className='absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border-2 border-border-strong bg-surface p-2 shadow-brutal-sm'
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
