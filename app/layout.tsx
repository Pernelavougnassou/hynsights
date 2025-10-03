import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';
import { ReadingProgressBar } from '@/components/common/ProgressBar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'HynSights - Insights that matter',
    template: '%s | HynSights'
  },
  description: 'Discover thoughtful perspectives on technology, business, and life. Join our community of curious minds exploring ideas that shape our world.',
  keywords: ['blog', 'insights', 'technology', 'business', 'lifestyle', 'entrepreneurship'],
  authors: [{ name: 'HynSights' }],
  creator: 'HynSights',
  publisher: 'HynSights',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hynsights.com',
    title: 'HynSights - Insights that matter',
    description: 'Discover thoughtful perspectives on technology, business, and life.',
    siteName: 'HynSights',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HynSights - Insights that matter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HynSights - Insights that matter',
    description: 'Discover thoughtful perspectives on technology, business, and life.',
    images: ['/og-image.png'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReadingProgressBar />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
