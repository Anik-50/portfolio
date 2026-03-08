import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, MapPin, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "anikdasprivate@gmail.com",
    href: "mailto:anikdasprivate@gmail.com",
    copyable: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+8801849-587793",
    href: "tel:+8801849587793",
    copyable: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View GitHub Profile",
    href: "https://github.com/anik-devops11",
    copyable: false,
    isButton: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "View LinkedIn Profile",
    href: "https://www.linkedin.com/in/anik-dash-devops",
    copyable: false,
    isButton: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chittagong, Bangladesh",
    href: null,
    copyable: false,
  },
];

export const Contact = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 terminal-text text-center">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary-glow to-primary-bright mx-auto rounded-full mb-4" />
          <p className="text-foreground-secondary max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to connect!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="bg-card border-2 border-border-light hover:border-primary-glow transition-all duration-300 p-6 h-full group hover:glow-border">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-4 bg-primary-glow/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-primary-glow" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted mb-1">{info.label}</p>
                    {info.href ? (
                      // @ts-ignore
                      info.isButton ? (
                        <div className="mt-2">
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-transparent border border-primary-glow text-primary-glow hover:bg-primary-glow hover:text-white font-semibold rounded-full transition-all duration-300 px-4 py-2 text-sm w-auto min-w-[120px]"
                          >
                            {info.value}
                          </a>
                        </div>
                      ) : (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-foreground font-semibold hover:text-primary-glow transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      )
                    ) : (
                      <p className="text-foreground font-semibold">{info.value}</p>
                    )}
                  </div>
                  {info.copyable && (
                    <button
                      onClick={() => handleCopy(info.value, index)}
                      className="flex items-center gap-2 px-3 py-2 text-xs bg-surface rounded-full border border-border-light hover:border-primary-glow text-foreground-muted hover:text-primary-glow transition-all duration-300"
                    >
                      {copiedIndex === index ? (
                        <>
                          <Check className="w-3 h-3" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          Copy
                        </>
                      )}
                    </button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
