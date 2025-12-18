import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <Navbar />
      <main className="flex-1 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
