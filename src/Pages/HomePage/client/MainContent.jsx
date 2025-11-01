import FavProffesionals from "./FavProffesionals";
import UpcomingAppointment from "./UpcomingAppointment";
import WelcomeSection from "./WelcomeSection";
const MainContent = () => {
  return (
    <main id="main-content" class="ml-64 flex-1 p-8">
      <WelcomeSection />
      <UpcomingAppointment />
      <FavProffesionals />
    </main>
  );
};

export default MainContent;
