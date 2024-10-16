import "./App.css";
import NavBar from "./Components/NavBar";
import Gallery from "./Components/Gallery"
import ArtistBio from "./Components/ArtistBio";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <NavBar />
    


      <h1 className="text-3xl font-bold underline text-center m-16 ">Canvas Collective</h1>
    
      <ArtistBio />
      <Gallery />
      <Footer />
      

    </>
  );
}

export default App;
