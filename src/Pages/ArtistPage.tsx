import React from "react";
import Layout from "../Components/Layout";
import ArtistBio from "../Components/ArtistBio";
import Gallery from "../Components/Gallery";


const ArtistPage: React.FC = () => {
  return (
    <>
    <Layout>
      <ArtistBio />
      <Gallery />
    </Layout>
      </>
  );
};

export default ArtistPage;
