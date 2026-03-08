import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileCheck, ExternalLink } from "lucide-react";

const additionalCerts = [
  {
    name: "GIT for Beginners",
    platform: "KodeKloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    url: "https://kodekloud.com/courses/git-for-beginners/",
  },
  {
    name: "GitHub Actions Certification",
    platform: "KodeKloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
    url: "https://kodekloud.com/courses/github-actions/",
  },
  {
    name: "Jenkins For Beginners",
    platform: "KodeKloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    url: "https://kodekloud.com/courses/jenkins/",
  },
  {
    name: "Terraform Basics",
    platform: "KodeKloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    url: "https://kodekloud.com/courses/terraform-for-beginners/",
  },
  {
    name: "AWS Cloud Practitioner (CLF-C02)",
    platform: "KodeKloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    url: "https://kodekloud.com/courses/aws-certified-cloud-practitioner-clf-c02/",
  },
  {
    name: "CCEP — Certified Cybersecurity Educator Professional",
    platform: "Red Team Leaders",
    issued: "November 2025",
    expires: null,
    icon: "https://images.coursestack.com/b442ad36-44fe-4b6f-99f5-fd6f7ddbb4b4/121aa084-cf7e-4b73-bda3-d38f53f9bff1",
    url: "https://img.icons8.com/color/512/cyber-security.png",
  },
];

export const AdditionalCertificates = () => {
  return (
    <section id="additional-certificates" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 terminal-text text-center">
            Additional Certificates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary-glow to-primary-bright mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalCerts.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="bg-card border border-border-light hover:border-primary-glow transition-all duration-300 p-6 h-full group hover:glow-border flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-md bg-surface border border-border-light flex items-center justify-center overflow-hidden">
                    <img src={cert.icon} alt={cert.name} className="w-8 h-8 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary-glow transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-foreground-muted">{cert.platform}</p>
                  </div>
                </div>

                <div className="flex justify-center mt-auto pt-4">
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary-glow/30 hover:border-primary-glow hover:bg-primary-glow/10 text-foreground-secondary hover:text-primary-glow rounded-full transition-all duration-300 px-8 w-auto min-w-[200px]"
                  >
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <FileCheck className="w-4 h-4" />
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
