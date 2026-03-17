"use client"

import { useLanguage } from "@/components/language-provider"

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "CSS", 'HTML', "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "MongoDB", "MariaDB", "Firebase/Firestore", "Express.js", "Nest.js", "Sequelize", "Mongoose"],
  },
  {
    category: "Tools",
    items: ["Git", "Github", "Figma", "Postman"],
  },
]

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-accent text-sm font-mono mb-2 tracking-wider">
              {t.about.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-8">
              {t.about.title}
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
              <p>{t.about.bio3}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-foreground mb-8">
              {t.about.skills}
            </h3>
            <div className="space-y-8">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="text-sm text-muted-foreground font-mono mb-3 tracking-wider">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-card border border-border rounded-lg text-sm text-foreground hover:border-accent/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <h4 className="text-sm text-muted-foreground font-mono mb-4 tracking-wider">
                {t.about.experience}
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-foreground font-medium">Docente</span>
                    <span className="text-sm text-muted-foreground">2024 — 2026</span>
                  </div>
                  <span className="text-sm text-accent">Centro Educativo Técnico N.30 (CET N.30)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
