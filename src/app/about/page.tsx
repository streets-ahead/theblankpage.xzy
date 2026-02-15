import { styled } from '@linaria/react';
import { Title, colors, fonts } from '@/lib/styles';

const PageContent = styled.div`
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

export default function AboutPage() {
  return (
    <div>
      <Title>About</Title>
      <PageContent>
        <p>
          Blankpage is a minimal, statically generated blog built with Next.js,
          Linaria, and MDX.
        </p>
        <p>
          Posts are written in MDX with YAML frontmatter and compiled at build
          time to plain HTML, CSS, and JS — deployable to any static host.
        </p>
      </PageContent>
    </div>
  );
}
