import './globals.css';
import AnimatedBackground from '@/components/AnimatedBackground';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gurudatta Shanbhag | Backend Engineer',
  description:
    'Portfolio of Gurudatta Shanbhag — Backend Engineer specializing in distributed systems, workflow orchestration, and scalable backend platforms.',
  keywords: [
    'Gurudatta Shanbhag',
    'Backend Engineer',
    'Golang Developer',
    'Distributed Systems',
    'Temporal Workflows',
    'System Design',
    'Software Engineer India',
  ],
  authors: [{ name: 'Gurudatta Shanbhag' }],
  creator: 'Gurudatta Shanbhag',

  openGraph: {
    title: 'Gurudatta Shanbhag | Backend Engineer',
    description:
      'Backend Engineer specializing in distributed systems, scalable workflow engines, and platform architecture.',
    url: 'https://guru2605.github.io',
    siteName: 'Gurudatta Shanbhag Portfolio',
    locale: 'en_US',
    type: 'website',
  },

  metadataBase: new URL('https://guru2605.github.io'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative min-h-screen text-slate-100 antialiased bg-[#020617] selection:bg-cyan-500/30">
        <AnimatedBackground />
        <main className="relative z-0">{children}</main>
      </body>
    </html>
  );
}