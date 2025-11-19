const updates = [
  {
    id: 1,
    category: "feature",
    title: "Automated Reminders",
    subtitle: "New Feature: Automated Reminders",
    description:
      "Set up automatic SMS and email reminders for your clients to reduce no-shows.",
    cta: "Learn More →",
    icon: {
      name: "fa-sparkles",
      color: "purple",
    },
  },
  {
    id: 2,
    category: "app_update",
    title: "Mobile App Update",
    description:
      "Version 2.1 includes improved calendar sync and faster booking management.",
    cta: "Update Now →",
    icon: {
      name: "fa-mobile-alt",
      color: "gray",
    },
  },
  {
    id: 3,
    category: "security",
    title: "Security Enhancement",
    description:
      "Enhanced two-factor authentication now available for professional accounts.",
    cta: "Enable 2FA →",
    icon: {
      name: "fa-shield-alt",
      color: "gray",
    },
  },
  {
    id: 4,
    category: "training",
    title: "Training Resources",
    description:
      "New video tutorials on maximizing your booking conversion rates.",
    cta: "Watch Now →",
    icon: {
      name: "fa-graduation-cap",
      color: "gray",
    },
  },
];

const SystemSection = () => {
  const displayUpdates = () => {
    return updates.map((value) => {
      return (
        <div
          className="p-4 border border-purple-200 rounded-lg bg-purple-50"
          key={value.id}
        >
          <div className="flex items-center mb-2">
            <i className="fa-solid fa-sparkles text-purple-primary mr-2"></i>
            <h3 className="font-semibold text-black">
              New Feature: Automated Reminders
            </h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Set up automatic SMS and email reminders for your clients to reduce
            no-shows.
          </p>
          <button className="text-purple-primary hover:text-purple-dark text-sm font-medium">
            Learn More →
          </button>
        </div>
      );
    });
  };
  return (
    <div
      id="system-updates"
      className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-black">Platform Updates</h2>
        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
          Latest
        </span>
      </div>
      <div className="space-y-4">{displayUpdates()}</div>
    </div>
  );
};

export default SystemSection;
