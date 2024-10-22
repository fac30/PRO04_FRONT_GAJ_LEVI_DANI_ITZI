import React, { useState, useEffect} from "react";
import Layout from "../Components/Layout";
import ArtistBio from "../Components/ArtistBio";
import Gallery from "../Components/Gallery";
import { Artist } from "../types/Artist";


const ArtistPage: React.FC = () => {

  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchArtists = async () => {
    try {
      const response = await fetch(`http://localhost:3000/artist/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch artists');
      }
      const data = await response.json(); 
      setArtists(data);
    } catch(err) {
      setError(err instanceof Error ? err.message: 'Whoopsie!');
    } finally {
      setLoading(false);
    }
  };
  fetchArtists();
}, []);

if (loading) {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading artists...</p>
      </div>
    </Layout>
  );
}

if (error) {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Error: {error}</p>
      </div>
    </Layout>
  );
}



return (
  <Layout>
    {artists.map((artist) => (
      <div key={artist.name}>
        <ArtistBio artist={artist} />
        <Gallery artist={artist} />
      </div>
    ))}
  </Layout>
);
};

export default ArtistPage;
