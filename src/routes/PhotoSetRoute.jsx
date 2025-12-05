import { useParams } from "react-router-dom";
import { photos } from "../utils/photos";
import PhotoSet from "../components/PhotoSet";

const photoSets = [
  {
    title: "London & Edinburgh '20",
    imageKey: "lon_edi",
    path: "london-edinburgh",
  },
  {
    title: "San Francisco '20",
    imageKey: "sf",
    path: "san-francisco",
  },
  {
    title: "Los Angeles '20",
    imageKey: "la",
    path: "los-angeles",
  },
  {
    title: "Day N Vegas '19",
    imageKey: "vegas",
    path: "vegas",
  },
  {
    title: "Tokyo, Osaka, Kyoto '19",
    imageKey: "japan",
    path: "japan",
  },
];

export default function PhotoSetRoute() {
  const { slug } = useParams();

  const set = photoSets.find((s) => s.path === slug);

  if (!set) {
    return <div>Not found</div>;
  }

  const images = photos[set.imageKey];

  return <PhotoSet title={set.title} images={images} />;
}
