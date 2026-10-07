import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Index from "@/pages/Index";
import ProjectPage from "@/pages/ProjectPage";
import NotFound from "@/pages/NotFound";
import { filterProjects, projects } from "@/data/projects";

function renderPortfolio(path = "/") {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MemoryRouter>,
  );
}
beforeEach(() => {
  vi.stubGlobal("scrollTo", vi.fn());
  Element.prototype.scrollIntoView = vi.fn();
});
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("project discovery", () => {
  it("combines multi-word technology search and category filters", () => {
    expect(
      filterProjects("python postgres", "Applications").map((p) => p.id),
    ).toEqual(["price-tracker"]);
    expect(filterProjects("PYTHON", "Automation").map((p) => p.id)).toEqual([
      "upwork-scraper",
    ]);
    expect(filterProjects("unmatched", "All projects")).toEqual([]);
  });
  it("shows a recoverable empty state for a combined filter", () => {
    renderPortfolio();
    fireEvent.change(
      screen.getByRole("searchbox", { name: "Search projects" }),
      { target: { value: "React" } },
    );
    expect(screen.getByRole("status")).toHaveTextContent("1 project / 7");
    fireEvent.click(screen.getByRole("button", { name: "Automation" }));
    expect(
      screen.getByRole("heading", { name: "No projects found." }),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Reset filters" }));
    expect(screen.getByRole("status")).toHaveTextContent("7 projects");
    expect(screen.getByRole("searchbox")).toHaveValue("");
    expect(screen.getByRole("searchbox")).toHaveFocus();
  });
  it("keeps query and category when returning from a project", () => {
    renderPortfolio("/?q=Python&category=Applications");
    fireEvent.click(screen.getByRole("link", { name: "Explore PriceTracker" }));
    expect(
      screen.getByRole("heading", { name: /PriceTracker/, level: 1 }),
    ).toHaveFocus();
    fireEvent.click(screen.getByRole("link", { name: "Back to projects" }));
    expect(screen.getByRole("searchbox")).toHaveValue("Python");
    expect(
      screen.getByRole("button", { name: "Applications" }),
    ).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("status")).toHaveTextContent("1 project / 7");
  });
  it("reads shared filter URLs and treats an unknown category as all", () => {
    renderPortfolio("/?q=airflow&category=unknown");
    expect(screen.getByRole("status")).toHaveTextContent("1 project / 7");
    expect(
      screen.getByRole("button", { name: /All projects/ }),
    ).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByRole("link", { name: "Explore Airflow Pipeline" }),
    ).toBeInTheDocument();
  });
});

describe("project homepages", () => {
  it.each(projects)(
    "opens the direct homepage for $name with a verified source destination",
    (project) => {
      renderPortfolio(`/projects/${project.id}`);
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        project.name,
      );
      expect(
        screen.getByRole("link", { name: "View source on GitHub" }),
      ).toHaveAttribute("href", project.source);
      expect(
        screen.queryByRole("link", { name: "Visit website" }),
      ).not.toBeInTheDocument();
    },
  );
  it("recovers from an unknown project", () => {
    renderPortfolio("/projects/missing");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "This shelf is empty.",
    );
    fireEvent.click(screen.getByRole("link", { name: "Back to projects" }));
    expect(
      screen.getByRole("heading", { name: /The project shelf/ }),
    ).toBeInTheDocument();
  });
});
