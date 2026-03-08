import { motion } from "framer-motion";
import { ExternalLink, BookOpen, FileCode, Terminal, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const documentationItems = [
  {
    title: "Complete Shell Scripting",
    url: "https://github.com/anik-devops11/complete-shell-scripting",
    icon: Terminal,
    description: "Comprehensive shell scripting guide and examples",
  },
  {
    title: "Docker For Beginners",
    url: "https://github.com/anik-devops11/Docker-For-Beginners",
    icon: FileCode,
    description: "Getting started with Docker containerization",
  },
  {
    title: "Linux",
    url: "https://github.com/anik-devops11/Linux",
    icon: BookOpen,
    description: "Linux fundamentals and administration guide",
  },
  {
    title: "Thesis Documentation",
    url: "https://github.com/anik-devops11/shoulder-implant-xray-image-classification-with-attention-based-deep-learning-model",
    icon: GraduationCap,
    description: "Research on X-ray image classification with deep learning",
  },
];

export const Documentation = () => {
  return (
    <section id="documentation" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 terminal-text">
            Documentation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary-glow to-primary-bright mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {documentationItems.map((doc, index) => {
            const IconComponent = doc.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="bg-card border border-border-light hover:border-primary-glow transition-all duration-300 p-6 h-full group hover:glow-border">
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col h-full"
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div className="p-3 bg-surface rounded-lg border border-border-light group-hover:border-primary-glow transition-colors">
                        <IconComponent className="w-6 h-6 text-primary-glow" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary-glow transition-colors mb-2">
                          {doc.title}
                        </h3>
                        <p className="text-sm text-foreground-muted">
                          {doc.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-auto pt-4 flex items-center gap-2 text-foreground-secondary group-hover:text-primary-glow transition-colors">
                      <span className="text-sm font-medium">View on GitHub</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </a>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
