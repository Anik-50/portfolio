import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    issued: "May 2025",
    expires: "May 2028",
    credentialUrl: "https://www.credly.com/badges/83248789-17da-42ac-b78c-983f74cefba9/public_url",
    logo: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png",
  },
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issued: "February 2026",
    expires: "February 2029",
    credentialUrl: "https://www.credly.com/badges/c81438d4-56ae-4c11-9672-458e05f4b377/public_url",
    logo: "https://images.credly.com/size/680x680/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    issued: "July 2025",
    expires: "July 2027",
    credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=24E516E76ECE2A4BCF7678E8AFC760EEE0D3FA5BBA108C6399A7CC1F463B99D1",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    issued: "July 2025",
    expires: "July 2027",
    credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=2FA06A6E84931C83C64DCDF20F4FBD701D3E416801643B00664B9CDB34189D8C",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  },
  {
    name: "LFS101: Introduction to Linux",
    issuer: "The Linux Foundation",
    issued: "August 2025",
    expires: null,
    credentialUrl: "https://www.credly.com/earner/earned/badge/90e68475-f8e9-43d2-bb36-82151b95566b",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },

];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 terminal-text text-center">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary-glow to-primary-bright mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card border-2 border-border-light hover:border-primary-glow transition-all duration-300 p-6 h-full group hover:glow-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-surface rounded-lg flex items-center justify-center w-16 h-16 border border-border-light">
                    <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary-glow transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-foreground-secondary font-semibold mb-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-foreground-muted">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">
                      Issued: {cert.issued}
                      {cert.expires && ` • Expires: ${cert.expires}`}
                    </span>
                  </div>
                </div>

                <div className="flex justify-center mt-4">
                  <Button
                    asChild
                    className="relative bg-transparent backdrop-blur-sm border-2 border-primary-glow/40 hover:border-primary-glow text-primary-glow hover:text-white font-semibold rounded-full px-5 py-2 text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,46,99,0.5)] group overflow-hidden"
                  >
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 relative z-10"
                    >
                      <Award className="w-3.5 h-3.5 transition-transform group-hover:rotate-12" />
                      View Credential
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      <span className="absolute inset-0 bg-gradient-to-r from-primary-glow/0 via-primary-glow/20 to-primary-glow/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
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
