export const categories = [
  "All projects",
  "Applications",
  "Automation",
  "Data & APIs",
  "Experiments",
] as const;
export type Category = (typeof categories)[number];
export type Project = {
  id: string;
  name: string;
  category: Exclude<Category, "All projects">;
  tagline: string;
  description: string;
  stack: string[];
  source: string;
  website?: string;
  featured?: boolean;
  visual:
    | "prices"
    | "properties"
    | "automation"
    | "pipeline"
    | "science"
    | "football";
  kind: string;
  problem: string;
  approach: string;
  capabilities: string[];
};
export const projects: Project[] = [
  {
    id: "price-tracker",
    name: "PriceTracker",
    category: "Applications",
    tagline: "A better grocery run starts with better data.",
    description:
      "Compare your shopping list across local stores. See price history, missing items and whether the savings are worth the trip.",
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "Docker"],
    source: "https://github.com/moise-s/PriceTracker",
    featured: true,
    visual: "prices",
    kind: "Self-hosted application",
    problem:
      "The cheapest individual item does not always make the cheapest shopping trip. Coverage, price freshness and travel all change the decision.",
    approach:
      "Bring a shopping list, store adapters and persistent price observations together in a self-hosted application. Show the evidence behind a comparison so missing products never look like savings.",
    capabilities: [
      "Build shopping lists with catalog items or custom products.",
      "Compare basket prices, store coverage and travel costs.",
      "Explore price history and follow links to price sources.",
      "Set price alerts and schedule future checks.",
    ],
  },
  {
    id: "property-prospector",
    name: "PropertyProspector",
    category: "Data & APIs",
    tagline: "Less tab hopping. More useful property data.",
    description:
      "Collect property listings from multiple sources, normalize the details and bring them into one queryable database.",
    stack: ["Python", "asyncio", "Pydantic", "SQLAlchemy"],
    source: "https://github.com/moise-s/PropertyProspector",
    featured: true,
    visual: "properties",
    kind: "Data collection tool",
    problem:
      "Comparing properties across websites means repeatedly searching, opening tabs and translating inconsistent listing details into something comparable.",
    approach:
      "Use a shared scraper interface with site-specific adapters. Validate the extracted listings with Pydantic and persist a consistent model with SQLAlchemy.",
    capabilities: [
      "Separate site adapters from the shared scraping lifecycle.",
      "Handle pagination and asynchronous collection.",
      "Normalize listing details into a common data model.",
      "Persist listings for querying and later analysis.",
    ],
  },
  {
    id: "upwork-scraper",
    name: "Upwork Scraper",
    category: "Automation",
    tagline: "Turn browsing into structured research.",
    description:
      "A browser automation project that extracts job and profile information into validated, timestamped JSON files.",
    stack: ["Python", "Selenium", "Pydantic", "Docker"],
    source: "https://github.com/moise-s/upwork_scraper",
    visual: "automation",
    kind: "Browser automation",
    problem:
      "Manual freelance-market research produces scattered notes and repeated browsing rather than consistent, reusable data.",
    approach:
      "Separate browser management, login, page scanners and typed models. Store validated results as timestamped JSON for local analysis. This is source code for a browser automation project; current compatibility with the external site is not guaranteed.",
    capabilities: [
      "Separate job and profile scanners.",
      "Validate extracted data using typed models.",
      "Save timestamped JSON outputs locally.",
      "Reuse browser lifecycle code across scanners.",
    ],
  },
  {
    id: "airflow-pipeline",
    name: "Airflow Pipeline",
    category: "Data & APIs",
    tagline: "Make a data workflow explicit.",
    description:
      "An Apache Airflow learning project that turns database extraction and CSV processing into an orchestrated DAG.",
    stack: ["Python", "Airflow", "SQLite", "pandas"],
    source: "https://github.com/moise-s/Indicium-codeChallenge-AirFlow",
    visual: "pipeline",
    kind: "Learning project",
    problem:
      "A sequence of data-processing scripts needs an explicit execution order and a clear way to see whether each step completed.",
    approach:
      "Model the Northwind extraction and file-processing tasks as an Airflow DAG. Use the workflow graph and task results to make dependencies understandable.",
    capabilities: [
      "Extract order records from a Northwind SQLite database.",
      "Write intermediate data to CSV.",
      "Express processing dependencies in an Airflow DAG.",
      "Inspect task execution through the Airflow interface.",
    ],
  },
  {
    id: "data-engineering-etl",
    name: "Data Engineering ETL",
    category: "Data & APIs",
    tagline: "From multiple sources to one destination.",
    description:
      "A hands-on ETL challenge connecting CSV files, PostgreSQL extracts and a MySQL destination with date-based outputs.",
    stack: ["Python", "pandas", "PostgreSQL", "MySQL"],
    source: "https://github.com/moise-s/Indicium-codeChallenge-DataEngineer",
    visual: "pipeline",
    kind: "Learning project",
    problem:
      "Data arriving from files and a relational database needs a consistent extraction and loading path.",
    approach:
      "Split the challenge into source extraction, dated intermediate files and database loading. A command-line menu makes each stage explicit.",
    capabilities: [
      "Read CSV and PostgreSQL sources.",
      "Organize intermediate exports by date.",
      "Load extracted records into MySQL.",
      "Keep source access and processing steps in separate modules.",
    ],
  },
  {
    id: "futstats",
    name: "futStats",
    category: "Data & APIs",
    tagline: "A little backend for the beautiful game.",
    description:
      "An API prototype for recording football matches and modeling player statistics, from results to goal differences.",
    stack: ["Python", "API design", "Data modeling"],
    source: "https://github.com/moise-s/futStats",
    visual: "football",
    kind: "API prototype",
    problem:
      "Casual football results are fun to compare, but useful statistics need a consistent model of matches, teams and players.",
    approach:
      "Define match and player-stat models around wins, draws, points and goal differences. The public project exposes match creation; additional player-stat endpoints are documented as unfinished.",
    capabilities: [
      "Represent matches with teams, players and scores.",
      "Create a match through the API.",
      "Model wins, losses, draws and goal differences.",
      "Leave a foundation for future statistics endpoints.",
    ],
  },
  {
    id: "data-science-challenge",
    name: "Data Science Challenge",
    category: "Experiments",
    tagline: "Explore the data. Test a prediction.",
    description:
      "A Python and Jupyter notebook exercise that works through a data science challenge and exports predicted values.",
    stack: ["Python", "Jupyter", "Data analysis"],
    source: "https://github.com/moise-s/Indicium-codeChallenge-DataScientist",
    visual: "science",
    kind: "Learning project",
    problem:
      "A data science exercise needs an inspectable path from exploratory work to an output that can be evaluated.",
    approach:
      "Keep the analysis and project documentation in a Jupyter notebook, with predicted values exported as a CSV artifact.",
    capabilities: [
      "Follow the analysis in a Python notebook.",
      "Inspect the documented challenge workflow.",
      "Export predicted values to CSV.",
      "Use the repository as a learning reference.",
    ],
  },
];
export function filterProjects(query: string, category: Category) {
  const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return projects.filter(
    (project) =>
      (category === "All projects" || project.category === category) &&
      terms.every((term) =>
        [
          project.name,
          project.tagline,
          project.description,
          project.category,
          ...project.stack,
        ]
          .join(" ")
          .toLocaleLowerCase()
          .includes(term),
      ),
  );
}
