const appointmentType = [
  {
    id: 1,
    name: "In-Person Visit",
    description: "Visit the clinic for hands-on examination",
  },
  {
    id: 2,
    name: "Virtual Consultation",
    description: "Video call consultation from home",
  },
];

const FormAppointmentType = () => {
  const displayAppointmentTypes = () => {
    return appointmentType.map((type) => {
      return (
        <div
          className="borderbg-purple-50 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-purple-primary"
          key={type.id}
        >
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              name="appointment-type"
              id="in-person"
              className="text-purple-primary"
              checked
            />
            <div>
              <h4 className="font-semibold text-black">{type.name}</h4>
              <p className="text-sm text-gray-600">{type.description}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div
      id="appointment-type"
      className="bg-white border border-gray-200 rounded-xl p-6"
    >
      <h3 className="text-xl font-bold text-black mb-6">Appointment Type</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayAppointmentTypes()}
      </div>
    </div>
  );
};

export default FormAppointmentType;
