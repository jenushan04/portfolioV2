import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-primary/20"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-2xl font-bold tracking-wider text-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="text-primary glow-text">J</span>ENUSHAN
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-medium text-sm tracking-widest uppercase animated-underline transition-colors duration-300",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500",
            isOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col gap-4 py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "font-medium text-sm tracking-widest uppercase transition-colors duration-300 py-2",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
