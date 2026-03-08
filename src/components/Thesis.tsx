import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, BookOpen, Database, Brain, Code } from "lucide-react";

export const Thesis = () => {
  return (
    <section id="thesis" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 terminal-text text-center">
            Undergraduate Thesis
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary-glow to-primary-bright mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="max-w-4xl mx-auto bg-card border-2 border-primary-glow/30 hover:border-primary-glow transition-all duration-300 glow-border p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-primary-glow/10 rounded-full">
                  <BookOpen className="w-8 h-8 text-primary-glow" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary-glow transition-colors">
                    Shoulder Implant Xray Image Classification With Attention Based Deep Learning Model
                  </h3>
                  <p className="text-foreground-secondary leading-relaxed mb-6">
                    This research focuses on developing an advanced deep learning model incorporating attention mechanisms
                    to accurately classify shoulder implant X-ray images. The model aims to assist medical professionals
                    in identifying implant types and detecting potential complications, contributing to improved diagnostic
                    accuracy and patient care outcomes.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-3 p-4 bg-surface rounded-lg border border-border-light">
                  <Database className="w-6 h-6 text-primary-glow" />
                  <div>
                    <p className="text-xs text-foreground-muted">Dataset</p>
                    <p className="font-semibold text-foreground">Medical X-rays</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-surface rounded-lg border border-border-light">
                  <Brain className="w-6 h-6 text-primary-glow" />
                  <div>
                    <p className="text-xs text-foreground-muted">Model</p>
                    <p className="font-semibold text-foreground">Attention CNN</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-surface rounded-lg border border-border-light">
                  <Code className="w-6 h-6 text-primary-glow" />
                  <div>
                    <p className="text-xs text-foreground-muted">Implementation</p>
                    <p className="font-semibold text-foreground">Python/TensorFlow</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-surface rounded-lg border border-border-light">
                  <Brain className="w-6 h-6 text-primary-glow" />
                  <div>
                    <p className="text-xs text-foreground-muted">Accuracy</p>
                    <p className="font-semibold text-foreground">High Performance</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <Button
                  asChild
                  className="bg-primary-glow hover:bg-primary-bright text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:glow-border-strong px-8 w-auto min-w-[200px]"
                >
                  <a
                    href="https://github.com/anik-devops11/shoulder-implant-xray-image-classification-with-attention-based-deep-learning-model"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    View Thesis Repository
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
