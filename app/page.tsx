import { Header } from "./components/header";
import { AboutSection } from "./components/about-section";
import { SkillsSection } from "./components/skills-section";
import { ExperienceSection } from "./components/experience-section";
import { EducationSection } from "./components/education-section";
import { CertificatesSection } from "./components/certificates-section";
import { FloatingNav } from "./components/floating-nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pb-20">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificatesSection />
      </main>
      <FloatingNav />
    </div>
  );
}
