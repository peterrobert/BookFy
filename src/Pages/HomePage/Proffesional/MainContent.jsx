import AvailabilitySection from "./AvailabilitySection";
import ClientSection from "./ClientSection";
import ScheduleSection from "./ScheduleSection";
import WelcomeSection from "./WelcomeSection";

const MainContent = () => {
  return (
    <main id="main-content" className="ml-0 md:ml-64 flex-1 p-8 bg-gray-50">
      <WelcomeSection />
      <ScheduleSection />
      <ClientSection />
      <AvailabilitySection />
    </main>
  );
};

export default MainContent;
