import { Title, PageContent } from '@/lib/styles';

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
