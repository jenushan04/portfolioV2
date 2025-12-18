import { PageLayout } from "@/components/layout/PageLayout";
import { GlowButton } from "@/components/ui/GlowButton";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Code, Cpu, Database, Layers } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Cursor-following light source */}
          <div 
            className="absolute w-[400px] h-[400px] bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl transition-all duration-300 ease-out"
            style={{
              left: mousePosition.x - 200,
              top: mousePosition.y - 200,
            }}
          />
          <div 
            className="absolute w-[200px] h-[200px] bg-gradient-radial from-primary/20 via-primary/8 to-transparent rounded-full blur-2xl transition-all duration-200 ease-out"
            style={{
              left: mousePosition.x - 100,
              top: mousePosition.y - 100,
            }}
          />
          
          {/* Large glow orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
          

          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: "0s" }} />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/60 rounded-full animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "3s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10 h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto w-full">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left flex flex-col justify-center">
              {/* Glitch-style intro */}
              <div className="mb-6 opacity-0 animate-fade-in-down" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
                <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">
                  &lt;/developer&gt;
                </span>
              </div>

              {/* Main heading */}
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
                <span className="text-foreground">I'm </span>
                <span className="text-primary glow-text">Jenushan</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-muted-foreground font-light mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
                Full-Stack Developer & Creative Technologist
              </p>

              {/* Tagline */}
              <p className="text-lg text-muted-foreground/70 max-w-2xl lg:max-w-none mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
                Crafting powerful digital experiences with cutting-edge technology.
                Building the future, one line of code at a time.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}>
                <Link to="/projects">
                  <GlowButton size="lg">
                    View My Work
                    <ArrowRight size={18} className="ml-2 inline" />
                  </GlowButton>
                </Link>
                <Link to="/contact">
                  <GlowButton variant="outline" size="lg">
                    Get In Touch
                  </GlowButton>
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end items-end h-full opacity-0 animate-fade-in-right relative" style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}>
              <img 
                src="/assets/jenu.png" 
                alt="Jenushan - Full-Stack Developer" 
                className="w-80 h-auto md:w-[420px] lg:w-[500px] max-h-[calc(100vh-5rem)] object-cover object-bottom rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500 relative z-10"
              />
              
              {/* Light source in front of image */}
              <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-primary/30 via-primary/15 to-transparent rounded-full blur-2xl animate-pulse-glow z-20 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-gradient-radial from-primary/40 via-primary/20 to-transparent rounded-full blur-xl animate-pulse-glow z-20 pointer-events-none" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1500ms", animationFillMode: "forwards" }}>
          <div className="flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown size={20} />
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Code, label: "Frontend", desc: "React, TypeScript, Tailwind" },
              { icon: Database, label: "Backend", desc: "Node.js, Python, APIs" },
              { icon: Layers, label: "Full-Stack", desc: "End-to-end solutions" },
              { icon: Cpu, label: "Systems", desc: "Cloud, DevOps, Architecture" },
            ].map((skill, index) => (
              <div
                key={skill.label}
                className="group p-6 bg-card border border-border rounded-lg text-center card-hover opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${1200 + index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <skill.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1">{skill.label}</h3>
                <p className="text-sm text-muted-foreground">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to build something <span className="text-primary glow-text">amazing</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's collaborate and bring your vision to life with clean code and stunning design.
          </p>
          <Link to="/contact">
            <GlowButton size="lg">
              Start a Conversation
              <ArrowRight size={18} className="ml-2 inline" />
            </GlowButton>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
