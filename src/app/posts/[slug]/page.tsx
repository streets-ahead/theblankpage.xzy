import { ViewTransition } from 'react';
import { compileMDX } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllSlugs, formatDate } from '@/lib/posts';
import { Title, PostDate, PostAuthor, PostHeader, PostContent } from '@/lib/styles';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { meta, content } = getPostBySlug(slug);
  const { content: mdxContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
  });

  return (
    <article>
      <PostHeader>
        <ViewTransition name={`post-title-${slug}`}>
          <Title>{meta.title}</Title>
        </ViewTransition>
        <PostDate>{formatDate(meta.date)}</PostDate>
        {meta.author && (
          <>
            {' · '}
            <PostAuthor>{meta.author}</PostAuthor>
          </>
        )}
      </PostHeader>
      <PostContent>{mdxContent}</PostContent>
    </article>
  );
}
