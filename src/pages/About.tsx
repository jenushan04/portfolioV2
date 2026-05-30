import { PageLayout } from "@/components/layout/PageLayout";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlowButton } from "@/components/ui/GlowButton";
import { Link } from "react-router-dom";
import { Code, Database, Globe, Palette, Server, Smartphone, ArrowRight, Calendar } from "lucide-react";

// Technical skills sourced from github.com/jenushan04 tech stack
const skillGroups = [
  {
    category: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML"],
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "PHP", "Laravel", "Java", "Python", "Django"],
  },
  {
    category: "Database & Cloud",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "SQLite", "AWS", "Docker", "Linux", "Git", "GitHub"],
  },
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
  { year: "May 2025", title: "Chief Operating Officer (COO)", company: "Thamizhi LLC", desc: "Promoted to COO, overseeing operations and product engineering for the company's ERP and SaaS platforms." },
  { year: "Jan 2025", title: "Junior Developer", company: "Thamizhi LLC", desc: "Began my software development career building enterprise web applications and backend systems." },
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
                
                {/* Profile photo */}
                <div className="relative w-full h-full rounded-full border-2 border-primary/50 overflow-hidden bg-gradient-to-br from-card to-secondary glow-border">
                  <img
                    src="/assets/about.jpg"
                    alt="Jenushan — Full-Stack Developer & COO at Thamizhi LLC"
                    className="w-full h-full object-cover"
                  />
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
                I'm a full-stack developer who began my career in January 2025 at Thamizhi LLC and was promoted to Chief Operating Officer (COO) in May 2025.
              </p>
              <p className="text-muted-foreground mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
                I specialize in enterprise ERP and SaaS platforms, scalable backend systems, and PostgreSQL optimization. I love writing clean, maintainable code and crafting modern, dark-themed interfaces that users enjoy.
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
            title="Technical Skills"
            subtitle="Languages, frameworks and tools I work with to bring ideas to life"
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skillGroups.map((group, index) => (
              <div
                key={group.category}
                className="p-6 bg-card border border-border rounded-lg card-hover opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <group.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tech-badge text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
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
