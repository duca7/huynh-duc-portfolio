'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ProjectCard } from '@/components/projects/project-card';
import { ProjectFilter } from '@/components/projects/project-filter';
import {
  projects,
  projectCategories,
  type ProjectCategory,
} from '@/data/projects';

export function ProjectGrid() {
  const [active, setActive] = useState<ProjectCategory>('All');

  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((project) => project.categories.includes(active));
  }, [active]);

  return (
    <div className='flex flex-col gap-8'>
      <ProjectFilter
        categories={projectCategories}
        active={active}
        onChange={setActive}
      />

      <motion.div
        layout
        className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
      >
        <AnimatePresence mode='popLayout'>
          {filtered.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className='text-center text-foreground/60'>
          No projects found in this category yet.
        </p>
      )}
    </div>
  );
}
