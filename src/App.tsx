import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import ArtistPage from "./Pages/ArtistPage";
import ProductPage from "./Pages/ProductPage";

const App: React.FC = () => {


  return (
<>
    <h1 className="text-3xl font-bold underline text-center m-16 ">
        Canvas Collective
      </h1>
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </Router>

  </>
  );
};

export default App;