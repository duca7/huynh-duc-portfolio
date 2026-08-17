'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/data/projects';

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className='group relative flex flex-col overflow-hidden rounded-2xl border-2 border-border-strong bg-surface shadow-brutal transition-shadow duration-200 hover:shadow-brutal-lg'
    >
      {project.featured && (
        <span className='absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-md border-2 border-border-strong bg-accent px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-accent-foreground'>
          <Star size={11} fill='currentColor' /> Featured
        </span>
      )}

      {/* Thumbnail */}
      <div className='relative aspect-16/10 w-full overflow-hidden border-b-2 border-border-strong bg-surface-muted'>
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
          className='object-cover transition-transform duration-500 ease-out group-hover:scale-105'
        />
        <div className='absolute inset-0 flex items-center justify-center gap-3 bg-foreground/0 opacity-0 backdrop-blur-0 transition-all duration-300 group-hover:bg-foreground/40 group-hover:opacity-100 group-hover:backdrop-blur-[1px]'>
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target='_blank'
              rel='noreferrer'
              aria-label={`Live demo of ${project.title}`}
              className='inline-flex translate-y-2 items-center gap-1.5 rounded-lg border-2 border-border-strong bg-accent px-3 py-2 text-sm font-bold text-accent-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'
            >
              Live Demo <ArrowUpRight size={14} />
            </Link>
          )}
          {project.sourceUrl && (
            <Link
              href={project.sourceUrl}
              target='_blank'
              rel='noreferrer'
              aria-label={`Source code of ${project.title}`}
              className='inline-flex translate-y-2 items-center gap-1.5 rounded-lg border-2 border-border-strong bg-background px-3 py-2 text-sm font-bold text-foreground opacity-0 transition-all delay-75 duration-300 group-hover:translate-y-0 group-hover:opacity-100'
            >
              <GithubIcon className='h-3.5 w-3.5' /> Code
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className='flex flex-1 flex-col gap-3 p-5'>
        <h3 className='font-display text-xl font-bold tracking-tight'>
          {project.title}
        </h3>
        <p className='text-sm leading-relaxed text-foreground/70'>
          {project.description}
        </p>

        <div className='mt-auto flex flex-wrap gap-2 pt-3'>
          {project.tech.map((tech) => (
            <Badge key={tech} tone='neutral'>
              {tech}
            </Badge>
          ))}
        </div>

        <div className='flex items-center gap-4 border-t-2 border-dashed border-border-strong pt-4 text-sm font-semibold'>
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-1 text-accent-2 transition-colors hover:text-foreground'
            >
              Live Demo <ArrowUpRight size={14} />
            </Link>
          )}
          {project.sourceUrl && (
            <Link
              href={project.sourceUrl}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-1 text-foreground/70 transition-colors hover:text-foreground'
            >
              <GithubIcon className='h-3.5 w-3.5' /> Source
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
