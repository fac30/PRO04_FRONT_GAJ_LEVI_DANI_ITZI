import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Components/Layout";
import ArtistBio from "../Components/ArtistBio";
import Gallery from "../Components/Gallery";
import { Artist } from "../types/Artist";

const ArtistPage: React.FC = () => {
  // let { id } = useParams<{ id: string }>();
  const [artistID, setArtistID] = useState<string | null>(null);
  const [artists, setArtists] = useState<Artist | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log(id);


  useEffect(() => {
    const fetchArtists = async () => {
    
      try {
        const response = await fetch(
          `http://localhost:3000/artist/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch artists");
        }
        const data = await response.json();
        setArtists(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Whoopsie!");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArtists();
    }
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading artists...</p>
        </div>
      </Layout>
    );
  }

  if (error || !artists) {
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
      <ArtistBio artist={artists} />
      <Gallery artist={artists} />
    </Layout>
  );
};

export default ArtistPage;
