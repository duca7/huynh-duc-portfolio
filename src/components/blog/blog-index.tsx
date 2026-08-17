'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { PostCard } from '@/components/blog/post-card';
import { cn } from '@/lib/utils';
import type { BlogPostMeta } from '@/types/blog';

export function BlogIndex({
  posts,
  tags,
}: {
  posts: BlogPostMeta[];
  tags: string[];
}) {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesQuery =
        query.trim().length === 0 ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.description.toLowerCase().includes(query.toLowerCase());
      const matchesTag = !activeTag || post.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [posts, query, activeTag]);

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className='relative w-full sm:max-w-xs'>
          <Search
            size={16}
            className='pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/50'
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Search articles...'
            className='w-full rounded-xl border-2 border-border-strong bg-surface py-2.5 pl-10 pr-4 text-sm outline-none transition-shadow focus:shadow-brutal-sm'
          />
        </div>

        <div className='flex flex-wrap gap-2'>
          <button
            type='button'
            onClick={() => setActiveTag(null)}
            className={cn(
              'rounded-lg border-2 border-border-strong px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-all',
              !activeTag
                ? 'bg-accent text-accent-foreground shadow-brutal-sm'
                : 'bg-surface text-foreground/70 hover:-translate-y-0.5',
            )}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type='button'
              onClick={() => setActiveTag(tag)}
              className={cn(
                'rounded-lg border-2 border-border-strong px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-all',
                activeTag === tag
                  ? 'bg-accent text-accent-foreground shadow-brutal-sm'
                  : 'bg-surface text-foreground/70 hover:-translate-y-0.5',
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className='text-center text-foreground/60'>
          No articles match your search.
        </p>
      )}
    </div>
  );
}
