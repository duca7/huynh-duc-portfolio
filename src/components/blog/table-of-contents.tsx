'use client';

import { cn } from '@/lib/utils';
import type { TocItem } from '@/types/blog';

export function TableOfContents({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label='Table of contents'
      className='sticky top-24 hidden max-h-[70vh] overflow-y-auto rounded-2xl border-2 border-border-strong bg-surface p-5 shadow-brutal-sm lg:block'
    >
      <p className='mb-3 text-xs font-bold uppercase tracking-widest text-foreground/50'>
        On this page
      </p>
      <ul className='flex flex-col gap-2 text-sm'>
        {items.map((item) => (
          <li key={item.id} className={cn(item.depth === 3 && 'pl-4')}>
            <a
              href={`#${item.id}`}
              className='text-foreground/70 transition-colors hover:text-accent-2'
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
