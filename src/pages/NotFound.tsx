import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found — Moisés do Nascimento";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="container not-found">
        <span className="eyebrow">404 / PAGE NOT FOUND</span>
        <h1>
          This shelf is empty<span>.</span>
        </h1>
        <p>
          That project or page isn’t here. Find something useful in the catalog.
        </p>
        <Link className="button button-primary" to="/?section=projects">
          <ArrowLeft size={16} /> Back to projects
        </Link>
      </main>
      <Footer />
    </>
  );
}
