import { HashRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
