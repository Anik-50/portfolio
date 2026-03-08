import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AWS Serverless Resume Builder",
    description: "A fully serverless application for creating and hosting professional resumes using AWS services including Lambda, API Gateway, S3, and DynamoDB.",
    tech: ["AWS Lambda", "API Gateway", "S3", "DynamoDB"],
    techIcons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"],
    github: "https://github.com/anik-devops11",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    title: "Serverless Image Resizing & Watermarking",
    description: "Automated image processing pipeline using AWS Lambda triggers for real-time image optimization and watermarking upon S3 upload.",
    tech: ["AWS Lambda", "S3", "CloudWatch", "Python"],
    techIcons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"],
    github: "https://github.com/anik-devops11",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    title: "Secure Static Site Deployment on AWS",
    description: "Highly available and secure static website hosting solution using CloudFront, S3, Route53, and AWS Certificate Manager with CI/CD integration.",
    tech: ["CloudFront", "S3", "Route53", "ACM"],
    techIcons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"],
    github: "https://github.com/anik-devops11",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    title: "Docker Based Developer Environment",
    description: "Containerized development environment with Docker Compose orchestrating multiple services including databases, caching, and message queues.",
    tech: ["Docker", "Docker Compose", "PostgreSQL", "Redis"],
    techIcons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"],
    github: "https://github.com/anik-devops11",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    title: "Dockerized OTP Service",
    description: "Microservice architecture for generating and validating one-time passwords with Redis caching, fully containerized for easy deployment.",
    tech: ["Docker", "Node.js", "Redis", "Express"],
    techIcons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"],
    github: "https://github.com/anik-devops11",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 terminal-text text-center">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary-glow to-primary-bright mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card border-2 border-border-light hover:border-primary-glow transition-all duration-300 p-6 h-full flex flex-col group hover:glow-border">
                <div className="mb-4">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-surface rounded-lg border border-border-light p-2">
                    <img src={project.icon} alt={project.title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary-glow transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground-muted mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techIcons.map((icon, idx) => (
                      <div key={idx} className="w-6 h-6 flex items-center justify-center">
                        <img src={icon} alt={project.tech[idx]} className="w-full h-full object-contain" />
                      </div>
                    ))}
                  </div>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-primary-glow/10 text-primary-glow border border-primary-glow/30 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center mt-auto pt-4">
                  <Button
                    asChild
                    className="relative bg-transparent backdrop-blur-sm border-2 border-primary-glow/40 hover:border-primary-glow text-primary-glow hover:text-white font-semibold rounded-full px-5 py-2 text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,46,99,0.5)] group overflow-hidden"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 relative z-10"
                    >
                      <Github className="w-3.5 h-3.5 transition-transform group-hover:rotate-12" />
                      View Repository
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
