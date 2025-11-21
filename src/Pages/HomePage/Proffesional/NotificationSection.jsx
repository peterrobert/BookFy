import AppButton from "../../../Components/AppButton";
import SystemSection from "./SystemSection";
const notifications = [
  {
    type: "appointment_booked",
    title: "New appointment booked",
    message:
      "Jennifer Davis booked a full service package for tomorrow at 2:30 PM",
    timeAgo: "5 minutes ago",
    icon: "fa-calendar-plus",
    color: "blue",
  },
  {
    type: "new_review",
    title: "New review received",
    message: 'Sarah Johnson left you a 5-star review: "Amazing service!"',
    timeAgo: "2 hours ago",
    icon: "fa-star",
    color: "green",
  },
  {
    type: "appointment_reminder",
    title: "Appointment reminder",
    message: "Don't forget your appointment with Michael Chen at 10:30 AM",
    timeAgo: "1 day ago",
    icon: "fa-clock",
    color: "yellow",
  },
  {
    type: "payment_received",
    title: "Payment received",
    message: "$150 payment received from Michael Chen for color treatment",
    timeAgo: "2 days ago",
    icon: "fa-dollar-sign",
    color: "purple",
  },
];

const NotificationSection = () => {
  const displayNotifications = () => {
    return notifications.map((value, index) => {
      return (
        <div
          className={`flex items-start p-3 bg-${value.color}-50 rounded-lg border-l-4 border-${value.color}-500 cursor-pointer`}
          key={index}
        >
          <div
            className={`w-8 h-8 bg-${value.color}-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0`}
          >
            <i className={`fa-solid ${value.icon} text-black text-sm`}></i>
          </div>
          <div>
            <p className="text-sm font-medium text-black">{value.title}</p>
            <p className="text-xs text-gray-600 font-light">{value.message}</p>
            <p className="text-xs text-gray-500 mt-1 font-light">
              {value.timeAgo}
            </p>
          </div>
        </div>
      );
    });
  };
  return (
    <section
      id="notifications-updates"
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"
    >
      <div
        id="recent-notifications"
        className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
      >
        {" "}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-black">Recent Notifications</h2>
          <AppButton label="Mark All Read" />
        </div>
        <div className="space-y-4">{displayNotifications()}</div>
      </div>
      <SystemSection />
    </section>
  );
};

export default NotificationSection;
