import { Code2, Database, GitBranch, Zap } from 'lucide-react';

const skills = [
  { icon: Code2, label: 'Python', description: 'Backend & automation' },
  { icon: Database, label: 'Data Engineering', description: 'ETL & pipelines' },
  { icon: GitBranch, label: 'Version Control', description: 'Git & collaboration' },
  { icon: Zap, label: 'Automation', description: 'Web scraping & bots' },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              About Me
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
              Crafting Solutions with Code
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Software Engineer based in Florianópolis, Brazil, with a passion for 
                building efficient, scalable solutions. My expertise lies in Python development, 
                data engineering, and creating automation tools that solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With experience in building comprehensive data pipelines, web scrapers, and 
                analytical tools, I enjoy tackling complex challenges and turning them into 
                elegant, maintainable code.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or diving into the latest developments in data science 
                and machine learning.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <p className="font-heading text-3xl font-bold text-primary">700+</p>
                  <p className="text-sm text-muted-foreground mt-1">Contributions</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-primary">6+</p>
                  <p className="text-sm text-muted-foreground mt-1">Public Projects</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-primary">3+</p>
                  <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.label}
                  className="bg-card-gradient p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    {skill.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
