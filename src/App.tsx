import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArtistPage from "./Pages/ArtistPage";
import ProductPage from "./Pages/ProductPage";

const App: React.FC = () => {


  return (
<>
    <h1 className="text-5xl font-bold text-center m-16 ">
        Canvas Collective
      </h1>
    <Router>
      <Routes>
        <Route path="/" element={<ArtistPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Router>

  </>
  );
};

export default App;