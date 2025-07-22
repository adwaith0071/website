'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  ArrowUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeInView } from '@/components/animations/fade-in-view';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';

const footerSections = [
  {
    title: 'Services',
    links: [
      { name: 'Web Development', href: '/services#web' },
      { name: 'Mobile Apps', href: '/services#mobile' },
      { name: 'AI & ML', href: '/services#ai' },
      { name: 'Data Science', href: '/services#data' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Support', href: '/support' },
    ],
  },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
];

const contactInfo = [
  { icon: Mail, text: 'hello@devcraft-solutions.com' },
  { icon: Phone, text: '+1 (555) 123-4567' },
  { icon: MapPin, text: 'San Francisco, CA' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-background/50 to-muted/20 border-t border-border/50">
      <div className="floating-shapes" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <FadeInView className="lg:col-span-1">
            <div className="space-y-6">
              <Link href="/" className="flex items-center space-x-2">
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 rounded-lg bg-gradient-to-r from-brand-500 to-purple-600"
                >
                  <Code2 className="h-6 w-6 text-white" />
                </motion.div>
                <span className="text-xl font-bold gradient-text">DevCraft Solutions</span>
              </Link>
              
              <p className="text-muted-foreground leading-relaxed">
                Transforming ideas into powerful digital experiences with cutting-edge technology and innovative solutions.
              </p>

              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <item.icon className="h-4 w-4" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg glass hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeInView>

          {/* Footer Sections */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerContainer className="contents">
              {footerSections.map((section, sectionIndex) => (
                <StaggerItem
                  key={section.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Newsletter Signup */}
        <FadeInView delay={0.4} className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
              <p className="text-muted-foreground text-sm">
                Get the latest insights on software development and technology trends.
              </p>
            </div>
            <div className="flex w-full md:w-auto max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
              />
              <Button 
                size="sm"
                className="rounded-l-none bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-700 hover:to-purple-700"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </FadeInView>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} DevCraft Solutions. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-brand-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-brand-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-3 rounded-full glass hover:bg-white/20 dark:hover:bg-white/10 transition-colors z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
}