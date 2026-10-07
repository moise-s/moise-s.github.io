import { ArrowUpRight } from "lucide-react";
export function Footer() {
  return (
    <footer className="container site-footer">
      <span>© {new Date().getFullYear()} Moisés do Nascimento</span>
      <span className="footer-note">Built around real problems.</span>
      <a
        href="https://github.com/moise-s/moise-s.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        Site source <ArrowUpRight size={13} />
      </a>
    </footer>
  );
}
