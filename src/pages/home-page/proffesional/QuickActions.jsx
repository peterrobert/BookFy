const quickActions = [
  {
    icon: "fa-plus",
    label: "Add New Appointment",
    style: "bg-purple-primary text-white",
  },
  {
    icon: "fa-calendar-times",
    label: "Block Time Slot",
    style: "bg-white text-purple-primary",
  },
  {
    icon: "fa-clock",
    label: "Update Availability",
    style: "bg-white text-gray-700",
  },
  {
    icon: "fa-user-plus",
    label: "Add New Client",
    style: "bg-white text-gray-700",
  },
];

const availabilityStatus = [
  {
    day: "Today",
    status: "Available",
    color: "green",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
  },
  {
    day: "Tomorrow",
    status: "Partially Booked",
    color: "yellow",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
  },
  {
    day: "Thursday",
    status: "Fully Booked",
    color: "red",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
  },
];

const QuickActions = () => {
  const displayQuickActions = () => {
    return quickActions.map((value, index) => {
      return (
        <button
          className={`w-full ${value.style} p-4 rounded-lg border border-black font-medium hover:bg-purple-dark transition-colors flex items-center`}
          key={index}
        >
          <i className={value.icon}></i>
          {value.label}
        </button>
      );
    });
  };
  const displayAvailableStatus = () => {
    return availabilityStatus.map((value, index) => {
      return (
        <div
          className={`flex items-center justify-between p-3 ${value.bgColor} rounded-lg`}
          key={index}
        >
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
            <span className="text-sm font-medium">{value.day}</span>
          </div>
          <span className={`text-sm ${value.textColor}`}>{value.status}</span>
        </div>
      );
    });
  };

  return (
    <div
      id="quick-actions"
      className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
    >
      <h2 className="text-xl font-bold text-black mb-6">Quick Actions</h2>
      <div className="space-y-4">{displayQuickActions()}</div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-black mb-4">
          Availability Status
        </h3>
        <div className="space-y-3">{displayAvailableStatus()}</div>
      </div>
    </div>
  );
};

export default QuickActions;
