'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Users,
  Globe,
  ArrowRight,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FadeInView } from '@/components/animations/fade-in-view';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { toast } from 'sonner';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'hello@devcraft-solutions.com',
    description: 'Send us an email and we\'ll respond within 24 hours',
    action: 'mailto:hello@devcraft-solutions.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+1 (555) 123-4567',
    description: 'Mon-Fri from 8am to 6pm PST',
    action: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'San Francisco, CA',
    description: '123 Innovation Drive, Suite 100',
    action: '#',
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: 'Within 24 Hours',
    description: 'We pride ourselves on quick responses',
    action: '#',
  },
];

const projectTypes = [
  'Web Application',
  'Mobile App',
  'AI/ML Solution',
  'Data Analytics',
  'E-commerce Platform',
  'Custom Software',
  'Consulting',
  'Other',
];

const budgetRanges = [
  '$10k - $25k',
  '$25k - $50k',
  '$50k - $100k',
  '$100k - $250k',
  '$250k+',
  'Let\'s Discuss',
];

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity, but most web applications take 3-6 months, mobile apps 4-8 months, and AI/ML projects 6-12 months.',
  },
  {
    question: 'Do you work with startups?',
    answer: 'Absolutely! We love working with startups and have flexible engagement models to fit different budgets and requirements.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in React, Node.js, Python, React Native, AI/ML frameworks, and modern cloud technologies like AWS and Azure.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer various support and maintenance packages to ensure your application continues to perform optimally after launch.',
  },
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin, color: 'text-blue-600' },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter, color: 'text-blue-400' },
  { name: 'GitHub', href: 'https://github.com', icon: Github, color: 'text-gray-900 dark:text-white' },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      projectType: '',
      budget: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', data);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-background via-background/95 to-muted/20 relative overflow-hidden">
        <div className="floating-shapes" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeInView>
              <Badge variant="outline" className="mb-6">Get In Touch</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Let's Build Something <span className="gradient-text">Amazing</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ready to transform your ideas into reality? We'd love to hear about your project and explore how we can help you succeed.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <StaggerItem
                key={info.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <Card className="glass-card border-0 h-full hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex p-3 rounded-lg bg-brand-100 dark:bg-brand-900/20 mb-4">
                      <info.icon className="h-6 w-6 text-brand-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className="font-medium text-brand-600 dark:text-brand-400 mb-1">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                    {info.action !== '#' && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="mt-3 text-xs"
                        asChild
                      >
                        <a href={info.action}>Contact</a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <FadeInView>
                <Card className="glass-card border-0">
                  <CardContent className="p-8">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold mb-2">Tell Us About Your Project</h2>
                      <p className="text-muted-foreground">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                    </div>

                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <div className="inline-flex p-4 rounded-full bg-green-100 dark:bg-green-900/20 mb-6">
                          <CheckCircle className="h-12 w-12 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground mb-6">
                          Thank you for reaching out. We'll review your message and get back to you soon.
                        </p>
                        <Button 
                          onClick={() => setIsSubmitted(false)}
                          variant="outline"
                        >
                          Send Another Message
                        </Button>
                      </motion.div>
                    ) : (
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                              Full Name *
                            </label>
                            <Input
                              id="name"
                              {...form.register('name')}
                              placeholder="John Doe"
                              className="glass"
                            />
                            {form.formState.errors.name && (
                              <p className="text-sm text-red-600">{form.formState.errors.name.message}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                              Email Address *
                            </label>
                            <Input
                              id="email"
                              type="email"
                              {...form.register('email')}
                              placeholder="john@company.com"
                              className="glass"
                            />
                            {form.formState.errors.email && (
                              <p className="text-sm text-red-600">{form.formState.errors.email.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-medium">
                              Company (Optional)
                            </label>
                            <Input
                              id="company"
                              {...form.register('company')}
                              placeholder="Acme Corporation"
                              className="glass"
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="projectType" className="text-sm font-medium">
                              Project Type *
                            </label>
                            <Select onValueChange={(value) => form.setValue('projectType', value)}>
                              <SelectTrigger className="glass">
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                              <SelectContent>
                                {projectTypes.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {form.formState.errors.projectType && (
                              <p className="text-sm text-red-600">{form.formState.errors.projectType.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="budget" className="text-sm font-medium">
                            Budget Range (Optional)
                          </label>
                          <Select onValueChange={(value) => form.setValue('budget', value)}>
                            <SelectTrigger className="glass">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Project Description *
                          </label>
                          <Textarea
                            id="message"
                            {...form.register('message')}
                            placeholder="Tell us about your project goals, requirements, and any specific challenges you're facing..."
                            rows={6}
                            className="glass resize-none"
                          />
                          {form.formState.errors.message && (
                            <p className="text-sm text-red-600">{form.formState.errors.message.message}</p>
                          )}
                        </div>

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-700 hover:to-purple-700"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                className="mr-2"
                              >
                                <Send className="h-4 w-4" />
                              </motion.div>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </FadeInView>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <FadeInView delay={0.2}>
                <Card className="glass-card border-0">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2 text-brand-600" />
                      Quick Contact
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium mb-1">Prefer to talk?</p>
                        <a 
                          href="tel:+15551234567"
                          className="text-brand-600 hover:text-brand-700 transition-colors"
                        >
                          +1 (555) 123-4567
                        </a>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Send a quick email?</p>
                        <a 
                          href="mailto:hello@devcraft-solutions.com"
                          className="text-brand-600 hover:text-brand-700 transition-colors"
                        >
                          hello@devcraft-solutions.com
                        </a>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-3">Follow us on social:</p>
                        <div className="flex space-x-3">
                          {socialLinks.map((social) => (
                            <a
                              key={social.name}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`p-2 rounded-lg glass hover:bg-white/20 dark:hover:bg-white/10 transition-colors ${social.color}`}
                            >
                              <social.icon className="h-4 w-4" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInView>

              {/* FAQ */}
              <FadeInView delay={0.3}>
                <Card className="glass-card border-0">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-brand-600" />
                      Common Questions
                    </h3>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div key={index}>
                          <p className="text-sm font-medium mb-1">{faq.question}</p>
                          <p className="text-xs text-muted-foreground">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeInView>

              {/* Office Hours */}
              <FadeInView delay={0.4}>
                <Card className="glass-card border-0">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Globe className="h-5 w-5 mr-2 text-brand-600" />
                      Office Hours
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="text-muted-foreground">8am - 6pm PST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="text-muted-foreground">10am - 2pm PST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="text-muted-foreground">Closed</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 rounded-lg bg-brand-50 dark:bg-brand-900/10">
                      <p className="text-xs text-brand-700 dark:text-brand-300">
                        ⚡ We typically respond to all inquiries within 24 hours, often much sooner!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="floating-shapes opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Schedule a free consultation call to discuss your project in detail.
            </p>
            
            <Button 
              size="lg" 
              className="bg-white text-brand-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold"
              asChild
            >
              <a href="mailto:hello@devcraft-solutions.com">
                Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}