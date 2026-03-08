import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Additional Certificates", href: "#additional-certificates" },
  { label: "Education", href: "#education" },
  { label: "Thesis", href: "#thesis" },
  { label: "Documentation", href: "#documentation" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed z-50 transition-all duration-500 ease-in-out ${scrolled
        ? "top-6 right-6 w-14 h-14 rounded-full border border-white/20 bg-black/60 backdrop-blur-xl shadow-[0_0_30px_rgba(255,46,99,0.3)] flex items-center justify-center overflow-visible"
        : "top-0 left-0 right-0 h-20 bg-transparent border-b border-white/0"
        }`}
    >
      <div className={`${scrolled ? "hidden" : "container mx-auto px-4 h-full"}`}>
        <div className={`flex items-center justify-between h-full ${scrolled ? "hidden" : ""}`}>
          {/* Desktop Menu - Visible only when NOT scrolled */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group overflow-hidden ${activeSection === item.href.substring(1)
                  ? "text-primary-glow drop-shadow-[0_0_8px_rgba(255,46,99,0.6)] bg-white/5"
                  : "text-foreground-secondary hover:text-white"
                  }`}
              >
                <span className={`relative z-10 ${activeSection === item.href.substring(1) ? "glow-text" : "group-hover:glow-text"
                  }`}>
                  {item.label}
                </span>
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary-glow/10 rounded-full -z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="absolute inset-0 rounded-full bg-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - Initial State */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-surface transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Scrolled Toggle Icon */}
      {scrolled && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full h-full flex items-center justify-center text-primary-glow hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      )}

      {/* Floating Column Menu (Both Mobile & Desktop Scrolled) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ type: "spring", duration: 0.4 }}
            className={`absolute ${scrolled
              ? "top-16 right-0 w-64 bg-black/90 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
              : "top-20 left-4 right-4 lg:hidden bg-surface/95 backdrop-blur-lg rounded-xl shadow-2xl"
              } overflow-hidden`}
          >
            {scrolled && (
              <div className="absolute inset-0 bg-gradient-to-b from-primary-glow/5 to-transparent pointer-events-none" />
            )}
            <div className="flex flex-col p-2 space-y-1 max-h-[70vh] overflow-y-auto custom-scrollbar">
              {navItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-4 py-3 rounded-xl text-center text-sm font-medium transition-all duration-300 relative group ${activeSection === item.href.substring(1)
                    ? "text-primary-glow bg-white/5 shadow-[0_0_15px_rgba(255,46,99,0.2)]"
                    : "text-foreground-secondary hover:text-white hover:bg-white/5"
                    }`}
                >
                  <span className={activeSection === item.href.substring(1) ? "glow-text" : "group-hover:glow-text"}>
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
