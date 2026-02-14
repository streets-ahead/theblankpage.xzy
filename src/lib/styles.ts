import { styled } from '@linaria/react';

export const colors = {
  bg: 'var(--color-bg)',
  text: 'var(--color-text)',
  textMuted: 'var(--color-text-muted)',
  border: 'var(--color-border)',
  accent: 'var(--color-accent)',
  link: 'var(--color-link)',
  codeBg: 'var(--color-code-bg)',
  codeText: 'var(--color-code-text)',
};

export const fonts = {
  body: "var(--font-body), 'DM Sans', sans-serif",
  heading: "var(--font-heading), 'Zilla Slab', serif",
};

export const Container = styled.div`
  max-width: 760px;
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

    &:hover {
      color: ${colors.text};
    }
  }
`;

export const SiteTitle = styled.a`
  font-family: ${fonts.heading};
  font-size: 1.4rem;
  font-weight: 600;
  color: ${colors.text} !important;
  margin-right: auto;
`;

export const Title = styled.h1`
  font-family: ${fonts.heading};
  font-size: 4rem;
  font-weight: 700;
  color: ${colors.accent};
  margin: 0 0 0;
  line-height: 1.2;
  letter-spacing: -0.015em;
`;

export const PostList = styled.main`
  margin-top: 2.2rem; 
`;

export const PostDate = styled.time`
  font-size: 0.8rem;
  color: ${colors.textMuted};
`;

export const PostListItem = styled.article`
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
    color: ${colors.text};
    line-height: 1.25;
    letter-spacing: -0.008em;
  }

  p {
    margin: 0.6rem 0 0;
    color: ${colors.textMuted};
    font-size: 1rem;
    line-height: 1.45;
  }
`;

export const PostHeader = styled.header`
  margin-bottom: 2.2rem;
  padding-bottom: 0rem;
`;

export const PostAuthor = styled.span`
  font-size: 0.8rem;
  color: ${colors.textMuted};
`;

export const PostContent = styled.div`
  line-height: 1.5;
  color: ${colors.text};

  h2 {
    font-family: ${fonts.heading};
    font-size: 1.5rem;
    font-weight: 600;
    margin: 2.5rem 0 0.75rem;
    line-height: 1.25;
    letter-spacing: -0.01em;
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

export const PageContent = styled.div`
  line-height: 1.5;
  color: ${colors.text};
  padding: 1rem 0 4rem;

  h2 {
    font-family: ${fonts.heading};
    font-size: 1.4rem;
    font-weight: 600;
    margin: 2rem 0 0.75rem;
    line-height: 1.25;
    letter-spacing: -0.01em;
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
`;
