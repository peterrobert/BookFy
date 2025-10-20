import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./Layouts/Footer";
import Navigation from "./Layouts/Navigation";
import LandingPage from "./Pages/LandingPage";
import ProfessionalsPage from "./Pages/ProfessionalsPage";
import ProfilePage from "./Pages/ProfilePage";

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
        <Route path="/professionals" element={<ProfessionalsPage />} />
        <Route path="/professionals/:id" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
