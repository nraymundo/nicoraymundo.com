import React, { useState } from "react";
// import "./JournalEntry.css";

export default function Entry(props) {
  const { entryInfo } = props;
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <div className="journal-entry">
      <div className="entry-details">
        <h1>{entryInfo.place}</h1>
        <h2>{entryInfo.date}</h2>
      </div>
      <div className="entry-photos">
        {entryInfo.images.map((image, index) => (
          <img
            src={image}
            alt={index}
            className={`photo image-${imageLoaded ? "visible" : "hidden"}`}
            onLoad={() => setImageLoaded(true)}
          />
        ))}
      </div>
    </div>
  );
}
