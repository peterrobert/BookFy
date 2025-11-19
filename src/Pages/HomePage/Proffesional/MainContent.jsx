import AvailabilitySection from "./AvailabilitySection";
import ClientSection from "./ClientSection";
import NotificationSection from "./NotificationSection";
import ScheduleSection from "./ScheduleSection";
import WelcomeSection from "./WelcomeSection";

const MainContent = () => {
  return (
    <main id="main-content" className="ml-0 md:ml-64 flex-1 p-8 bg-gray-50">
      <WelcomeSection />
      <ScheduleSection />
      <ClientSection />
      <AvailabilitySection />
      <NotificationSection />
    </main>
  );
};

export default MainContent;
