import { useEffect, useRef } from "react";
import { useLocation, useSearchParams, Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Github,
  Search,
  Server,
  Terminal,
  X,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectVisual } from "@/components/ProjectVisual";
import {
  categories,
  filterProjects,
  projects,
  type Category,
  type Project,
} from "@/data/projects";

function ProjectCard({
  project,
  returnTo,
}: {
  project: Project;
  returnTo: string;
}) {
  return (
    <article
      className={`project-card ${project.featured ? "featured-card" : "compact-card"}`}
    >
      {project.featured && <ProjectVisual project={project} />}
      <div className="card-body">
        <div className="card-top">
          {!project.featured && <ProjectVisual project={project} />}
          <span className="eyebrow">{project.category}</span>
          {project.featured && (
            <span className="featured-label">
              <span /> Featured
            </span>
          )}
        </div>
        <h3>
          <Link to={`/projects/${project.id}`} state={{ returnTo }}>
            {project.name}
            <ArrowUpRight size={19} />
          </Link>
        </h3>
        <p>{project.description}</p>
        <ul className="tech-tags" aria-label={`${project.name} technologies`}>
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="card-actions">
          <Link
            to={`/projects/${project.id}`}
            state={{ returnTo }}
            aria-label={`Explore ${project.name}`}
          >
            Explore project <ArrowRight size={15} />
          </Link>
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} source on GitHub`}
          >
            <Github size={15} /> Source
          </a>
          {project.website && (
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              Website <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Index() {
  const [params, setParams] = useSearchParams();
  const location = useLocation();
  const query = params.get("q") ?? "";
  const rawCategory = params.get("category");
  const category: Category =
    categories.find((value) => value === rawCategory) ?? "All projects";
  const filtered = filterProjects(query, category);
  const searchRef = useRef<HTMLInputElement>(null);
  const section = params.get("section");
  const fromProject = Boolean(location.state?.fromProject);
  useEffect(() => {
    document.title = "Moisés do Nascimento — Software engineer & builder";
    const frame = requestAnimationFrame(() => {
      if (fromProject) {
        document.getElementById("projects")?.scrollIntoView({ block: "start" });
        document
          .getElementById("projects-heading")
          ?.focus({ preventScroll: true });
      } else if (section) {
        document.getElementById(section)?.scrollIntoView({ block: "start" });
      } else window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [section, fromProject]);
  function update(key: string, value: string) {
    const next = new URLSearchParams(params);
    if (!value || value === "All projects") next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  }
  function reset() {
    const next = new URLSearchParams(params);
    next.delete("q");
    next.delete("category");
    setParams(next, { replace: true });
    searchRef.current?.focus();
  }
  const returnTo = `/${location.search}`;
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        <section className="container hero" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <span className="tiny-cross">+</span> SOFTWARE ENGINEER ·
              FLORIANÓPOLIS, BR
            </div>
            <h1 id="hero-heading">
              Useful tools.
              <br />
              <span>Thoughtful systems.</span>
            </h1>
            <p className="hero-description">
              I’m Moisés. I build backends, data pipelines and practical tools
              that make everyday life a little simpler.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/?section=projects">
                Explore my projects <ArrowDown size={16} />
              </Link>
              <a
                className="text-link"
                href="https://github.com/moise-s"
                target="_blank"
                rel="noopener noreferrer"
              >
                Find me on GitHub <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="hero-specialties">
              <span>Python & backends</span>
              <span>Data engineering</span>
              <span>Personal automation</span>
            </div>
          </div>
          <div
            className="builder-panel"
            aria-label="My approach: a real problem, structured data, and a useful tool"
          >
            <div className="panel-heading">
              <span>
                <Terminal size={14} /> the way I build
              </span>
              <span className="panel-mark">01 — 03</span>
            </div>
            <div className="build-flow">
              <div>
                <span>01</span>
                <h2>A real problem</h2>
                <p>
                  Start with something
                  <br />
                  worth making easier.
                </p>
              </div>
              <ArrowDown size={19} />
              <div>
                <span>02</span>
                <h2>Structured data</h2>
                <p>
                  Make the messy parts
                  <br />
                  clear and dependable.
                </p>
              </div>
              <ArrowDown size={19} />
              <div>
                <span>03</span>
                <h2>A useful tool</h2>
                <p>
                  Build it to be used.
                  <br />
                  Keep it understandable.
                </p>
              </div>
            </div>
            <div className="panel-footer">
              <span className="green-dot" /> Practical by design.
              <Code2 size={15} />
            </div>
          </div>
        </section>
        <section
          className="container projects-section"
          id="projects"
          aria-labelledby="projects-heading"
        >
          <div className="section-heading">
            <div>
              <span className="eyebrow section-number">01 / SELECTED WORK</span>
              <h2 id="projects-heading" tabIndex={-1}>
                The project shelf<span>.</span>
              </h2>
              <p>
                Things I’ve built. Problems they solve. Code you can explore.
              </p>
            </div>
            <a
              className="text-link all-repos"
              href="https://github.com/moise-s?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              All repositories <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="catalog-controls">
            <div className="search-box">
              <Search size={17} />
              <input
                ref={searchRef}
                type="search"
                aria-label="Search projects"
                placeholder="Find a project, tool or technology…"
                value={query}
                onChange={(event) => update("q", event.target.value)}
              />
              {query && (
                <button
                  aria-label="Clear search"
                  onClick={() => {
                    update("q", "");
                    searchRef.current?.focus();
                  }}
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <span className="result-count" role="status">
              {filtered.length} {filtered.length === 1 ? "project" : "projects"}
              {query || category !== "All projects"
                ? ` / ${projects.length}`
                : ""}
            </span>
          </div>
          <div
            className="category-filters"
            role="group"
            aria-label="Filter projects by category"
          >
            {categories.map((value) => (
              <button
                key={value}
                aria-pressed={category === value}
                onClick={() => update("category", value)}
              >
                {value}
                {value === "All projects" && <span>{projects.length}</span>}
              </button>
            ))}
          </div>
          {filtered.length ? (
            <div className="project-grid">
              {filtered.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  returnTo={returnTo}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Search size={25} />
              <h3>No projects found.</h3>
              <p>Try another keyword or explore all projects.</p>
              <button className="button button-secondary" onClick={reset}>
                Reset filters <ArrowRight size={15} />
              </button>
            </div>
          )}
        </section>
        <section
          className="container workbench"
          aria-labelledby="workbench-heading"
        >
          <div className="workbench-title">
            <span className="eyebrow">ON MY WORKBENCH</span>
            <h2 id="workbench-heading">More stories to share.</h2>
            <p>A few personal projects. Their portfolio pages are next.</p>
          </div>
          <div className="workbench-grid">
            <article>
              <div>
                <Database size={17} />
                <span>FINANCE</span>
              </div>
              <h3>Budget Flow</h3>
              <p>
                Household planning, actual spending and a clearer view of where
                money goes.
              </p>
              <span className="workbench-state">
                Project page in preparation
              </span>
            </article>
            <article>
              <div>
                <Terminal size={17} />
                <span>DEVELOPER TOOLS</span>
              </div>
              <h3>moise-en-place</h3>
              <p>
                A reproducible Mac setup. Shell, editor and tooling, with
                everything in its place.
              </p>
              <span className="workbench-state">
                Project page in preparation
              </span>
            </article>
            <article>
              <div>
                <Server size={17} />
                <span>SELF-HOSTING</span>
              </div>
              <h3>Home Server</h3>
              <p>
                A private home for useful services, built around clear ownership
                and recovery.
              </p>
              <span className="workbench-state">
                Project page in preparation
              </span>
            </article>
          </div>
        </section>
        <section
          className="about-section"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="container about-layout">
            <div>
              <span className="eyebrow section-number">
                02 / THE PERSON BEHIND THE CODE
              </span>
              <h2 id="about-heading">
                Curiosity, with
                <br />a practical streak<span>.</span>
              </h2>
              <div className="about-signature">
                <span className="monogram">
                  m<span>.</span>
                </span>
                <div>
                  <strong>Moisés do Nascimento</strong>
                  <span>Software engineer · Brazil</span>
                </div>
              </div>
            </div>
            <div className="about-copy">
              <p>
                I like building things that earn their place in everyday life. A
                clearer grocery comparison. A better way to explore property
                data. A workflow that takes care of the repetitive parts.
              </p>
              <p>
                My work sits at the intersection of Python, backend engineering
                and data. I care about clear boundaries, maintainable code and
                tools that remain understandable after you step away from them.
              </p>
              <ul>
                <li>
                  <Check size={16} />
                  <span>Start with a real need.</span>
                </li>
                <li>
                  <Check size={16} />
                  <span>Make the data trustworthy.</span>
                </li>
                <li>
                  <Check size={16} />
                  <span>Keep the system simple enough to own.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section
          className="container contact-section"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div>
            <span className="eyebrow section-number">03 / SAY HELLO</span>
            <h2 id="contact-heading">
              Good work starts
              <br />
              with a conversation<span>.</span>
            </h2>
            <p>
              Have an interesting problem, a project idea or an opportunity?
              <br className="desktop-break" /> I’d like to hear about it.
            </p>
          </div>
          <div className="contact-actions">
            <a
              className="button button-primary"
              href="https://www.linkedin.com/in/moisesn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn <ArrowUpRight size={17} />
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/moise-s"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={17} /> Explore my GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
