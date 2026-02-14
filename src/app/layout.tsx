import { Zilla_Slab, DM_Sans } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import { Container, Nav, SiteTitle } from '@/lib/styles';

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

export const metadata = {
  title: 'Blankpage',
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
            <SiteTitle as={Link} href="/">
              Blankpage
            </SiteTitle>
            <Link href="/">Posts</Link>
            <Link href="/about">About</Link>
          </Nav>
          <main>{children}</main>
        </Container>
      </body>
    </html>
  );
}
