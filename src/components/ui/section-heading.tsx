import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <span className='inline-flex w-fit items-center gap-2 rounded-full border-2 border-border-strong bg-surface-muted px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-2'>
          <span className='h-1.5 w-1.5 rounded-full bg-accent' />
          {eyebrow}
        </span>
      )}
      <h2 className='font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl'>
        {title}
      </h2>
      {description && (
        <p className='max-w-2xl text-base text-foreground/70 sm:text-lg'>
          {description}
        </p>
      )}
    </div>
  );
}
