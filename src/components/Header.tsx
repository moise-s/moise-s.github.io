import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(event) => {
          event.preventDefault();
          const main = document.getElementById("main");
          main?.scrollIntoView({ block: "start" });
          main?.focus({ preventScroll: true });
        }}
      >
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="wordmark" to="/" aria-label="Moisés, home">
            <span className="monogram">
              m<span>.</span>
            </span>
            <span>
              moisés<span className="wordmark-dot">.</span>
            </span>
          </Link>
          <nav aria-label="Main navigation">
            <Link
              to="/?section=projects"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ block: "start" })
              }
            >
              Projects
            </Link>
            <Link
              to="/?section=about"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ block: "start" })
              }
            >
              About
            </Link>
            <Link
              to="/?section=contact"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ block: "start" })
              }
            >
              Contact
            </Link>
          </nav>
          <a
            className="header-github"
            href="https://github.com/moise-s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
            <span>GitHub</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </header>
    </>
  );
}
