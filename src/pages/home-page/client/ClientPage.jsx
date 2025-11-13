import { useState } from "react";
import MainContent from "./MainContent";
import SideNavigationSection from "./SideNavigationSection";

const navData = [
  {
    id: 1,
    name: "Dashboard",
    icon: <i className="fa-solid fa-th-large text-lg"></i>,
    view: "Dashboard",
  },
  {
    id: 2,
    name: "My Appointments",
    icon: <i className="fa-solid fa-calendar-alt text-lg"></i>,
    view: "Appointments",
  },
  {
    id: 3,
    name: "Fav Professionals",
    icon: <i className="fa-solid fa-heart text-lg"></i>,
    view: "Professionals",
  },

  {
    id: 4,
    name: "Account Settings",
    icon: <i className="fa-solid fa-cog text-lg"></i>,
    view: "Settings",
  },
];

const ClientPage = () => {
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

export default ClientPage;
