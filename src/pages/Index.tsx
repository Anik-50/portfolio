import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { AdditionalCertificates } from "@/components/AdditionalCertificates";
import { Education } from "@/components/Education";
import { Thesis } from "@/components/Thesis";
import { Documentation } from "@/components/Documentation";

import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen text-foreground relative selection:bg-primary-glow/30">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <AdditionalCertificates />
        <Education />
        <Thesis />
        <Documentation />

        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
