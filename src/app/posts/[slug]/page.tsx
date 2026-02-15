import { styled } from '@linaria/react';
import { ViewTransition } from 'react';
import { compileMDX } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllSlugs, formatDate } from '@/lib/posts';
import { Title, PostDate, colors, fonts } from '@/lib/styles';

const PostHeader = styled.header`
  margin-bottom: 2.2rem;
  padding-bottom: 0rem;
`;

const PostAuthor = styled.span`
  font-size: 0.9rem;
  color: ${colors.textMuted};
`;

const PostContent = styled.div`
  line-height: 1.5;
  padding-bottom: 5rem;
  color: ${colors.text};

  h2 {
    font-family: ${fonts.heading};
    font-size: 1.5rem;
    font-weight: 700;
    margin: 2.5rem 0 0.75rem;
    line-height: 1.25;
    letter-spacing: -0.005em;
    color: ${colors.textMuted};
  }

  h3 {
    font-family: ${fonts.heading};
    font-size: 1.25rem;
    font-weight: 600;
    margin: 2rem 0 0.5rem;
    line-height: 1.3;
  }

  p {
    margin: 0 0 1.25rem;
  }

  a {
    color: ${colors.text};
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
    text-decoration-color: ${colors.border};
    transition: text-decoration-color 0.15s;

    &:hover {
      text-decoration-color: ${colors.text};
    }
  }

  code {
    font-size: 0.85em;
    background: ${colors.border};
    padding: 0.15em 0.35em;
    border-radius: 3px;
  }

  pre {
    background: ${colors.codeBg};
    color: ${colors.codeText};
    padding: 1.25rem;
    border-radius: 6px;
    overflow-x: auto;
    margin: 0 0 1.25rem;

    code {
      background: none;
      padding: 0;
      font-size: 0.8rem;
    }
  }

  blockquote {
    border-left: 2px solid ${colors.textMuted};
    margin: 0 0 1.25rem;
    padding: 0 0 0 1.25rem;
    color: ${colors.textMuted};
    font-style: italic;
  }

  ul, ol {
    margin: 0 0 1.25rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.3rem;
  }

  li > ul, li > ol {
    margin-top: 0.3rem;
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
    border-radius: 6px;
  }

  hr {
    border: none;
    border-top: 1px solid ${colors.border};
    margin: 2.5rem 0;
  }
`;

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
        <Title>{meta.title}</Title>
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
