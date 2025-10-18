import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./Layouts/Footer";
import Navigation from "./Layouts/Navigation";
import LandingPage from "./Pages/LandingPage";
import ProfessionalsPage from "./Pages/ProfessionalsPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <>
              <h1 className="text-3xl font-bold underline">Home Page</h1>
            </>
          }
        />
        <Route path="/browse-professionals" element={<ProfessionalsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
