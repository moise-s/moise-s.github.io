import { useEffect, useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Github,
  Check,
} from "lucide-react";
import { projects } from "@/data/projects";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectVisual } from "@/components/ProjectVisual";
import NotFound from "./NotFound";

export default function ProjectPage() {
  const { id } = useParams();
  const location = useLocation();
  const project = projects.find((item) => item.id === id);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (!project) return;
    document.title = `${project.name} — Moisés do Nascimento`;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    heading.current?.focus({ preventScroll: true });
  }, [project]);
  if (!project) return <NotFound />;
  const returnTo: string = location.state?.returnTo ?? "/?section=projects";
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="container detail-page">
        <Link className="back-link" to={returnTo} state={{ fromProject: true }}>
          <ArrowLeft size={16} /> Back to projects
        </Link>
        <div className="detail-heading">
          <span className="eyebrow">
            {project.category} <span className="label-divider">/</span>{" "}
            {project.kind}
          </span>
          <h1 ref={heading} tabIndex={-1}>
            {project.name}
            <span>.</span>
          </h1>
          <p className="detail-tagline">{project.tagline}</p>
          <p className="detail-description">{project.description}</p>
          <div className="detail-actions">
            {project.website && (
              <a
                className="button button-primary"
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website <ArrowUpRight size={16} />
              </a>
            )}
            <a
              className={`button ${project.website ? "button-secondary" : "button-primary"}`}
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={17} /> View source on GitHub{" "}
              <ArrowUpRight size={16} />
            </a>
            <span className="project-kind">{project.kind}</span>
          </div>
        </div>
        <div
          className={`detail-visual ${project.featured ? "" : "symbol-detail"}`}
        >
          <ProjectVisual project={project} />
          {!project.featured && (
            <div>
              <span className="eyebrow">{project.kind}</span>
              <p>{project.tagline}</p>
              <span>Explore the implementation in the source repository.</span>
            </div>
          )}
        </div>
        <div className="detail-content">
          <div>
            <section>
              <span className="eyebrow">01 / THE PROBLEM</span>
              <h2>Why it exists</h2>
              <p>{project.problem}</p>
            </section>
            <section>
              <span className="eyebrow">02 / THE APPROACH</span>
              <h2>How it comes together</h2>
              <p>{project.approach}</p>
            </section>
            <section>
              <span className="eyebrow">03 / WHAT’S INSIDE</span>
              <h2>What you can explore</h2>
              <ul className="capabilities">
                {project.capabilities.map((item) => (
                  <li key={item}>
                    <Check size={17} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <aside className="project-facts">
            <h2>Under the hood</h2>
            <span className="eyebrow">BUILT WITH</span>
            <ul className="tech-tags">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <span className="eyebrow">PROJECT TYPE</span>
            <p>{project.kind}</p>
            <a href={project.source} target="_blank" rel="noopener noreferrer">
              Repository & documentation <ArrowUpRight size={15} />
            </a>
          </aside>
        </div>
        <div className="detail-bottom">
          <Link to={returnTo} state={{ fromProject: true }}>
            <ArrowLeft size={16} /> Back to the shelf
          </Link>
          <Link to={`/projects/${next.id}`} state={{ returnTo }}>
            <span>Next project</span>
            {next.name}
            <ArrowRight size={17} />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
