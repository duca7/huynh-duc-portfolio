import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const toneClasses = {
  neutral: 'bg-surface-muted text-foreground border-border-strong',
  accent: 'bg-accent text-accent-foreground border-border-strong',
  'accent-2': 'bg-accent-2 text-accent-2-foreground border-border-strong',
};

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: keyof typeof toneClasses;
};

export function Badge({
  tone = 'neutral',
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border-2 px-2.5 py-1 text-xs font-bold uppercase tracking-wide transition-transform duration-150 hover:-translate-y-0.5',
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
