import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/sonner';
import PageTransition from '@/components/animations/page-transition';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'DevCraft Solutions - Premium Software Development Company',
  description: 'Transforming ideas into powerful digital experiences. Expert web development, mobile apps, AI/ML solutions, and data science services.',
  keywords: ['software development', 'web development', 'mobile apps', 'AI', 'machine learning', 'data science'],
  authors: [{ name: 'DevCraft Solutions' }],
  creator: 'DevCraft Solutions',
  publisher: 'DevCraft Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://devcraft-solutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devcraft-solutions.com',
    title: 'DevCraft Solutions - Premium Software Development',
    description: 'Transforming ideas into powerful digital experiences with expert software development services.',
    siteName: 'DevCraft Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevCraft Solutions - Premium Software Development',
    description: 'Transforming ideas into powerful digital experiences with expert software development services.',
    creator: '@devcraftsolutions',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${plusJakarta.variable} font-space-grotesk antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="relative min-h-screen bg-gradient-to-br from-background via-background/95 to-background">
            <Navbar />
            <PageTransition>
              {children}
            </PageTransition>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}