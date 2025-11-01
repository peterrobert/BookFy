import AppError from "../../../Components/AppError";
import AppSpinner from "../../../Components/AppSpinner";
import { useAppointments } from "../../../hooks";

const UpcomingAppointment = () => {
  const { isError, isLoading, data } = useAppointments();

  const displayAppointments = () => {
    if (isLoading) return <AppSpinner />;
    if (isError) return <AppError name={"appointments"} />;

    const appointments = data ? data.slice(0, 3) : [];
    return appointments?.map((value) => {
      return (
        <div
          className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-purple-50 "
          key={value.id}
        >
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-primary">
            <img
              src={value.avatar}
              alt={value.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-black">{value.name}</h3>
            <p className="text-gray-600 font-light">{value.service}</p>
            <div className="flex items-center space-x-4 mt-2">
              <span className="flex items-center text-sm text-gray-500 font-light">
                <i className="fa-solid fa-calendar mr-1"></i>
                {value.date}
              </span>
              <span className="flex items-center text-sm text-gray-500">
                <i className="fa-solid fa-clock mr-1"></i>
                {value.time}
              </span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                {value.status}
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            {value?.actions?.length >= 1
              ? value?.actions?.map((value) => {
                  return (
                    <button
                      key={value}
                      className="bg-purple-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-dark transition-colors"
                    >
                      {value}
                    </button>
                  );
                })
              : null}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
      <section id="upcoming-appointments" className="lg:col-span-2">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-black">
                Upcoming Appointments
              </h2>
              <button className="text-purple-primary hover:text-purple-dark font-medium">
                View All
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {/* -- Appointments-- */}
              {displayAppointments()}
            </div>
          </div>
        </div>
      </section>

      <section id="quick-actions" className="space-y-6">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-lg font-bold text-black mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center space-x-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <div className="w-10 h-10 bg-purple-primary rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-plus text-white"></i>
              </div>
              <span className="font-medium text-black">
                Book New Appointment
              </span>
            </button>

            <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-redo text-white"></i>
              </div>
              <span className="font-medium text-black">Rebook Previous</span>
            </button>

            <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-search text-white"></i>
              </div>
              <span className="font-medium text-black">Find Professionals</span>
            </button>

            <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-star text-white"></i>
              </div>
              <span className="font-medium text-black">Leave Review</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingAppointment;
