'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Users, 
  Target, 
  Lightbulb, 
  Award,
  ArrowRight,
  Globe,
  Heart,
  Zap,
  Shield,
  Coffee,
  Gamepad2,
  Music,
  Camera,
  MapPin,
  Calendar,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FadeInView } from '@/components/animations/fade-in-view';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { AnimatedCounter } from '@/components/ui/animated-counter';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for perfection in every line of code and every client interaction.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and creative solutions to solve complex problems.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and transparent communication.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do and it shows in the quality of our work.',
  },
];

const timeline = [
  {
    year: '2016',
    title: 'Company Founded',
    description: 'Started with a vision to transform businesses through technology.',
  },
  {
    year: '2018',
    title: 'AI Division Launch',
    description: 'Expanded into artificial intelligence and machine learning solutions.',
  },
  {
    year: '2020',
    title: 'Global Expansion',
    description: 'Opened offices in multiple countries and served 100+ clients.',
  },
  {
    year: '2022',
    title: 'Industry Recognition',
    description: 'Received multiple awards for innovation and client satisfaction.',
  },
  {
    year: '2024',
    title: 'Leading Innovation',
    description: 'Pioneering next-generation solutions with 500+ successful projects.',
  },
];

const team = [
  {
    name: 'Alex Rodriguez',
    role: 'CEO & Founder',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=200&h=200&fit=crop&crop=face',
    bio: 'Visionary leader with 15+ years in tech, passionate about building innovative solutions.',
    interests: [Coffee, Globe, Music],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    }
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=200&h=200&fit=crop&crop=face',
    bio: 'Tech strategist and AI expert, leading our engineering teams to new heights.',
    interests: [Zap, Camera, Gamepad2],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    }
  },
  {
    name: 'Michael Thompson',
    role: 'Lead Designer',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?w=200&h=200&fit=crop&crop=face',
    bio: 'Creative mind behind our award-winning designs and user experiences.',
    interests: [Camera, Music, Heart],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    }
  },
  {
    name: 'Emily Johnson',
    role: 'Head of Operations',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=200&h=200&fit=crop&crop=face',
    bio: 'Operations expert ensuring smooth project delivery and client satisfaction.',
    interests: [Shield, Target, Globe],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    }
  },
];

const stats = [
  { label: 'Years of Excellence', value: 8, suffix: '+' },
  { label: 'Projects Delivered', value: 500, suffix: '+' },
  { label: 'Happy Clients', value: 200, suffix: '+' },
  { label: 'Team Members', value: 50, suffix: '+' },
  { label: 'Countries Served', value: 25, suffix: '+' },
  { label: 'Industry Awards', value: 15, suffix: '+' },
];

export default function AboutPage() {
  return (
    <main className="relative">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-background via-background/95 to-muted/20 relative overflow-hidden">
        <div className="floating-shapes" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeInView>
              <Badge variant="outline" className="mb-6">About DevCraft</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Crafting the <span className="gradient-text">Future</span> Together
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We're a team of passionate developers, designers, and strategists who believe technology can transform businesses and improve lives.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInView direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We're committed to delivering exceptional results through collaboration, creativity, and cutting-edge expertise.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4">What Drives Us</h3>
                  <div className="space-y-3">
                    {[
                      'Building solutions that make a real difference',
                      'Pushing the boundaries of what\'s possible with technology',
                      'Creating lasting partnerships with our clients',
                      'Fostering innovation and continuous learning'
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-500 to-purple-500" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView direction="right">
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-100 to-purple-100 dark:from-brand-900/20 dark:to-purple-900/20 p-8 glass">
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center space-y-6">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="inline-flex p-6 rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
                      >
                        <Target className="h-12 w-12 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold gradient-text mb-2">Our Vision</h3>
                        <p className="text-muted-foreground">
                          To be the global leader in innovative software solutions, transforming industries through technology.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We <span className="gradient-text">Stand For</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make and every solution we build.
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <StaggerItem
                key={value.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <Card className="glass-card border-0 h-full text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex p-4 rounded-full bg-brand-100 dark:bg-brand-900/20 mb-4">
                      <value.icon className="h-6 w-6 text-brand-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Impact</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success by the <span className="gradient-text">Numbers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here's what we've accomplished together with our amazing clients and partners.
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StaggerItem
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="glass-card">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    <AnimatedCounter 
                      from={0} 
                      to={stat.value} 
                      suffix={stat.suffix}
                      duration={2}
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Story</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From a small startup to an industry leader, here's how we've grown over the years.
            </p>
          </FadeInView>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-brand-500 to-purple-500" />
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <FadeInView key={item.year} delay={index * 0.2}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <Card className="glass-card border-0">
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold gradient-text mb-2">{item.year}</div>
                          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-brand-500 to-purple-500 border-4 border-background relative z-10" />
                    
                    <div className="w-1/2" />
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the <span className="gradient-text">Minds</span> Behind DevCraft
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Talented individuals who are passionate about technology and committed to your success.
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <StaggerItem
                key={member.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <Card className="glass-card border-0 h-full overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
                      />
                      <div className="text-center">
                        <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                        <p className="text-sm text-brand-600 dark:text-brand-400 mb-3">{member.role}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                        
                        {/* Interests */}
                        <div className="flex justify-center space-x-2 mb-4">
                          {member.interests.map((Interest, i) => (
                            <div key={i} className="p-2 rounded-lg bg-muted/50">
                              <Interest className="h-4 w-4 text-muted-foreground" />
                            </div>
                          ))}
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex justify-center space-x-3">
                          <a href={member.social.linkedin} className="text-muted-foreground hover:text-blue-600 transition-colors">
                            <Linkedin className="h-4 w-4" />
                          </a>
                          <a href={member.social.twitter} className="text-muted-foreground hover:text-blue-400 transition-colors">
                            <Twitter className="h-4 w-4" />
                          </a>
                          <a href={member.social.github} className="text-muted-foreground hover:text-gray-900 dark:hover:text-white transition-colors">
                            <Github className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInView delay={0.4} className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="glass hover:bg-white/20 dark:hover:bg-white/10"
              asChild
            >
              <Link href="/careers">
                <Users className="mr-2 h-5 w-5" />
                Join Our Team
              </Link>
            </Button>
          </FadeInView>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="floating-shapes opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss how our expertise and passion can help transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-brand-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold"
                asChild
              >
                <Link href="/contact">
                  Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
                asChild
              >
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}