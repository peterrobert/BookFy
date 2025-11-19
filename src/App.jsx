import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Layouts/Navigation";
import LandingPage from "./Pages/LandingPage";
import ProfessionalsPage from "./Pages/ProfessionalsPage";
import ProfilePage from "./Pages/ProfilePage";
import LoginPage from "./Pages/Auth/LoginPage";
import SignupPage from "./Pages/Auth/SignupPage";
import ClientPage from "./Pages/HomePage/Client";

import AppDialog from "./Components/AppDialog";
import { ProfessionalDashboard } from "./Pages/HomePage/Proffesional";
import AppBookingForm from "./Components/BookingForm";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<ClientPage />} />
        <Route
          path="/proffessionalDashboard"
          element={<ProfessionalDashboard />}
        />
        <Route path="/professionals" element={<ProfessionalsPage />} />
        <Route path="/professional/:id" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/how-it-works" element={<AppBookingForm />} />
      </Routes>
      <AppDialog />
    </>
  );
}

export default App;
