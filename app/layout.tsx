import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://detroit-planter.vercel.app'),
  title: 'Planter Business | Your Private Gardener',
  description: 'Professional seasonal planters, designed and installed for you. Serving the Detroit metro area with planter subscriptions, seasonal decor, irrigation, and maintenance services.',
  keywords: 'planter subscriptions, seasonal planters, outdoor decor, Detroit landscaping, container gardening, seasonal decor, irrigation, plant maintenance',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
  },
  openGraph: {
    title: 'Planter Business | Your Private Gardener',
    description: 'Professional seasonal planters, designed and installed for you.',
    type: 'website',
    images: [
      {
        url: '/images/seasonal-decor.jpeg',
        width: 1200,
        height: 630,
        alt: 'Beautiful patio with potted plants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planter Business | Your Private Gardener',
    description: 'Professional seasonal planters, designed and installed for you.',
    images: ['/images/seasonal-decor.jpeg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
