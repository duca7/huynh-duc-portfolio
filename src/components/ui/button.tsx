import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-accent-foreground border-2 border-border-strong shadow-brutal shadow-brutal-hover',
  secondary:
    'bg-accent-2 text-accent-2-foreground border-2 border-border-strong shadow-brutal shadow-brutal-hover',
  outline:
    'bg-transparent text-foreground border-2 border-border-strong shadow-brutal shadow-brutal-hover',
  ghost:
    'bg-transparent text-foreground border-2 border-transparent hover:border-border-strong',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-tight transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background';

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ('href' in props && props.href) {
    const { href, target, rel, onClick } = props;
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      className={classes}
    >
      {children}
    </button>
  );
}
