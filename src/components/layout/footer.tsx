import Link from 'next/link';
import { Mail, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/ui/icons';
import { siteConfig } from '@/data/site';

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  mail: Mail,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='border-t-2 border-border-strong bg-surface'>
      <Container className='flex flex-col gap-8 py-12'>
        <div className='flex flex-col justify-between gap-8 sm:flex-row'>
          <div>
            <p className='font-display text-2xl font-bold'>
              {siteConfig.name}
              <span className='text-accent-2'>.</span>
            </p>
            <p className='mt-2 max-w-sm text-sm text-foreground/70'>
              {siteConfig.description}
            </p>
          </div>

          <div className='flex flex-wrap gap-3'>
            {siteConfig.socials.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel='noreferrer'
                  aria-label={social.label}
                  className='inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-border-strong bg-background transition-transform duration-150 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground'
                >
                  <Icon className='h-[18px] w-[18px]' />
                </Link>
              );
            })}
          </div>
        </div>

        <div className='flex flex-col-reverse items-center justify-between gap-4 border-t-2 border-dashed border-border-strong pt-6 sm:flex-row'>
          <p className='text-sm text-foreground/60'>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <Link
            href='#hero'
            className='inline-flex items-center gap-1 text-sm font-semibold text-foreground/80 hover:text-accent-2'
          >
            Back to top <ArrowUpRight size={14} />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
