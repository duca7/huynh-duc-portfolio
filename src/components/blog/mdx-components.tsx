import type { MDXComponents } from 'mdx/types';
import { cn } from '@/lib/utils';

export const mdxComponents: MDXComponents = {
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        'mt-12 scroll-mt-28 font-display text-2xl font-bold tracking-tight sm:text-3xl',
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        'mt-8 scroll-mt-28 font-display text-xl font-bold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn('mt-4 leading-relaxed text-foreground/80', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cn(
        'mt-4 list-disc space-y-2 pl-6 text-foreground/80',
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <a
      className={cn(
        'font-semibold text-accent-2 underline underline-offset-4',
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        'mt-5 overflow-x-auto rounded-xl border-2 border-border-strong bg-surface-muted p-4 text-sm shadow-brutal-sm',
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(
        'rounded-md border border-border-strong/40 bg-surface-muted px-1.5 py-0.5 font-mono text-[0.85em]',
        className,
      )}
      {...props}
    />
  ),
};
