import type { Metadata } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';
import './globals.css';

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
  title: 'ToolsMaid — Smart Tools for Serious Work',
  description:
    'Free professional calculators, SAP utilities, PDF tools, and developer tools. No sign-up needed.',
  keywords: ['SAP tools', 'HANA calculator', 'PDF converter', 'developer utilities'],
  openGraph: {
    title: 'ToolsMaid — Smart Tools for Serious Work',
    description: 'Free professional tools for developers, SAP consultants, and analysts.',
    url: 'https://toolsmaid.com',
    siteName: 'ToolsMaid',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="font-sans bg-stone-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}