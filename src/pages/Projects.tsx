import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard, Project } from "@/components/projects/ProjectCard";
import { cn } from "@/lib/utils";

const categories = ["All", "Web App", "Mobile", "API", "UI/UX"];

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart, checkout, and payment integration. Built for scalability and performance.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Web App",
  },
  {
    id: "2",
    title: "Fitness Tracker App",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with real-time sync.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    tags: ["React Native", "Firebase", "TypeScript"],
    liveUrl: "https://example.com",
    category: "Mobile",
  },
  {
    id: "3",
    title: "Real-Time Analytics API",
    description: "High-performance REST API handling millions of requests with real-time data processing and visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Python", "FastAPI", "Redis", "Docker"],
    githubUrl: "https://github.com",
    category: "API",
  },
  {
    id: "4",
    title: "Social Media Dashboard",
    description: "Comprehensive dashboard for managing multiple social accounts with scheduling and analytics features.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Next.js", "Tailwind", "Prisma", "OAuth"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Web App",
  },
  {
    id: "5",
    title: "Banking App Redesign",
    description: "Complete UI/UX redesign for a mobile banking application, focusing on accessibility and user experience.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    tags: ["Figma", "UI Design", "Prototyping"],
    liveUrl: "https://example.com",
    category: "UI/UX",
  },
  {
    id: "6",
    title: "Task Management System",
    description: "Enterprise task management with team collaboration, Kanban boards, and integration capabilities.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
    tags: ["Vue.js", "GraphQL", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Web App",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <PageLayout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="My Projects"
            subtitle="A collection of work that showcases my skills and passion for building great software"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 text-sm font-medium uppercase tracking-wider rounded-full border transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary glow-box"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
