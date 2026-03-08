import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye } from "lucide-react";

export const CVResume = () => {
  const [selectedDoc, setSelectedDoc] = useState<"cv" | "resume">("resume");

  const handleViewPDF = () => {
    // This would open the PDF in a new tab
    // In production, replace with actual PDF URLs
    const pdfUrl = selectedDoc === "cv" ? "/cv.pdf" : "/resume.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <section id="cv-resume" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 terminal-text text-center">
            CV & Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary-glow to-primary-bright mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="max-w-2xl mx-auto bg-card border-2 border-border-light hover:border-primary-glow transition-all duration-300 p-8 glow-border">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-primary-glow/10 rounded-full mb-4">
                <FileText className="w-12 h-12 text-primary-glow" />
              </div>
              <p className="text-foreground-secondary">
                Download or view my professional documents to learn more about my experience and qualifications.
              </p>
            </div>

            <div className="flex justify-center gap-4 mb-6">
              <Button
                onClick={() => setSelectedDoc("resume")}
                variant={selectedDoc === "resume" ? "default" : "outline"}
                className={`w-48 rounded-full font-semibold transition-all duration-300 ${selectedDoc === "resume"
                  ? "bg-primary-glow hover:bg-primary-bright text-white glow-border"
                  : "border-primary-glow/30 hover:border-primary-glow hover:bg-primary-glow/10 text-foreground-secondary hover:text-primary-glow"
                  }`}
              >
                <FileText className="w-4 h-4 mr-2" />
                Resume
              </Button>
              <Button
                onClick={() => setSelectedDoc("cv")}
                variant={selectedDoc === "cv" ? "default" : "outline"}
                className={`w-48 rounded-full font-semibold transition-all duration-300 ${selectedDoc === "cv"
                  ? "bg-primary-glow hover:bg-primary-bright text-white glow-border"
                  : "border-primary-glow/30 hover:border-primary-glow hover:bg-primary-glow/10 text-foreground-secondary hover:text-primary-glow"
                  }`}
              >
                <FileText className="w-4 h-4 mr-2" />
                CV
              </Button>
            </div>

            <div className="flex flex-col items-center gap-3">
              <Button
                onClick={handleViewPDF}
                className="bg-primary-glow hover:bg-primary-bright text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:glow-border-strong px-10 w-auto min-w-[240px]"
              >
                <Eye className="w-5 h-5 mr-2" />
                Open {selectedDoc === "cv" ? "CV" : "Resume"} PDF
              </Button>
              <Button
                onClick={handleViewPDF}
                variant="outline"
                className="border-primary-glow/30 hover:border-primary-glow hover:bg-primary-glow/10 text-foreground-secondary hover:text-primary-glow rounded-full font-semibold transition-all duration-300 px-10 w-auto min-w-[240px]"
              >
                <Download className="w-5 h-5 mr-2" />
                Download {selectedDoc === "cv" ? "CV" : "Resume"}
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
