import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import { Clock, ArrowLeft, Calendar } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { mdxComponents } from '@/components/blog/mdx-components';
import { getAllPosts, getPostBySlug, extractHeadings } from '@/lib/mdx';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} — Blog`, description: post.description };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);

  return (
    <article className='py-16 sm:py-20'>
      <Container className='grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_260px]'>
        <div className='min-w-0'>
          <Link
            href='/blog'
            className='inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/60 hover:text-accent-2'
          >
            <ArrowLeft size={14} /> Back to blog
          </Link>

          <div className='mt-6 flex flex-wrap gap-2'>
            {post.tags.map((tag) => (
              <Badge key={tag} tone='accent'>
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className='mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl'>
            {post.title}
          </h1>

          <div className='mt-4 flex flex-wrap items-center gap-4 text-sm font-semibold text-foreground/60'>
            <span className='inline-flex items-center gap-1.5'>
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className='inline-flex items-center gap-1.5'>
              <Clock size={14} /> {post.readingTime}
            </span>
          </div>

          <div className='prose-neutral mt-10 max-w-none'>
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                    [rehypePrettyCode, { theme: 'github-dark' }],
                  ],
                },
              }}
            />
          </div>
        </div>

        <TableOfContents items={headings} />
      </Container>
    </article>
  );
}
