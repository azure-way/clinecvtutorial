import { personalData } from "../data/cv";

export function AboutSection() {
  return (
    <section id="about" className="py-8 md:py-12 animate-slide-up">
      <div className="container mx-auto px-4">
        <h2 className="section-title">ABOUT ME</h2>
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
          <p className="text-foreground leading-relaxed">
            {personalData.about}
          </p>
        </div>
      </div>
    </section>
  );
}
