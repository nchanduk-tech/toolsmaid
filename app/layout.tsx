import type { Metadata } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/layout/Navbar';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['300', '600'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'ToolsMaid — Smart Tools for Smarter Workflows',
  description:
    'Free professional calculators, SAP utilities, PDF tools, AI utilities, and developer tools. No sign-up needed.',
  keywords: [
    'SAP tools',
    'HANA calculator',
    'PDF converter',
    'developer utilities',
    'AI tools',
    'SQL query explainer',
  ],
  openGraph: {
    title: 'ToolsMaid — Smart Tools for Smarter Workflows',
    description:
      'Free professional tools for developers, SAP consultants, analysts, and AI-powered productivity.',
    url: 'https://toolsmaid.com',
    siteName: 'ToolsMaid',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable}`}
    >
      <body className="font-sans bg-stone-50 text-gray-900 antialiased">
        
        {/* Global Sticky Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}