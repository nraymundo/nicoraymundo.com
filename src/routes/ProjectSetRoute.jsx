import { useParams } from "react-router-dom";
import ProjectSet from "../components/ProjectSet";

const projectSets = [
  {
    title: "WHOOP Grid",
    path: "whoop-grid",
  },
  {
    title: "Spotify Stats",
    path: "spotify-stats",
  },
];

export default function ProjectSetRoute() {
  const { slug } = useParams();

  const set = projectSets.find((project) => project.path === slug);

  if (!set) {
    return <div>Not found</div>;
  }

  return <ProjectSet title={set.title} />;
}
