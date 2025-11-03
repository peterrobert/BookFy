const SideNavigationSection = ({
  activeView,
  setActiveView,
  navData,
  scrollToSection,
}) => {
  const displaySideNavs = () => {
    const result = navData.map((value) => {
      return (
        <div
          onClick={() => {
            setActiveView(value.view), scrollToSection(value.view);
          }}
          key={value.id}
          className={`flex 
          items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-purple-50
           hover:text-purple-primary transition-colors cursor-pointer ${
             activeView === value.view && `bg-purple-50 text-purple-primary`
           }`}
        >
          {value.icon}
          <span className="font-medium">{value.name}</span>
        </div>
      );
    });
    return result;
  };

  return (
    <nav
      id="sidebar"
      className={`fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 z-40 overflow-y-auto hidden md:block`}
    >
      <div className="p-6 hidden sm:block">
        <div className="space-y-2">{displaySideNavs()}</div>
      </div>
    </nav>
  );
};

export default SideNavigationSection;
