import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 terminal-text text-center">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary-glow to-primary-bright mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="max-w-3xl mx-auto bg-card border-2 border-primary-glow/30 hover:border-primary-glow transition-all duration-300 glow-border p-8 relative overflow-hidden group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary-glow/10 rounded-full">
                  <GraduationCap className="w-8 h-8 text-primary-glow" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    B.Sc in Computer Science & Engineering
                  </h3>
                  <p className="text-xl text-primary-glow font-semibold mb-2">
                    Premier University, Chittagong
                  </p>
                  <div className="flex flex-wrap gap-4 text-foreground-muted">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>2019 - 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Chittagong, Bangladesh</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-foreground-secondary">
                <p className="flex items-start gap-2">
                  <span className="text-primary-glow mt-1">•</span>
                  <span>Comprehensive curriculum covering software engineering, algorithms, databases, and system design</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary-glow mt-1">•</span>
                  <span>Specialized focus on cloud computing, DevOps practices, and containerization technologies</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary-glow mt-1">•</span>
                  <span>Completed undergraduate thesis on deep learning applications in medical imaging</span>
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
