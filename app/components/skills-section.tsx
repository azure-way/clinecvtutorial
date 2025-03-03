import { personalData } from "../data/cv";

export function SkillsSection() {
  return (
    <section id="skills" className="py-8 md:py-12 animate-slide-up">
      <div className="container mx-auto px-4">
        <h2 className="section-title">SKILLS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {personalData.skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check-circle-fill text-primary"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                <span className="font-medium">{skill}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">LANGUAGES</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {personalData.languages.map((language, index) => (
              <div key={index} className="skill-item">
                <div className="flex flex-col">
                  <span className="font-medium">{language.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {language.proficiency}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
