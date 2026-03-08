import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const technologies = [
  "Linux",
  "Networking",
  "Virtualization",
  "Troubleshooting",
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center terminal-text">
            Experience
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-card border-border-light hover:border-primary-glow transition-all duration-300 hover:glow-border p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-surface border border-border-light">
                  <Briefcase className="w-6 h-6 text-primary-glow" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    Magnus Corporation LTD
                  </h3>
                  <p className="text-xl text-primary-glow font-semibold mb-2">
                    Jr. System Engineer
                  </p>
                  <div className="flex items-center gap-2 text-foreground-muted mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>Full-Time • Currently Working</span>
                  </div>
                </div>
              </div>

              <p className="text-foreground-secondary leading-relaxed mb-6">
                Contributing to mission-critical infrastructure in a fast-paced environment,
                focusing on cloud operations, Linux system administration, and DevOps tooling.
                Responsible for maintaining and optimizing containerized workloads, implementing
                monitoring solutions, and supporting automation initiatives to drive operational
                excellence and system reliability.
              </p>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className="px-3 py-1 text-sm bg-surface border border-border-light text-foreground-secondary rounded-full hover:border-primary-glow hover:text-primary-glow transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
