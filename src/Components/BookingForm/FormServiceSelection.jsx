import AppInputField from "../AppInputField";

const FormServiceSelection = ({ skills, price }) => {
  const displayServices = () => {
    return skills.map((service, index) => {
      return (
        <div
          className="border
          border-gray-200 rounded-lg p-4 cursor-pointer hover:border-purple-primary hover:bg-purple-50 transition-colors"
          key={index}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                name="service"
                id={service.name.toLowerCase().replace(/ /g, "-")}
                className="text-purple-primary"
              />
              <div>
                <h4 className="font-semibold text-black">{service.name}</h4>
                <p className="text-sm text-gray-600 font-light">
                  {service.description}
                </p>
                <p className="text-xs text-gray-500 mt-1 font-light">
                  {`Duration: ${service.duration} `}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-purple-primary">
                ${price}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div
      id="service-selection"
      className="bg-white border border-gray-200 rounded-xl p-6"
    >
      <h3 className="text-xl font-bold text-black mb-6">Select Service</h3>
      <div className="space-y-4">{displayServices()}</div>
    </div>
  );
};

export default FormServiceSelection;

// border-purple-primary bg-purple-50 rounded-lg p-4 cursor-pointer
