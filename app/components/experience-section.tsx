import { personalData } from "../data/cv";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-8 md:py-12 animate-slide-up">
      <div className="container mx-auto px-4">
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="space-y-6">
          {personalData.experience.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="mb-2">
                <h3 className="text-xl font-bold text-primary">
                  {job.position}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-muted-foreground">
                  <span className="font-medium">{job.company}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{job.period}</span>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right text-primary mt-1 flex-shrink-0"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
