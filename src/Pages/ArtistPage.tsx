import React from "react";
import NavBar from "../Components/NavBar";
import ArtistBio from "../Components/ArtistBio";
import Gallery from "../Components/Gallery";
import Footer from "../Components/Footer";

const ArtistPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <ArtistBio />
      <Gallery />
      <Footer />
    </>
  );
};

export default ArtistPage;
