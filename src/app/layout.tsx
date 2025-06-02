import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import PageTransition from '@/components/PageTransition';
import { SEOStructuredData } from '@/components/SEOStructuredData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Aman Goyal - Product & Design Strategist | UX/UI Designer',
    template: '%s | Aman Goyal - Product Design Expert',
  },
  description:
    'Senior freelance product designer & strategist helping startups and SaaS companies design user-centered products. Specialized in MVP design, product redesign, UX audits, and design systems. Based in India, working globally.',
  keywords: [
    'product designer',
    'UX designer',
    'UI designer',
    'design strategist',
    'freelance designer',
    'SaaS design',
    'MVP design',
    'product redesign',
    'UX audit',
    'design system',
    'user experience',
    'product strategy',
    'startup design',
    'India designer',
    'remote designer',
  ],
  authors: [{ name: 'Aman Goyal' }],
  creator: 'Aman Goyal',
  publisher: 'Aman Goyal',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amangoyal.design',
    siteName: 'Aman Goyal - Product Design Expert',
    title: 'Aman Goyal - Product & Design Strategist | Expert UX/UI Designer',
    description:
      'Senior freelance product designer helping startups design user-centered products. Specialized in MVP design, SaaS redesign, and design systems.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aman Goyal - Product & Design Strategist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aman Goyal - Product & Design Strategist',
    description:
      'Senior freelance product designer helping startups design user-centered products.',
    images: ['/og-image.jpg'],
    creator: '@amangoyal_design',
  },
  verification: {
    google: 'your-google-verification-code',
    // Add other verification codes as needed
  },
  alternates: {
    canonical: 'https://amangoyal.design',
  },
  category: 'Design & Technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light" />

        {/* Additional SEO meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.country" content="India" />
        <meta name="language" content="English" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="revisit-after" content="7 days" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <PageTransition>
          <Navbar />
          <main className="min-h-screen" role="main">
            {children}
          </main>
        </PageTransition>
        <SEOStructuredData />
      </body>
    </html>
  );
}
