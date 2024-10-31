import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Components/Layout";
import ArtistBio from "../Components/ArtistBio";
import Gallery from "../Components/Gallery";
import { Artist } from "../types/AllTypes";

const ArtistPage: React.FC = () => {
  const { id: artistId } = useParams<{ id: string }>();
  //const [artistID, setArtistID] = useState<Artist | null>(null);
  const [artists, setArtists] = useState<Artist | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        console.log(`Inside Fetch ${artistId}`);
        const response = await fetch(
          `http://18.171.123.115:3000/artist/${artistId}`
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

    if (artistId) {
      fetchArtists();
    }
  }, [artistId]);

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
