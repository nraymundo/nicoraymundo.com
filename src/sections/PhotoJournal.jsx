import { photos } from "../utils/photos";
import PhotoJournalEntry from "../components/PhotoJournalEntry";

const entries = [
  {
    place: "London & Edinburgh '20",
    date: "03.2020",
    images: photos.lon_edi,
    path: "london-edinburgh",
  },
  {
    place: "San Francisco",
    date: "01.2020",
    images: photos.sf,
    path: "san-francisco",
  },
  {
    place: "Los Angeles",
    date: "01.2020",
    images: photos.la,
    path: "los-angeles",
  },
  {
    place: "Day N Vegas",
    date: "11.2019",
    images: photos.vegas,
    path: "vegas",
  },
  {
    place: "Tokyo, Osaka, Kyoto",
    date: "05.2019",
    images: photos.japan,
    path: "japan",
  },
];

export default function PhotoJournal() {
  return (
    <div className="journal-page">
      {entries.map((entry) => (
        <PhotoJournalEntry key={entry.path} entry={entry} />
      ))}
    </div>
  );
}
