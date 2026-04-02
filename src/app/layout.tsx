import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteDetails } from '@/data/siteDetails';
import './globals.css';

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
    images: [{ url: siteDetails.siteLogo, width: 1200, height: 630, alt: siteDetails.siteName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: [siteDetails.siteLogo],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        {siteDetails.googleAnalyticsId ? <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} /> : null}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
