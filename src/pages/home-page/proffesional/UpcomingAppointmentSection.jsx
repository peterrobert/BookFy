import AppButton from "../../../components/AppButton";

const bookingsData = [
  {
    title: "Color & Cut Package",
    time: "Wed 10:00 AM",
    client: "Lisa Thompson",
    duration: "2.5 hours",
    price: "$185",
    borderColor: "purple",
  },
  {
    title: "Bridal Package",
    time: "Thu 2:00 PM",
    client: "Maria Garcia",
    duration: "3 hours",
    price: "$250",
    borderColor: "green",
  },
  {
    title: "Men's Grooming",
    time: "Fri 11:30 AM",
    client: "James Wilson",
    duration: "1 hour",
    price: "$65",
    borderColor: "blue",
  },
  {
    title: "Hair Treatment",
    time: "Fri 3:00 PM",
    client: "Rachel Kim",
    duration: "90 minutes",
    price: "$120",
    borderColor: "yellow",
  },
  {
    title: "Consultation",
    time: "Sat 9:00 AM",
    client: "New Client",
    duration: "30 minutes",
    price: "$45",
    borderColor: "red",
  },
];

const UpcomingAppointmentSection = () => {
  const displayBookings = () => {
    return bookingsData.map((value, index) => {
      return (
        <div
          className={`border-l-4 border-${value.borderColor}-primary pl-4 py-2 cursor-pointer hover:border-purple-primary`}
          key={index}
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-black">{value.title}</h3>
            <span className="text-sm text-gray-500">{value.time}</span>
          </div>
          <p className="text-gray-600 text-sm mb-1 font-light">
            {value.client} • {value.duration}
          </p>
          <span className="text-purple-primary font-semibold text-sm">
            {value.price}
          </span>
        </div>
      );
    });
  };
  return (
    <div
      id="upcoming-appointments"
      className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-black">Upcoming This Week</h2>
        <AppButton
          label="View Calendar"
          className="text-purple-primary hover:text-purple-dark transition-colors text-sm font-medium"
          variant="outline"
        />
      </div>
      <div className="space-y-4">{displayBookings()}</div>
    </div>
  );
};

export default UpcomingAppointmentSection;
