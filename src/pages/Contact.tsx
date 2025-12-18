import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlowButton } from "@/components/ui/GlowButton";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const contactInfo = [
  { icon: Mail, label: "Email", value: "jenushan@example.com", href: "mailto:jenushan@example.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with actual Supabase edge function call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <PageLayout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Get In Touch"
            subtitle="Have a project in mind? Let's talk about how we can work together."
          />

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Let's <span className="text-primary">Connect</span>
                </h3>
                <p className="text-muted-foreground mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg card-hover opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${300 + index * 100}ms`, animationFillMode: "forwards" }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
                <h4 className="font-display font-bold text-foreground mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-border bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:glow-box transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8">
                <div className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={cn(
                          "w-full px-4 py-3 bg-secondary border border-border rounded-lg",
                          "text-foreground placeholder:text-muted-foreground",
                          "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary",
                          "transition-all duration-300"
                        )}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={cn(
                          "w-full px-4 py-3 bg-secondary border border-border rounded-lg",
                          "text-foreground placeholder:text-muted-foreground",
                          "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary",
                          "transition-all duration-300"
                        )}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full px-4 py-3 bg-secondary border border-border rounded-lg",
                        "text-foreground placeholder:text-muted-foreground",
                        "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary",
                        "transition-all duration-300"
                      )}
                      placeholder="Project Inquiry"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={cn(
                        "w-full px-4 py-3 bg-secondary border border-border rounded-lg resize-none",
                        "text-foreground placeholder:text-muted-foreground",
                        "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary",
                        "transition-all duration-300"
                      )}
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <GlowButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="ml-2 inline" />
                      </>
                    )}
                  </GlowButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
