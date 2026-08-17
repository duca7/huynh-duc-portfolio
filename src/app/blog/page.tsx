import type { Metadata } from 'next';
import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { BlogIndex } from '@/components/blog/blog-index';
import { getAllPosts, getAllTags } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Blog — Alex Rivera',
  description:
    'Notes on React, TypeScript, performance and frontend engineering.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <section className='py-24 sm:py-28'>
      <Container className='flex flex-col gap-12'>
        <SectionHeading
          eyebrow='Writing'
          title='Notes on frontend engineering.'
          description='Deep dives on React, TypeScript, performance and design systems.'
        />
        <BlogIndex posts={posts} tags={tags} />
      </Container>
    </section>
  );
}
