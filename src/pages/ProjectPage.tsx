import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import Project from "../components/Project";

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const { projects, loading } = useContext(ProjectContext);

  if (loading) return <p className="text-center">Loading projects...</p>;

  const project = projects.find((p) => p.id === id);

  return <Project project={project} />;
}
