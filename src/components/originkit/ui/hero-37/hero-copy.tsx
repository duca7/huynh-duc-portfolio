// Delivered by Originkit · stack: nextjs · styling: tailwind
'use client';

import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/data/site';

/** Site's real headline/bio/CTAs, using the site's own Button, in place of the demo copy. */
export const HeroCopy = () => (
  <div className='mx-auto flex max-w-3xl flex-col items-center px-6 text-center'>
    <span className='mb-6 inline-flex items-center gap-2 rounded-full border-2 border-border-strong bg-surface px-4 py-1.5 text-sm font-semibold shadow-brutal-sm'>
      <Sparkles size={14} className='text-accent-2' />
      Available for new opportunities
    </span>

    <h1 className='font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl desktop-sm:text-7xl'>
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
      Hi, I&apos;m {siteConfig.name} — I design and build fast, accessible,
      pixel-perfect products with React, Next.js and TypeScript.
    </p>

    <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
      <Button href='/#projects' size='lg'>
        View Projects <ArrowUpRight size={18} />
      </Button>
      <Button href='/#contact' size='lg' variant='outline'>
        Contact Me
      </Button>
    </div>
  </div>
);
