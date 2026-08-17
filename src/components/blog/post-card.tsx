import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { BlogPostMeta } from '@/types/blog';

export function PostCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className='group flex flex-col overflow-hidden rounded-2xl border-2 border-border-strong bg-surface shadow-brutal transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal-lg'
    >
      {post.cover && (
        <div className='relative aspect-video w-full overflow-hidden border-b-2 border-border-strong bg-surface-muted'>
          <Image
            src={post.cover}
            alt=''
            fill
            sizes='(min-width: 1024px) 33vw, 100vw'
            className='object-cover transition-transform duration-500 group-hover:scale-105'
          />
        </div>
      )}
      <div className='flex flex-1 flex-col gap-3 p-5'>
        <div className='flex flex-wrap gap-2'>
          {post.tags.map((tag) => (
            <Badge key={tag} tone='neutral'>
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className='font-display text-lg font-bold tracking-tight'>
          {post.title}
        </h3>
        <p className='text-sm leading-relaxed text-foreground/70'>
          {post.description}
        </p>
        <div className='mt-auto flex items-center justify-between border-t-2 border-dashed border-border-strong pt-4 text-xs font-semibold text-foreground/60'>
          <span className='inline-flex items-center gap-1.5'>
            <Clock size={13} /> {post.readingTime}
          </span>
          <span className='inline-flex items-center gap-1 text-accent-2 group-hover:underline'>
            Read <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}
