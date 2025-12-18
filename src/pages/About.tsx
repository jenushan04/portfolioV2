import { PageLayout } from "@/components/layout/PageLayout";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlowButton } from "@/components/ui/GlowButton";
import { Link } from "react-router-dom";
import { Code, Database, Globe, Palette, Server, Smartphone, ArrowRight, Calendar } from "lucide-react";

const skills = [
  { name: "React / Next.js", category: "Frontend", level: 95 },
  { name: "TypeScript", category: "Frontend", level: 90 },
  { name: "Tailwind CSS", category: "Frontend", level: 95 },
  { name: "Node.js", category: "Backend", level: 85 },
  { name: "Python", category: "Backend", level: 80 },
  { name: "PostgreSQL", category: "Database", level: 85 },
  { name: "AWS / Cloud", category: "DevOps", level: 75 },
  { name: "Docker", category: "DevOps", level: 80 },
];

const services = [
  { icon: Globe, title: "Web Development", desc: "Responsive, performant web applications built with modern frameworks" },
  { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform mobile applications with React Native" },
  { icon: Server, title: "Backend Systems", desc: "Scalable APIs and microservices architecture" },
  { icon: Database, title: "Database Design", desc: "Efficient database schemas and optimization" },
  { icon: Code, title: "Clean Code", desc: "Maintainable, tested, and well-documented codebases" },
  { icon: Palette, title: "UI/UX Design", desc: "Intuitive interfaces with stunning visual design" },
];

const timeline = [
  { year: "2024", title: "Senior Developer", company: "Tech Innovations Inc.", desc: "Leading full-stack development for enterprise clients" },
  { year: "2022", title: "Full-Stack Developer", company: "Digital Solutions", desc: "Built scalable web applications and APIs" },
  { year: "2020", title: "Frontend Developer", company: "Creative Agency", desc: "Developed responsive websites and interactive experiences" },
  { year: "2019", title: "Computer Science Degree", company: "University", desc: "Graduated with honors in Computer Science" },
];

export default function About() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image / Avatar */}
            <div className="relative opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <div className="relative w-80 h-80 mx-auto lg:mx-0">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
                
                {/* Avatar placeholder */}
                <div className="relative w-full h-full rounded-full border-2 border-primary/50 overflow-hidden bg-gradient-to-br from-card to-secondary flex items-center justify-center glow-border">
                  <span className="font-display text-8xl font-black text-primary glow-text">J</span>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse-glow" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/60 rounded-full animate-float" />
              </div>
            </div>

            {/* Bio */}
            <div className="text-center lg:text-left">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
                About <span className="text-primary glow-text">Me</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
                I'm a passionate full-stack developer with over 5 years of experience crafting digital experiences that blend stunning design with powerful functionality.
              </p>
              <p className="text-muted-foreground mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
                My journey in tech started with a curiosity for how things work, evolving into a career where I transform complex problems into elegant solutions. I believe in writing clean, maintainable code and creating interfaces that users love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
                <Link to="/projects">
                  <GlowButton>
                    View Projects
                    <ArrowRight size={18} className="ml-2 inline" />
                  </GlowButton>
                </Link>
                <Link to="/contact">
                  <GlowButton variant="outline">Contact Me</GlowButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Skills & Expertise"
            subtitle="Technologies I work with to bring ideas to life"
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="p-4 bg-card border border-border rounded-lg opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground mt-1 block">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="What I Do"
            subtitle="Comprehensive development services for your digital needs"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-6 bg-card border border-border rounded-lg card-hover opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Experience"
            subtitle="My professional journey in the tech industry"
          />

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-4 mb-12 opacity-0 animate-fade-in-up ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
              >
                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="p-6 bg-card border border-border rounded-lg card-hover">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <Calendar size={16} />
                      <span className="font-display font-bold">{item.year}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-primary/80 mb-2">{item.company}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-8 glow-box" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
