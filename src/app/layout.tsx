import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import PageTransition from '@/components/PageTransition';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Aman Goyal - Product & Design Strategist',
  description:
    'I help founders and product teams design and build products that users love. Specializing in UX/UI design, product strategy, and user research.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <PageTransition>
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </PageTransition>
      </body>
    </html>
  );
}
