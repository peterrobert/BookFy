const FormAppointmentType = () => {
  return (
    <div
      id="appointment-type"
      className="bg-white border border-gray-200 rounded-xl p-6"
    >
      <h3 className="text-xl font-bold text-black mb-6">Appointment Type</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-purple-primary bg-purple-50 rounded-lg p-4 cursor-pointer">
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              name="appointment-type"
              id="in-person"
              className="text-purple-primary"
              checked
            />
            <div>
              <h4 className="font-semibold text-black">In-Person Visit</h4>
              <p className="text-sm text-gray-600">
                Visit the clinic for hands-on examination
              </p>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-purple-primary hover:bg-purple-50 transition-colors">
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              name="appointment-type"
              id="virtual"
              className="text-purple-primary"
            />
            <div>
              <h4 className="font-semibold text-black">Virtual Consultation</h4>
              <p className="text-sm text-gray-600">
                Video call consultation from home
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAppointmentType;
