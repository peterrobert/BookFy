import MainContent from "./MainContent";
import SideNavigationSection from "./SideNavigationSection";

const ClientPage = () => {
  return (
    <div className="flex">
      <SideNavigationSection />
      <MainContent />
    </div>
  );
};

export default ClientPage;
