const schedule = [
  {
    day: "Monday",
    open: "9:00 AM",
    close: "6:00 PM",
    slotsAvailable: 8,
  },
  {
    day: "Tuesday",
    open: "9:00 AM",
    close: "6:00 PM",
    slotsAvailable: 3,
  },
  {
    day: "Wednesday",
    open: "9:00 AM",
    close: "6:00 PM",
    slotsAvailable: 0,
  },
  {
    day: "Thursday",
    open: "10:00 AM",
    close: "7:00 PM",
    slotsAvailable: 6,
  },
  {
    day: "Friday",
    open: "9:00 AM",
    close: "8:00 PM",
    slotsAvailable: 2,
  },
  {
    day: "Saturday",
    open: "8:00 AM",
    close: "5:00 PM",
    slotsAvailable: 0,
  },
  {
    day: "Sunday",
    open: null,
    close: null,
    slotsAvailable: null,
  },
];

const AvailabilitySection = () => {
  const displaySchedule = () => {
    return schedule.map((value) => {
      return (
        <div className="text-center" key={value.day}>
          <div className="font-semibold text-black mb-3">{value.day}</div>
          <div className="space-y-2">
            <div
              className={`${
                value.open === null
                  ? "bg-red-100 text-red-800"
                  : "bg-green-100 text-green-800"
              } text-xs py-1 px-2 rounded`}
            >
              {value.open !== null ? `${value.open} -` : "Closed"}{" "}
              {value.close !== null && value.close}
            </div>
            <div className="text-xs text-gray-500 font-light">
              {" "}
              {value.slotsAvailable} slots available
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <section
      id="availability-management"
      className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-black mb-2">
            Weekly Availability
          </h2>
          <p className="text-gray-600 text-sm font-light">
            Manage your working hours and time slots
          </p>
        </div>
        <button className="bg-purple-primary text-white px-4 py-2 rounded-lg border border-black font-medium hover:bg-purple-dark transition-colors">
          <i className="fa-solid fa-edit mr-2"></i>
          Edit Schedule
        </button>
      </div>
      <div className="grid grid-cols-7 gap-4">{displaySchedule()}</div>
    </section>
  );
};

export default AvailabilitySection;
