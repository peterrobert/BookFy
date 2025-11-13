import { useState } from "react";
import SideNavigationSection from "./SideNavigationSection";
import MainContent from "./MainContent";

const navData = [
  {
    id: 1,
    name: "Dashboard",
    icon: <i className="fa-solid fa-th-large text-lg"></i>,
    view: "Dashboard",
  },
  {
    id: 2,
    name: "Analytics",
    icon: <i className="fa-solid fa-chart-line"></i>,
    view: "Analytics",
  },
  {
    id: 3,
    name: "Clients",
    icon: <i className="fa-solid fa-users"></i>,
    view: "Clients",
  },

  {
    id: 4,
    name: "Availability",
    icon: <i className="fa-solid fa-question-circle"></i>,
    view: "Availability",
  },
  {
    id: 5,
    name: "Notifications",
    icon: <i className="fa-solid fa-bullhorn"></i>,
    view: "Notifications",
  },
];

const ProfessionalDashboard = () => {
  const [activeView, setActiveView] = useState("Dashboard");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex">
        <SideNavigationSection
          activeView={activeView}
          setActiveView={setActiveView}
          navData={navData}
          scrollToSection={scrollToSection}
        />
        <MainContent activeView={activeView} />
      </div>
    </>
  );
};

export default ProfessionalDashboard;
