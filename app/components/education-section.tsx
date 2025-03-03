import { personalData } from "../data/cv";

export function EducationSection() {
  return (
    <section id="education" className="py-8 md:py-12 animate-slide-up">
      <div className="container mx-auto px-4">
        <h2 className="section-title">EDUCATION</h2>
        <div className="space-y-6">
          {personalData.education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="mb-2">
                <h3 className="text-xl font-bold text-primary">
                  {edu.degree}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-muted-foreground">
                  <span className="font-medium">{edu.institution}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{edu.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
