"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  Brain,
  BarChart3,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Zap,
  Shield,
  Users,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeInView } from "@/components/animations/fade-in-view";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/stagger-container";

const services = [
  {
    id: "web",
    icon: Code2,
    title: "Web Application Development",
    description:
      "Full-stack web solutions that scale with your business. From responsive websites to complex web applications, we build fast, secure, and user-friendly digital experiences.",
    features: [
      "Responsive Design & Mobile Optimization",
      "Progressive Web Applications (PWAs)",
      "E-commerce Platforms & Marketplaces",
      "Content Management Systems",
      "API Development & Integration",
      "Performance Optimization & SEO",
    ],
    technologies: {
      Frontend: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
      Backend: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB"],
      Cloud: ["AWS", "Vercel", "Docker", "Kubernetes", "CI/CD"],
    },
    gradient: "from-blue-500 to-cyan-500",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?w=600&h=400&fit=crop",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native iOS/Android and cross-platform mobile solutions that deliver exceptional user experiences. From concept to app store deployment, we handle the entire mobile development lifecycle.",
    features: [
      "Native iOS & Android Development",
      "Cross-platform Solutions (React Native, Flutter)",
      "Mobile UI/UX Design",
      "App Store Optimization",
      "Push Notifications & Analytics",
      "Offline Functionality & Sync",
    ],
    technologies: {
      Native: ["Swift", "Kotlin", "Objective-C", "Java"],
      "Cross-platform": ["React Native", "Flutter", "Expo"],
      Backend: ["Firebase", "AWS Mobile", "GraphQL", "REST APIs"],
    },
    gradient: "from-purple-500 to-pink-500",
    image:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?w=600&h=400&fit=crop",
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI & Machine Learning Services",
    description:
      "Custom AI solutions that drive intelligent automation and data-driven insights. From chatbots to predictive analytics, we implement cutting-edge AI technologies tailored to your business needs.",
    features: [
      "Natural Language Processing (NLP)",
      "Computer Vision & Image Recognition",
      "Predictive Analytics & Forecasting",
      "Recommendation Systems",
      "Chatbots & Virtual Assistants",
      "Custom ML Model Development",
    ],
    technologies: {
      Frameworks: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
      Languages: ["Python", "R", "Julia"],
      "Cloud AI": [
        "OpenAI GPT",
        "AWS SageMaker",
        "Google AI Platform",
        "Azure ML",
      ],
    },
    gradient: "from-green-500 to-teal-500",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=600&h=400&fit=crop",
  },
  {
    id: "data",
    icon: BarChart3,
    title: "Data Science Solutions",
    description:
      "Transform your data into actionable insights with advanced analytics, visualization, and data pipeline solutions. We help businesses make informed decisions through data-driven strategies.",
    features: [
      "Data Analytics & Visualization",
      "Business Intelligence Dashboards",
      "ETL Pipelines & Data Warehousing",
      "Statistical Analysis & Modeling",
      "Real-time Data Processing",
      "Data Strategy & Consulting",
    ],
    technologies: {
      Analytics: ["Python", "R", "SQL", "Pandas", "NumPy"],
      Visualization: ["Tableau", "Power BI", "D3.js", "Plotly"],
      "Big Data": ["Apache Spark", "Hadoop", "Kafka", "Elasticsearch"],
    },
    gradient: "from-orange-500 to-red-500",
    image:
      "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?w=600&h=400&fit=crop",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We dive deep into your requirements, goals, and challenges to create a comprehensive project roadmap.",
  },
  {
    step: "02",
    title: "Design & Architecture",
    description:
      "Our team designs scalable solutions with user-centric interfaces and robust technical architecture.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Agile development with continuous testing ensures high-quality, bug-free solutions.",
  },
  {
    step: "04",
    title: "Deployment & Support",
    description:
      "Seamless deployment with ongoing maintenance and support to ensure optimal performance.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Rapid development cycles without compromising quality.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security measures and compliance standards.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Experienced developers dedicated to your project success.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Track record of successful projects across industries.",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-background via-background/95 to-muted/20 relative overflow-hidden">
        <div className="floating-shapes" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeInView>
              <Badge variant="outline" className="mb-6">
                Our Expertise
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Services That{" "}
                <span className="gradient-text">Drive Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We specialize in cutting-edge technologies to deliver
                exceptional solutions that transform businesses and drive
                growth.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <FadeInView key={service.id} delay={index * 0.1}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: featureIndex * 0.1,
                        }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="space-y-4 mb-8">
                    {Object.entries(service.technologies).map(
                      ([category, techs]) => (
                        <div key={category}>
                          <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                            {category}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {techs.map((tech: string) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  <Button
                    size="lg"
                    className={`bg-gradient-to-r ${service.gradient} hover:opacity-90`}
                    asChild
                  >
                    <Link href="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Image */}
                <div
                  className={
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                >
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent rounded-2xl" />
                  </div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We <span className="gradient-text">Deliver Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven methodology ensures successful project delivery from
              concept to launch.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerContainer className="contents">
              {processSteps.map((step, index) => (
                <StaggerItem
                  key={step.step}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative">
                    <Card className="glass-card border-0 h-full">
                      <CardContent className="p-6">
                        <div className="text-4xl font-bold gradient-text mb-4">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>

                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="h-6 w-6 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The <span className="gradient-text">DevCraft Advantage</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver
              solutions that drive real results.
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <StaggerItem
                key={benefit.title}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.5 }}
              >
                <Card className="glass-card border-0 h-full text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex p-4 rounded-full bg-brand-100 dark:bg-brand-900/20 mb-4">
                      <benefit.icon className="h-6 w-6 text-brand-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="floating-shapes opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss your requirements and explore how our expertise can
              bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-brand-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold"
                asChild
              >
                <Link href="/contact">
                  Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
                asChild
              >
                <Link href="/about">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Our Work
                </Link>
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
