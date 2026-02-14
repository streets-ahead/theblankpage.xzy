import { ViewTransition } from 'react';
import Link from 'next/link';
import { getAllPosts, formatDate } from '@/lib/posts';
import { Title, PostDate, PostListItem } from '@/lib/styles';

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div>
      <Title>Posts</Title>
      <div>
        {posts.map((post) => (
          <PostListItem key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <h2>{post.title}</h2>
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
      </div>
    </div>
  );
}
