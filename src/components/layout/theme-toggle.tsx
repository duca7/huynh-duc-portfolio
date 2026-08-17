'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

const emptySubscribe = () => () => {};

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  // Avoids a hydration mismatch: server never knows the persisted theme.
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type='button'
      aria-label='Toggle color theme'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'relative inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 border-border-strong bg-surface text-foreground transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-brutal-sm active:translate-y-0',
        className,
      )}
    >
      {mounted && (isDark ? <Sun size={18} /> : <Moon size={18} />)}
    </button>
  );
}
