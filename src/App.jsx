import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./layouts/Navigation";
import LandingPage from "./pages/landing-page";
import ProfessionalsPage from "./pages/professionals-page";
import ProfilePage from "./pages/profile-page";
import LoginPage from "./pages/auth/login-page";
import SignupPage from "./pages/auth/signup-page";
import ClientPage from "./pages/home-page/client";
import AppBookingForm from "./components/booking-form";
import AppDialog from "./components/AppDialog";
import { ProfessionalDashboard } from "./pages/home-page/proffesional";

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
