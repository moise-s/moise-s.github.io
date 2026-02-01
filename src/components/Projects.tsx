import { ExternalLink, Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'PropertyProspector',
    description: 'Comprehensive tool that scrapes real estate websites, builds a centralized property database, and leverages data analytics to guide your search for the perfect home.',
    tech: ['Python', 'Web Scraping', 'Data Analytics', 'HTML'],
    github: 'https://github.com/moise-s/PropertyProspector',
    stars: 3,
    featured: true,
  },
  {
    title: 'Upwork Scraper',
    description: 'Automated tool for gathering freelance job postings and market data from Upwork platform.',
    tech: ['Python', 'Automation', 'Web Scraping'],
    github: 'https://github.com/moise-s/upwork_scraper',
    stars: 0,
    featured: false,
  },
  {
    title: 'Data Engineer Challenge',
    description: 'Code challenge solution demonstrating data engineering skills with ETL pipelines and data processing.',
    tech: ['Python', 'ETL', 'Data Engineering'],
    github: 'https://github.com/moise-s/Indicium-codeChallenge-DataEngineer',
    stars: 0,
    featured: false,
  },
  {
    title: 'AirFlow Pipeline',
    description: 'Implementation of data pipelines using Apache Airflow for workflow orchestration.',
    tech: ['Python', 'Airflow', 'Data Pipelines'],
    github: 'https://github.com/moise-s/Indicium-codeChallenge-AirFlow',
    stars: 0,
    featured: false,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Portfolio
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
              Featured Projects
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of projects I've built, from data engineering pipelines to automation tools.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-glow group ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`p-8 ${project.featured ? 'md:flex md:items-center md:gap-8' : ''}`}>
                  <div className={project.featured ? 'md:flex-1' : ''}>
                    {/* Featured badge */}
                    {project.featured && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                        Featured Project
                      </span>
                    )}

                    <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          <Github size={16} />
                          View Code
                        </a>
                      </Button>
                      {project.stars > 0 && (
                        <span className="inline-flex items-center gap-1 text-muted-foreground text-sm">
                          <Star size={14} className="fill-primary text-primary" />
                          {project.stars}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View all link */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/moise-s?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                View All Projects
                <ExternalLink size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
