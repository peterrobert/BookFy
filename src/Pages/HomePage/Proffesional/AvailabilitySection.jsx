const AvailabilitySection = () => {
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
          <p className="text-gray-600 text-sm">
            Manage your working hours and time slots
          </p>
        </div>
        <button className="bg-purple-primary text-white px-4 py-2 rounded-lg border border-black font-medium hover:bg-purple-dark transition-colors">
          <i className="fa-solid fa-edit mr-2"></i>
          Edit Schedule
        </button>
      </div>
    </section>
  );
};

export default AvailabilitySection;
