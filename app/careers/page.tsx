"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Heart,
  Coffee,
  Gamepad2,
  Laptop,
  GraduationCap,
  Award,
  Zap,
  Shield,
  ArrowRight,
  ExternalLink,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeInView } from "@/components/animations/fade-in-view";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/stagger-container";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const jobs = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    remote: "Hybrid",
    description:
      "Join our core engineering team to build scalable web applications using React, Node.js, and cloud technologies.",
    requirements: [
      "5+ years experience",
      "React/Node.js",
      "AWS/Docker",
      "TypeScript",
    ],
    salary: "$120k - $160k",
  },
  {
    title: "Mobile App Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    remote: "Remote",
    description:
      "Develop cutting-edge mobile applications for iOS and Android using React Native and native technologies.",
    requirements: [
      "3+ years mobile dev",
      "React Native/Swift/Kotlin",
      "App Store experience",
    ],
    salary: "$100k - $140k",
  },
  {
    title: "AI/ML Engineer",
    department: "Data Science",
    location: "New York, NY",
    type: "Full-time",
    remote: "Hybrid",
    description:
      "Design and implement machine learning models and AI solutions for our client projects.",
    requirements: [
      "Python/TensorFlow",
      "ML algorithms",
      "Statistics background",
      "3+ years experience",
    ],
    salary: "$130k - $180k",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Los Angeles, CA",
    type: "Full-time",
    remote: "Hybrid",
    description:
      "Create beautiful, user-centered designs for web and mobile applications.",
    requirements: [
      "Figma/Sketch",
      "Design systems",
      "User research",
      "Portfolio required",
    ],
    salary: "$90k - $130k",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Austin, TX",
    type: "Full-time",
    remote: "Remote",
    description:
      "Build and maintain our cloud infrastructure, CI/CD pipelines, and deployment systems.",
    requirements: ["AWS/GCP", "Kubernetes", "Terraform", "CI/CD experience"],
    salary: "$110k - $150k",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    remote: "Remote",
    description:
      "Drive product strategy and work with cross-functional teams to deliver exceptional user experiences.",
    requirements: [
      "Product management",
      "Agile/Scrum",
      "User analytics",
      "Technical background",
    ],
    salary: "$120k - $160k",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive health insurance, dental, vision, and mental health support.",
  },
  {
    icon: Coffee,
    title: "Flexible Work",
    description:
      "Remote-first culture with flexible hours and work-life balance.",
  },
  {
    icon: Laptop,
    title: "Latest Tech",
    description: "Top-tier equipment and tools to help you do your best work.",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description:
      "$2,000 annual budget for courses, conferences, and skill development.",
  },
  {
    icon: Globe,
    title: "Global Team",
    description:
      "Work with talented people from around the world on exciting projects.",
  },
  {
    icon: Award,
    title: "Growth Opportunities",
    description: "Clear career paths and mentorship from industry leaders.",
  },
];

const perks = [
  {
    icon: Coffee,
    title: "Unlimited PTO",
    description:
      "Take the time you need to recharge and maintain work-life balance.",
  },
  {
    icon: Gamepad2,
    title: "Team Events",
    description: "Regular team outings, game nights, and company retreats.",
  },
  {
    icon: Laptop,
    title: "Home Office Setup",
    description:
      "$1,500 budget to create your perfect home office environment.",
  },
  {
    icon: Users,
    title: "Mentorship Program",
    description:
      "Pair with senior team members for career guidance and growth.",
  },
];

const stats = [
  { label: "Team Members", value: 50, suffix: "+" },
  { label: "Countries", value: 12, suffix: "+" },
  { label: "Employee Rating", value: 4.9, suffix: "/5" },
  { label: "Years Average Tenure", value: 3.5, suffix: "" },
];

const testimonials = [
  {
    name: "David Kim",
    role: "Senior Developer",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=100&h=100&fit=crop&crop=face",
    content:
      "DevCraft has given me the freedom to work on cutting-edge projects while maintaining an incredible work-life balance.",
  },
  {
    name: "Lisa Wang",
    role: "Product Designer",
    avatar:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=100&h=100&fit=crop&crop=face",
    content:
      "The collaborative culture here is amazing. Everyone is supportive and always willing to help each other grow.",
  },
  {
    name: "Carlos Martinez",
    role: "AI Engineer",
    avatar:
      "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?w=100&h=100&fit=crop&crop=face",
    content:
      "Working on AI projects that actually make a difference in people's lives is incredibly fulfilling.",
  },
];

