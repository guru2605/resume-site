import './globals.css';
import AnimatedBackground from '@/components/AnimatedBackground';

export const metadata = {
  title: 'Gurudatta Shanbhag | Backend Engineer',
  description: 'Portfolio of Gurudatta Shanbhag, Software Developer 3',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative min-h-screen text-slate-100 antialiased bg-[#020617] selection:bg-cyan-500/30">
        <AnimatedBackground />
        <main className="relative z-0">
          {children}
        </main>
      </body>
    </html>
  );
}