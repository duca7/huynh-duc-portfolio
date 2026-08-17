'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/data/site';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b-2 border-border-strong bg-background/80 backdrop-blur-md'>
      <Container className='flex h-18 items-center justify-between py-3'>
        <Link
          href='/#hero'
          className='font-display text-lg font-bold tracking-tight'
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
          <span className='text-accent-2'>.</span>
        </Link>

        <nav className='hidden items-center gap-1 md:flex'>
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='rounded-lg px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-surface-muted hover:text-foreground'
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className='hidden items-center gap-3 md:flex'>
          <ThemeToggle />
          <Button href='/#contact' size='sm'>
            Contact Me
          </Button>
        </div>

        <div className='flex items-center gap-2 md:hidden'>
          <ThemeToggle />
          <button
            type='button'
            aria-label='Toggle menu'
            onClick={() => setOpen((v) => !v)}
            className='inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 border-border-strong bg-surface'
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className='overflow-hidden border-t-2 border-border-strong bg-background md:hidden'
          >
            <Container className='flex flex-col gap-1 py-4'>
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className='rounded-lg px-3 py-2.5 text-base font-semibold hover:bg-surface-muted'
                >
                  {item.label}
                </Link>
              ))}
              <Button
                href='/#contact'
                className='mt-2 w-full'
                onClick={() => setOpen(false)}
              >
                Contact Me
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
