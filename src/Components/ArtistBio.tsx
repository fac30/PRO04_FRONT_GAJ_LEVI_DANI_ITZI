import React from "react";
import { Artist } from "../types/AllTypes";

interface ArtistBioProps {
  artist: Artist;
}

const ArtistBio: React.FC<ArtistBioProps> = ({ artist }) => {
  return (
    <div className="container m-28 py-4">
      <h2 className="text-5xl font-bold m-12">{artist.name}</h2>
      <div className="grid grid-cols-2 gap-4">
        <img
          className="h-40 w-full rounded-lg object-cover object-center md:h-60 shadow-lg"
          src={artist.image}
        />
        <p className="paragraph-text"> {artist.bio}</p>
      </div>
      <div className="mt-4">
        <a href={artist.socials} target="_blank" rel="noopener noreferrer" />
      </div>
    </div>
  );
};

export default ArtistBio;
