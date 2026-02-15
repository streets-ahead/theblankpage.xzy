import { styled } from '@linaria/react';
import { ViewTransition } from 'react';
import Link from 'next/link';
import { getAllPosts, formatDate } from '@/lib/posts';
import { Title, PostDate, colors, fonts } from '@/lib/styles';

const PostList = styled.main`
  margin-top: 2.2rem;
`;

const PostListItem = styled.article`
  padding: 1.5rem 0;
  border-bottom: 1px solid ${colors.border};

  &:last-child {
    border-bottom: none;
  }

  &:first-child {
    padding-top: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h2 {
    font-family: ${fonts.heading};
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0 0 0rem;
    color: ${colors.accent};
    line-height: 1.25;
    letter-spacing: -0.008em;
  }

  p {
    margin: 0.6rem 0 0;
    color: ${colors.text};
    font-size: 1rem;
    line-height: 1.45;
  }
`;

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div>
      {/* <Title>Posts</Title> */}
      <PostList>
        {posts.map((post) => (
          <PostListItem key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <ViewTransition name={`post-title-${post.slug}`}>
                <h2>{post.title}</h2>
              </ViewTransition>
              <PostDate>{formatDate(post.date)}</PostDate>
              {post.description && <p>{post.description}</p>}
            </Link>
          </PostListItem>
        ))}
        {posts.length === 0 && (
          <p style={{ color: 'var(--color-text-muted)', padding: '2rem 0' }}>
            No posts yet.
          </p>
        )}
      </PostList>
    </div>
  );
}