export default function CareersPage() {
  return (
    <main className="relative">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-background via-background/95 to-muted/20 relative overflow-hidden">
        <div className="floating-shapes" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeInView>
              <Badge variant="outline" className="mb-6">
                Join Our Team
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Build the <span className="gradient-text">Future</span> with Us
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join a team of passionate innovators creating cutting-edge
                solutions that transform businesses and improve lives.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-muted/10">
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
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
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

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Open Positions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your <span className="gradient-text">Perfect Role</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're always looking for talented individuals to join our growing
              team.
            </p>
          </FadeInView>

          <StaggerContainer className="space-y-6">
            {jobs.map((job, index) => (
              <StaggerItem
                key={job.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <Card className="glass-card border-0 hover:scale-[1.02] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                      <div className="space-y-4 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-semibold">{job.title}</h3>
                          <Badge variant="secondary">{job.department}</Badge>
                          <Badge
                            variant="outline"
                            className={
                              job.remote === "Remote"
                                ? "text-green-600 border-green-200"
                                : "text-blue-600 border-blue-200"
                            }
                          >
                            {job.remote}
                          </Badge>
                        </div>

                        <p className="text-muted-foreground">
                          {job.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {job.salary}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {job.requirements.map((req) => (
                            <Badge
                              key={req}
                              variant="outline"
                              className="text-xs"
                            >
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="lg:ml-6 flex-shrink-0">
                        <Button
                          size="lg"
                          className="w-full lg:w-auto bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-700 hover:to-purple-700"
                          asChild
                        >
                          <Link href="/contact">
                            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Why DevCraft
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Amazing <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe in taking care of our team with comprehensive benefits
              and perks.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <StaggerContainer className="contents">
              {benefits.map((benefit, index) => (
                <StaggerItem
                  key={benefit.title}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="glass-card border-0 h-full">
                    <CardContent className="p-6">
                      <div className="inline-flex p-3 rounded-lg bg-brand-100 dark:bg-brand-900/20 mb-4">
                        {(() => {
                          const BenefitIcon = benefit.icon;
                          return (
                            <BenefitIcon className="h-6 w-6 text-brand-600" />
                          );
                        })()}
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

          {/* Additional Perks */}
          <FadeInView>
            <h3 className="text-2xl font-bold text-center mb-8">
              Plus More Perks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((perk, index) => (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 rounded-lg glass"
                >
                  <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mb-3">
                    <perk.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{perk.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {perk.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Employee Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="gradient-text">Team Says</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our team members about their experience working at
              DevCraft.
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

      {/* Culture Section */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInView direction="left">
              <div>
                <Badge variant="outline" className="mb-4">
                  Our Culture
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  More Than Just a{" "}
                  <span className="gradient-text">Workplace</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At DevCraft, we've built a culture of innovation,
                    collaboration, and continuous learning. We believe that
                    great work happens when people feel supported, challenged,
                    and inspired.
                  </p>

                  <div className="space-y-4">
                    {[
                      "Remote-first with flexible working hours",
                      "Inclusive and diverse team from around the world",
                      "Continuous learning and skill development opportunities",
                      "Flat hierarchy with open communication",
                      "Focus on work-life balance and mental health",
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
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=300&h=400&fit=crop"
                    alt="Team collaboration"
                    className="rounded-lg object-cover h-48"
                  />
                  <img
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=300&h=400&fit=crop"
                    alt="Team meeting"
                    className="rounded-lg object-cover h-48 mt-8"
                  />
                  <img
                    src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?w=300&h=400&fit=crop"
                    alt="Office space"
                    className="rounded-lg object-cover h-48 -mt-8"
                  />
                  <img
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?w=300&h=400&fit=crop"
                    alt="Team celebration"
                    className="rounded-lg object-cover h-48"
                  />
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="floating-shapes opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We're always interested in connecting with talented individuals.
              Send us your resume and let's explore opportunities together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-brand-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold"
                asChild
              >
                <Link href="/contact">
                  Send Your Resume <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
                asChild
              >
                <Link href="mailto:careers@devcraft-solutions.com">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Email Us Directly
                </Link>
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
