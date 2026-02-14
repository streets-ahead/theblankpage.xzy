import { styled } from '@linaria/react';

export const colors = {
  bg: '#faf9f7',
  text: '#2d2d2d',
  textMuted: '#6b6b6b',
  border: '#e8e5e1',
  accent: '#1a1a1a',
  link: '#3d3d3d',
};

export const fonts = {
  body: "var(--font-body), 'DM Sans', sans-serif",
  heading: "var(--font-heading), 'Zilla Slab', serif",
};

export const Container = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const Nav = styled.nav`
  padding: 2rem 0;
  display: flex;
  gap: 1.5rem;
  align-items: baseline;

  a {
    color: ${colors.textMuted};
    text-decoration: none;
    font-size: 0.9rem;
    letter-spacing: 0.02em;

    &:hover {
      color: ${colors.text};
    }
  }
`;

export const SiteTitle = styled.a`
  font-family: ${fonts.heading};
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.text} !important;
  margin-right: auto;
`;

export const Title = styled.h1`
  font-family: ${fonts.heading};
  font-size: 2rem;
  font-weight: 600;
  color: ${colors.text};
  margin: 0 0 0.5rem;
  line-height: 1.3;
`;

export const PostDate = styled.time`
  font-size: 0.85rem;
  color: ${colors.textMuted};
`;

export const PostListItem = styled.article`
  padding: 1.5rem 0;
  border-bottom: 1px solid ${colors.border};

  &:first-child {
    padding-top: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h2 {
    font-family: ${fonts.heading};
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0 0 0.3rem;
    color: ${colors.text};
    line-height: 1.3;
  }

  p {
    margin: 0.4rem 0 0;
    color: ${colors.textMuted};
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

export const PostHeader = styled.header`
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${colors.border};
`;

export const PostAuthor = styled.span`
  font-size: 0.85rem;
  color: ${colors.textMuted};
`;

export const PostContent = styled.div`
  line-height: 1.7;
  color: ${colors.text};

  h2 {
    font-family: ${fonts.heading};
    font-size: 1.5rem;
    font-weight: 600;
    margin: 2rem 0 0.75rem;
  }

  h3 {
    font-family: ${fonts.heading};
    font-size: 1.2rem;
    font-weight: 600;
    margin: 1.75rem 0 0.5rem;
  }

  p {
    margin: 0 0 1.25rem;
  }

  a {
    color: ${colors.text};
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  code {
    font-size: 0.9em;
    background: ${colors.border};
    padding: 0.15em 0.35em;
    border-radius: 3px;
  }

  pre {
    background: ${colors.accent};
    color: #f0f0f0;
    padding: 1.25rem;
    border-radius: 6px;
    overflow-x: auto;
    margin: 0 0 1.25rem;

    code {
      background: none;
      padding: 0;
      font-size: 0.85rem;
    }
  }

  blockquote {
    border-left: 3px solid ${colors.border};
    margin: 0 0 1.25rem;
    padding: 0.5rem 0 0.5rem 1.25rem;
    color: ${colors.textMuted};
  }

  ul, ol {
    margin: 0 0 1.25rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.35rem;
  }

  img {
    max-width: 100%;
    border-radius: 6px;
  }

  hr {
    border: none;
    border-top: 1px solid ${colors.border};
    margin: 2rem 0;
  }
`;

export const PageContent = styled.div`
  line-height: 1.7;
  color: ${colors.text};
  padding: 1rem 0 4rem;

  h2 {
    font-family: ${fonts.heading};
    font-size: 1.4rem;
    font-weight: 600;
    margin: 1.5rem 0 0.75rem;
  }

  p {
    margin: 0 0 1.25rem;
  }

  a {
    color: ${colors.text};
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;
