import {
  ArrowRight,
  Check,
  Database,
  GitBranch,
  Home,
  ShoppingBasket,
  Terminal,
  Trophy,
  Workflow,
} from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === "prices")
    return (
      <div className="project-visual price-visual" aria-hidden="true">
        <div className="visual-toolbar">
          <span>
            <ShoppingBasket size={15} /> PriceTracker
          </span>
          <span>basket.compare</span>
        </div>
        <div className="price-layout">
          <div>
            <span className="visual-eyebrow">ONE LIST. A CLEARER CHOICE.</span>
            <div className="basket-items">
              <span>
                Milk <i />
                <Check size={12} />
              </span>
              <span>
                Coffee <i />
                <Check size={12} />
              </span>
              <span>
                Apples <i />
                <Check size={12} />
              </span>
            </div>
          </div>
          <div className="price-chart">
            <div>
              <span>Store A</span>
              <i style={{ width: "89%" }} />
            </div>
            <div className="best">
              <span>Store B</span>
              <i style={{ width: "61%" }} />
              <b>Best basket</b>
            </div>
            <div>
              <span>Store C</span>
              <i style={{ width: "75%" }} />
            </div>
          </div>
        </div>
        <div className="visual-caption">
          <span>
            List <ArrowRight size={11} /> Prices <ArrowRight size={11} />{" "}
            Decision
          </span>
          <span>Illustrative preview</span>
        </div>
      </div>
    );
  if (project.visual === "properties")
    return (
      <div className="project-visual property-visual" aria-hidden="true">
        <div className="visual-toolbar">
          <span>
            <Home size={15} /> PropertyProspector
          </span>
          <span>listings.normalize</span>
        </div>
        <div className="property-layout">
          <div className="source-nodes">
            <span>
              <i /> Source A
            </span>
            <span>
              <i /> Source B
            </span>
            <span>
              <i /> Source C
            </span>
          </div>
          <div className="node-connector">
            <ArrowRight size={18} />
          </div>
          <div className="property-table">
            <div>
              <Database size={13} />
              <b>listings</b>
              <span>normalized</span>
            </div>
            <p>
              property <span>area</span>
              <span>source</span>
            </p>
            <p>
              <i />
              <span>84 m²</span>
              <span>A</span>
            </p>
            <p>
              <i />
              <span>112 m²</span>
              <span>B</span>
            </p>
            <p>
              <i />
              <span>68 m²</span>
              <span>C</span>
            </p>
          </div>
        </div>
        <div className="visual-caption">
          <span>
            Collect <ArrowRight size={11} /> Validate <ArrowRight size={11} />{" "}
            Query
          </span>
          <span>Illustrative preview</span>
        </div>
      </div>
    );
  const Icon = {
    automation: Terminal,
    pipeline: Workflow,
    science: GitBranch,
    football: Trophy,
  }[project.visual];
  return (
    <div className={`project-symbol ${project.visual}`} aria-hidden="true">
      <Icon size={22} />
    </div>
  );
}
