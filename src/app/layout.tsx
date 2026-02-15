import { styled } from '@linaria/react';
import { Zilla_Slab, DM_Sans } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import { colors, fonts } from '@/lib/styles';
import TypewriterTitle from '@/components/TypewriterTitle';

const zillaSlab = Zilla_Slab({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const Container = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Nav = styled.nav`
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

const SiteTitle = styled.a`
  font-family: ${fonts.heading};
  font-size: 1.6rem;
  font-weight: 600;
  color: ${colors.text} !important;
  margin-right: auto;
  display: flex;
  align-items: baseline;
`;


export const metadata = {
  title: 'theblankpage.xyz',
  description: 'A minimal blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${zillaSlab.variable} ${dmSans.variable}`}>
      <body>
        <Container>
          <Nav>
            <SiteTitle as={Link} href="/" className={zillaSlab.className}>
              <TypewriterTitle />
            </SiteTitle>
            {/* <Link href="/" className="nav-link">Posts</Link> */}
            <Link href="/about" className="nav-link">About</Link>
          </Nav>
          <main>{children}</main>
        </Container>
      </body>
    </html>
  );
}
