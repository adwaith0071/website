'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeInView } from '@/components/animations/fade-in-view';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="floating-shapes" />
      
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInView>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-8"
          >
            <div className="text-8xl md:text-9xl font-bold gradient-text mb-4">404</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-700 hover:to-purple-700" asChild>
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="glass hover:bg-white/20 dark:hover:bg-white/10" asChild>
              <Link href="/services">
                <Search className="mr-2 h-5 w-5" />
                Explore Services
              </Link>
            </Button>
          </div>

          <div className="mt-12 text-sm text-muted-foreground">
            <p>Need help? <Link href="/contact" className="text-brand-600 hover:text-brand-700 transition-colors">Contact us</Link></p>
          </div>
        </FadeInView>
      </div>
    </div>
  );
}