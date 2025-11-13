import Footer from "../../../Layouts/Footer";
import AccountSettings from "./AccountSettings";
import FavProffesionals from "./FavProffesionals";
import UpcomingAppointment from "./UpcomingAppointment";
import WelcomeSection from "./WelcomeSection";
const MainContent = () => {
  return (
    <main id="main-content" className="ml-0 md:ml-64 flex-1 p-8 bg-gray-50">
      <WelcomeSection />
      <UpcomingAppointment />
      <FavProffesionals />
      <AccountSettings />
      <Footer />
    </main>
  );
};

export default MainContent;
