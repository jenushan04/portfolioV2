import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard, Project } from "@/components/projects/ProjectCard";
import { cn } from "@/lib/utils";

const categories = ["All", "AI", "Web App", "Mobile"];

// Projects pulled directly from github.com/jenushan04
const projects: Project[] = [
  {
    id: "edith",
    title: "EDITH — AI Voice Assistant",
    description: "Real-time AI voice assistant in Python: local Whisper speech-to-text, Groq (Llama 3.3 70B) reasoning, and pyttsx3/gTTS voice output, with conversation memory and built-in skills.",
    image: "https://opengraph.githubassets.com/1/jenushan04/EDITH-AI_Voice_Assistant",
    tags: ["Python", "Whisper", "Groq LLM", "gTTS"],
    githubUrl: "https://github.com/jenushan04/EDITH-AI_Voice_Assistant",
    category: "AI",
  },
  {
    id: "sql-converter",
    title: "Enterprise SQL Converter",
    description: "Angular web app that converts large CSV files (10k+ rows) into clean SQL insert statements, built for speed and reliability.",
    image: "https://opengraph.githubassets.com/1/jenushan04/Enterprise-SQL-Converter",
    tags: ["Angular", "TypeScript", "HTML"],
    githubUrl: "https://github.com/jenushan04/Enterprise-SQL-Converter",
    category: "Web App",
  },
  {
    id: "globetrek",
    title: "GlobeTrek Adventures",
    description: "A travel and tourism management system for browsing, booking and managing tour packages and trips.",
    image: "https://opengraph.githubassets.com/1/jenushan04/GlobeTrek-Adventures",
    tags: ["Python", "Web App"],
    githubUrl: "https://github.com/jenushan04/GlobeTrek-Adventures",
    category: "Web App",
  },
  {
    id: "printxpress",
    title: "PrintXpress",
    description: "An Android app for placing, tracking and managing custom design and print orders.",
    image: "https://opengraph.githubassets.com/1/jenushan04/PrintXpress",
    tags: ["Java", "Android"],
    githubUrl: "https://github.com/jenushan04/PrintXpress",
    category: "Mobile",
  },
  {
    id: "petcare",
    title: "PetCare",
    description: "Native Android app for ordering pet care services, built in Java.",
    image: "https://opengraph.githubassets.com/1/jenushan04/petcare",
    tags: ["Java", "Android"],
    githubUrl: "https://github.com/jenushan04/petcare",
    category: "Mobile",
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description: "This animated developer portfolio, built with React, TypeScript, Tailwind CSS and shadcn/ui on a Supabase backend.",
    image: "https://opengraph.githubassets.com/1/jenushan04/portfolioV2",
    tags: ["React", "TypeScript", "Tailwind", "Supabase"],
    githubUrl: "https://github.com/jenushan04/portfolioV2",
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
