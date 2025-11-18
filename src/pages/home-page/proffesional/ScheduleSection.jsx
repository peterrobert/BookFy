import QuickActions from "./QuickActions";

const appointments = [
  {
    time: "9:00",
    service: "Hair Cut & Styling",
    price: 85,
    customer: "Sarah Johnson",
    duration: "60 minutes",
    status: "Confirmed",
    action: "View Details",
    color: "purple",
  },
  {
    time: "10:30",
    service: "Color Treatment",
    price: 150,
    customer: "Michael Chen",
    duration: "90 minutes",
    status: "In Progress",
    action: "Start Session",
    color: "blue",
  },

  {
    time: "1:00",
    service: "Consultation",
    price: 45,
    customer: "Emma Rodriguez",
    duration: "30 minutes",
    status: "Pending",
    action: "Confirm",
    color: "green",
  },
  {
    time: "2:30",
    service: "Full Service Package",
    price: 200,
    customer: "Jennifer Davis",
    duration: "120 minutes",
    status: "Confirmed",
    action: "View Details",
    color: "purple",
  },
];

const ScheduleSection = () => {
  const now = new Date();
  const date = now.toISOString().split("T")[0];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = days[now.getDay()];
  const todayWithDay = `${dayOfWeek}, ${date}`;

  const displayAppointments = () => {
    return appointments.map((value, index) => {
      return (
        <div
          className={`flex items-center p-4 bg-${value.color}-50 rounded-lg border border-purple-200`}
          key={index}
        >
          <div className="flex-shrink-0 w-12 h-12 bg-purple-primary rounded-lg flex items-center justify-center text-white font-semibold">
            {value.time}
          </div>
          <div className="ml-4 flex-grow">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-black">{value.service}</h3>
              <span className="text-purple-primary font-semibold">
                ${value.price}
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              {value.customer} • {value.duration}
            </p>
            <div className="flex items-center mt-2 space-x-4">
              <span
                className={`text-xs bg-green-100 ${value.color} px-2 py-1 rounded-full`}
              >
                {value.action}
              </span>
              <button className="text-xs text-purple-primary hover:text-purple-dark">
                View Details
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section
      id="schedule-section"
      className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
    >
      <div
        id="appointments-today"
        className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl  text-black mb-2 font-light">
              Today's Schedule
            </h2>
            <p className="text-gray-600 text-sm">{todayWithDay}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-gray-400 hover:text-purple-primary transition-colors">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="text-gray-400 hover:text-purple-primary transition-colors">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
            <button className="text-purple-primary hover:text-purple-dark transition-colors">
              <i className="fa-solid fa-ellipsis-v"></i>
            </button>
          </div>
        </div>
        <div class="space-y-4">{displayAppointments()}</div>
      </div>
      <QuickActions />
    </section>
  );
};

export default ScheduleSection;
