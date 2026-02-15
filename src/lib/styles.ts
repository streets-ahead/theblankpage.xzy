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

export const Title = styled.h1`
  font-family: ${fonts.heading};
  font-size: 4rem;
  font-weight: 700;
  color: ${colors.accent};
  margin: 0 0 0;
  line-height: 1.2;
  letter-spacing: -0.015em;
`;

export const PostDate = styled.time`
  font-size: 0.9rem;
  color: ${colors.textMuted};
`;
