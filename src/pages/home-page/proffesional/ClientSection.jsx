import AppButton from "../../../components/AppButton";
import AppStarRatings from "../../../components/AppStarRatings";

const clientsData = [
  {
    name: "Sarah Johnson",
    avatar:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
    lastVisit: "2 days ago",
    rating: 5.0,
  },
  {
    name: "Michael Chen",
    avatar:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    lastVisit: "1 week ago",
    rating: 4.8,
  },
  {
    name: "Emma Rodriguez",
    avatar:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    lastVisit: "3 days ago",
    rating: 5.0,
  },
  {
    name: "Jennifer Davis",
    avatar:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
    lastVisit: "5 days ago",
    rating: 4.9,
  },
];

const ClientSection = () => {
  const displayClientsData = () => {
    return clientsData.map((value, index) => {
      return (
        <div
          className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          key={index}
        >
          <div className="flex items-center">
            <img
              src={value.avatar}
              alt={value.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold text-black">{value.name}</h3>
              <p className="text-gray-600 text-sm">
                Last visit: {value.lastVisit}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center text-yellow-500 mb-1">
              <AppStarRatings rating={value.rating} />
            </div>
            <AppButton
              label="Book Again"
              variant="outline"
              className="text-purple-primary text-sm hover:text-purple-dark"
            />
          </div>
        </div>
      );
    });
  };
  return (
    <section
      id="client-management"
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
    >
      <div
        id="recent-clients"
        className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-black">Recent Clients</h2>
          <AppButton label="View All" variant="outline" />
        </div>
        <div className="space-y-4">{displayClientsData()}</div>
      </div>
    </section>
  );
};

export default ClientSection;
