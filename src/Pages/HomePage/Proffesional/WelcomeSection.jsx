import AppButton from "../../../Components/AppButton";

const quickStats = [
  {
    id: 1,
    icon: "fa-calendar-check",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-primary",
    value: "24",
    label: "Today's Appointments",
    change: "+12%",
    changeColor: "text-green-600",
  },
  {
    id: 2,
    icon: "fa-dollar-sign",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    value: "$2,850",
    label: "This Week's Revenue",
    change: "+8%",
    changeColor: "text-green-600",
  },
  {
    id: 3,
    icon: "fa-users",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    value: "156",
    label: "Active Clients",
    change: "+15%",
    changeColor: "text-green-600",
  },
  {
    id: 4,
    icon: "fa-star",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
    value: "4.9",
    label: "Average Rating",
    change: "+0.1",
    changeColor: "text-green-600",
  },
];

const WelcomeSection = () => {
  const displayQuickStats = () => {
    return quickStats.map((value) => {
      return (
        <div
          className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
          key={value.id}
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-12 h-12 ${value.iconBg} rounded-lg flex items-center justify-center`}
            >
              <i
                className={`fa-solid ${value.icon} ${value.iconColor} text-xl`}
              ></i>
            </div>
            <span className="text-green-600 text-sm font-medium">
              {value.change}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-black mb-1">{value.value}</h3>
          <p className="text-gray-600 text-sm font-light">{value.label}</p>
        </div>
      );
    });
  };
  return (
    <>
      <section id="dashboard-header" className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-black mb-2">
              Professional Dashboard
            </h1>
            <p className="text-gray-600 font-light">
              Manage your appointments, availability, and client interactions
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              <i className="fa-solid fa-circle text-green-500 mr-1 text-xs"></i>
              Online
            </div>
            <AppButton
              icon={<i className="fa-solid fa-plus mr-2"></i>}
              label="Add Availability"
              className="bg-purple-primary text-white px-6 py-2 rounded-lg border border-black font-medium hover:bg-purple-dark transition-colors"
            />
          </div>
        </div>
      </section>
      <section
        id="quick-stats"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {displayQuickStats()}
      </section>
    </>
  );
};

export default WelcomeSection;
