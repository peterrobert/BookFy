import AppButton from "../../../components/AppButton";

const UpcomingAppointmentSection = () => {
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
    </div>
  );
};

export default UpcomingAppointmentSection;
