export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  cover?: string;
  readingTime: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

export type TocItem = {
  id: string;
  text: string;
  depth: number;
};
