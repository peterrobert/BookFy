import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Layouts/Navigation";
import LandingPage from "./Pages/LandingPage";
import ProfessionalsPage from "./Pages/ProfessionalsPage";
import ProfilePage from "./Pages/ProfilePage";
import LoginPage from "./Pages/Auth/LoginPage";
import SignupPage from "./Pages/Auth/SignupPage";
import ClientPage from "./Pages/HomePage/client";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<ClientPage />} />
        <Route path="/professionals" element={<ProfessionalsPage />} />
        <Route path="/professionals/:id" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
