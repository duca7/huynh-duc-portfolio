'use client';

import { cn } from '@/lib/utils';
import type { ProjectCategory } from '@/data/projects';

export function ProjectFilter({
  categories,
  active,
  onChange,
}: {
  categories: ProjectCategory[];
  active: ProjectCategory;
  onChange: (category: ProjectCategory) => void;
}) {
  return (
    <div
      role='tablist'
      aria-label='Filter projects by category'
      className='flex flex-wrap items-center justify-center gap-2 sm:justify-start'
    >
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type='button'
            role='tab'
            aria-selected={isActive}
            onClick={() => onChange(category)}
            className={cn(
              'rounded-lg border-2 border-border-strong px-4 py-2 text-sm font-bold transition-all duration-150',
              isActive
                ? 'bg-accent text-accent-foreground shadow-brutal-sm'
                : 'bg-surface text-foreground/70 hover:-translate-y-0.5 hover:text-foreground',
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
