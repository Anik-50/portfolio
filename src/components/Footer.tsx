import { Mail, Linkedin, Github, Phone } from "lucide-react";

const socialLinks = [
  { icon: Mail, href: "mailto:anikdas20162016@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/anik-dash-devops", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/anik-devops11", label: "GitHub" },
  { icon: Phone, href: "tel:+8801729558071", label: "Phone" },
];

export const Footer = () => {
  return (
    <footer id="footer" className="border-t border-border-light bg-surface/50">
      <div className="container mx-auto px-4 py-8">
        {/* Gradient line */}
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary-glow to-transparent mb-8" />

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border-light hover:border-primary-glow transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,46,99,0.3)]"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-foreground-secondary hover:text-primary-glow transition-colors" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-foreground-muted text-sm">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-primary-glow font-semibold">Anik Dash</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
