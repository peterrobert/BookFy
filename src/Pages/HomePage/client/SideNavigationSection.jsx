const navData = [
  {
    id: 1,
    name: "Dashboard",
    icon: <i className="fa-solid fa-th-large text-lg"></i>,
  },
  {
    id: 2,
    name: "My Appointments",
    icon: <i className="fa-solid fa-calendar-alt text-lg"></i>,
  },
  {
    id: 3,
    name: "Fav Professionals",
    icon: <i className="fa-solid fa-heart text-lg"></i>,
  },
  {
    id: 4,
    name: "Payment Methods",
    icon: <i className="fa-solid fa-credit-card text-lg"></i>,
  },
  {
    id: 5,
    name: "Account Settings",
    icon: <i className="fa-solid fa-cog text-lg"></i>,
  },
];

const SideNavigationSection = () => {
  const displaySideNavs = () => {
    const result = navData.map((value) => {
      return (
        <div
          key={value.id}
          className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-primary transition-colors cursor-pointer"
        >
          {value.icon}
          <span class="font-medium">{value.name}</span>
        </div>
      );
    });
    return result;
  };

  return (
    <nav
      id="sidebar"
      className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 z-40 overflow-y-auto"
    >
      <div className="p-6">
        <div className="space-y-2">{displaySideNavs()}</div>
      </div>
    </nav>
  );
};

export default SideNavigationSection;
