import { createContext, useEffect, useState, type ReactNode } from "react";

export const ProjectContext = createContext<{
  projects: any[];
  loading: boolean;
}>({
  projects: [],
  loading: true,
});

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/portfolio-public/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => {
        console.error("Failed to load JSON");
        setLoading(false);
      });
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, loading }}>
      {children}
    </ProjectContext.Provider>
  );
}