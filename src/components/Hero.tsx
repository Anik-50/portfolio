import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const socialLinks = [
  { icon: Mail, href: "mailto:anikdas20162016@gmail.com", label: "Email", color: "hover:text-primary-glow" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/anik-dash-devops", label: "LinkedIn", color: "hover:text-primary-glow" },
  { icon: Github, href: "https://github.com/anik-devops11", label: "GitHub", color: "hover:text-primary-glow" },
  { icon: Phone, href: "tel:+8801729558071", label: "Phone", color: "hover:text-primary-glow" },
];

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-2">
                <span className="glitch-text text-foreground" data-text="Anik Dash">
                  Anik Dash
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-medium gradient-slide-text">
                Aspiring DevOps Engineer
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-foreground-muted leading-relaxed max-w-2xl text-justify"
            >
              I am an <strong className="gradient-slide-text">AWS Certified Solutions Architect – Associate</strong> with a strong focus on cloud-native architectures and modern DevOps practices, currently working as a <strong className="text-foreground-secondary">Jr. System Engineer</strong> at <strong className="text-foreground-secondary">Magnus Corporation</strong> where I support mission-critical infrastructure and drive operational reliability. I have hands-on experience with Linux, Git, Docker, Ansible, and Kubernetes, and I am deeply passionate about automation, CI/CD pipelines, and building scalable, high-impact cloud solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {/* Explore My Work Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={scrollToProjects}
                  size="lg"
                  className="relative overflow-hidden bg-gradient-to-r from-primary-glow via-primary-bright to-primary-glow bg-[length:200%_100%] hover:bg-[position:100%_0] text-white font-bold px-8 py-6 text-lg rounded-full shadow-[0_0_30px_rgba(255,46,99,0.5)] hover:shadow-[0_0_50px_rgba(255,46,99,0.8)] transition-all duration-500 group border-2 border-primary-glow/50 hover:border-primary-bright"
                >
                  <motion.span
                    className="relative z-10 flex items-center gap-2"
                    initial={{ x: 0 }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="inline-block"
                    >
                      ✨
                    </motion.span>
                    Explore My Work
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </motion.span>
                  {/* Shimmer Effect */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  />
                  {/* Pulsing Glow */}
                  <motion.span
                    className="absolute inset-0 rounded-full bg-primary-bright/20 blur-xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </Button>
              </motion.div>

              {/* View CV Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => {
                    window.open("https://drive.google.com/file/d/1OUTZUcfH1_O4ke7S2ZtP4KKYUn7A2TEJ/view?usp=sharing");
                  }}
                  size="lg"
                  className="relative overflow-hidden bg-gradient-to-r from-primary-bright via-primary-glow to-primary-bright bg-[length:200%_100%] hover:bg-[position:100%_0] text-white font-bold px-8 py-6 text-lg rounded-full shadow-[0_0_30px_rgba(255,46,99,0.5)] hover:shadow-[0_0_50px_rgba(255,46,99,0.8)] transition-all duration-500 group border-2 border-primary-bright/50 hover:border-primary-glow"
                >
                  <motion.span
                    className="relative z-10 flex items-center gap-2"
                    initial={{ x: 0 }}
                  >
                    <motion.span
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block"
                    >
                      📄
                    </motion.span>
                    View CV
                    <motion.span
                      className="inline-block"
                      animate={{ rotate: [0, 15, 0, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      ↗
                    </motion.span>
                  </motion.span>
                  {/* Shimmer Effect */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  />
                  {/* Pulsing Glow */}
                  <motion.span
                    className="absolute inset-0 rounded-full bg-primary-glow/20 blur-xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full bg-surface border border-border-light ${social.color} transition-all duration-300 hover:border-primary-glow hover:shadow-[0_0_20px_rgba(255,46,99,0.3)]`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image with Orbit Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 overflow-visible"
            >
              {/* Main Profile Image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary-glow glow-border-strong shadow-2xl z-10">
                <img
                  src={profileImage}
                  alt="Anik Dash"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Neon Aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-primary-glow/20 blur-2xl animate-pulse" />

              {/* Rotating Rings */}
              <div className="absolute inset-0" aria-hidden="true">
                {/* Inner Ring - Clockwise */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[210px] h-[210px] md:w-[270px] md:h-[270px] lg:w-[320px] lg:h-[320px]">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full rounded-full border-2 border-primary-glow/40"
                  />
                </div>

                {/* Outer Ring - Counter-Clockwise */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full rounded-full border border-primary-glow/25 shadow-[0_0_30px_rgba(255,46,99,0.35)]"
                  />
                </div>
              </div>

              {/* Decorative Background Glow */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full bg-primary-glow/10 blur-3xl" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-foreground-muted"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
