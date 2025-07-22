"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Brain,
  BarChart3,
  CheckCircle,
  Users,
  Award,
  Zap,
  Star,
  ChevronDown,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeInView } from "@/components/animations/fade-in-view";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/stagger-container";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Full-stack web applications with modern frameworks and cutting-edge technology.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native iOS/Android and cross-platform mobile solutions that scale.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Custom AI solutions and ML models that drive intelligent automation.",
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI"],
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: BarChart3,
    title: "Data Science",
    description:
      "Analytics, insights, and data pipelines that power informed decisions.",
    technologies: ["Python", "R", "SQL", "Tableau"],
    gradient: "from-orange-500 to-red-500",
  },
];

const stats = [
  { label: "Projects Delivered", value: 500, suffix: "+" },
  { label: "Happy Clients", value: 200, suffix: "+" },
  { label: "Years Experience", value: 8, suffix: "+" },
  { label: "Team Members", value: 50, suffix: "+" },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with cutting-edge technology stacks.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Seasoned developers with deep domain expertise.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous testing and quality assurance processes.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=100&h=100&fit=crop&crop=face",
    content:
      "DevCraft transformed our vision into a scalable platform that exceeded all expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, StartupX",
    avatar:
      "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?w=100&h=100&fit=crop&crop=face",
    content:
      "The AI solution they built for us increased our efficiency by 300%. Incredible results.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Product Manager, InnovateLab",
    avatar:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=100&h=100&fit=crop&crop=face",
    content:
      "Professional, reliable, and delivered exactly what we needed. Highly recommended.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="floating-shapes" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <FadeInView>
              <Badge variant="secondary" className="mb-4 text-sm font-medium">
                ✨ Building the Future of Software
              </Badge>
            </FadeInView>

            <FadeInView delay={0.1}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                We Build the <span className="gradient-text">Future</span> of
                Software
              </h1>
            </FadeInView>

            <FadeInView delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
                Transforming ideas into powerful digital experiences with
                cutting-edge technology and innovative solutions.
              </p>
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-700 hover:to-purple-700 text-lg px-8 py-6 h-auto"
                  asChild
                >
                  <Link href="/contact">
                    Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 h-auto glass hover:bg-white/20 dark:hover:bg-white/10"
                  asChild
                >
                  <Link href="/services">
                    <Play className="mr-2 h-5 w-5" />
                    Explore Services
                  </Link>
                </Button>
              </div>
            </FadeInView>
          </div>

          {/* Scroll Indicator */}
          <FadeInView
            delay={0.5}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center text-muted-foreground"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </FadeInView>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Expertise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Services That <span className="gradient-text">Drive Results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We specialize in cutting-edge technologies to deliver exceptional
              solutions.
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <StaggerItem
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <Card className="group glass-card hover:scale-105 transition-all duration-300 border-0 h-full">
                  <CardContent className="p-6">
                    <div
                      className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.gradient} mb-4`}
                    >
                      {(() => {
                        const Icon = service.icon;
                        return <Icon className="h-6 w-6 text-white" />;
                      })()}
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {service.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInView delay={0.3} className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="glass hover:bg-white/20 dark:hover:bg-white/10"
              asChild
            >
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeInView>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInView direction="left">
              <div>
                <Badge variant="outline" className="mb-4">
                  Why Choose DevCraft
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Excellence in Every{" "}
                  <span className="gradient-text">Line of Code</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We combine technical expertise with creative innovation to
                  deliver solutions that not only meet your requirements but
                  exceed your expectations.
                </p>

                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 p-2 rounded-lg bg-brand-100 dark:bg-brand-900/20">
                        {(() => {
                          const FeatureIcon = feature.icon;
                          return (
                            <FeatureIcon className="h-5 w-5 text-brand-600" />
                          );
                        })()}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-700 hover:to-purple-700"
                  >
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
            </FadeInView>

            <FadeInView direction="right" className="relative">
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-400/20 to-purple-400/20 p-8 glass">
                  <div className="grid grid-cols-3 gap-4 h-full">
                    {Array.from({ length: 9 }).map((_, i) => {
                      // Cycle through 9 Lucide icons
                      const icons = [
                        Zap,
                        Users,
                        Award,
                        Star,
                        CheckCircle,
                        Code2,
                        Smartphone,
                        Brain,
                        BarChart3,
                      ];
                      const Icon = icons[i % icons.length];
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.1,
                            type: "spring",
                            stiffness: 100,
                          }}
                          className="rounded-lg bg-white/20 dark:bg-white/10 backdrop-blur-sm animate-float flex items-center justify-center"
                          style={{ animationDelay: `${i * 0.5}s` }}
                        >
                          <Icon className="h-8 w-8 text-white/80" />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg"
                >
                  <CheckCircle className="h-6 w-6 text-white" />
                </motion.div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Client Success
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <StaggerItem
                key={testimonial.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <Card className="glass-card border-0 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-500 fill-current"
                          />
                        )
                      )}
                    </div>

                    <p className="text-muted-foreground mb-6 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <div className="font-semibold text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="floating-shapes opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Vision?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss your project and explore how we can bring your ideas
              to life with cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-brand-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold"
                asChild
              >
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
                asChild
              >
                <Link href="/services">View Our Work</Link>
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
