const clientProcess = [
  {
    step: 1,
    title: "Create Account",
    description: "Fill out the registration form with your basic information",
  },
  {
    step: 2,
    title: "Verify Email",
    description: "Check your email and click the verification link",
  },
  {
    step: 3,
    title: "Complete Profile",
    description: "Add additional details to personalize your experience",
  },
  {
    step: 4,
    title: "Start Booking",
    description: "Browse professionals and book your first appointment",
  },
];

const professionalProcess = [
  {
    step: 1,
    title: "Submit Application",
    description: "Complete the detailed professional registration form",
  },
  {
    step: 2,
    title: "Document Review",
    description: "Our team reviews your credentials and documentation",
  },
  {
    step: 3,
    title: "Background Check",
    description: "Complete background verification process",
  },
  {
    step: 4,
    title: "Profile Activation",
    description: "Once approved, your profile goes live on the platform",
  },
];

const RegistrationProcess = () => {
  const displayClientProcess = () => {
    const result = clientProcess.map((value) => {
      return (
        <div className="space-y-6" key={value.step}>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-purple-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
              {value.step}
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">{value.title}</h4>
              <p className="text-gray-600 text-sm font-light">
                {value.description}
              </p>
            </div>
          </div>
        </div>
      );
    });
    return result;
  };

  const displayProffesionalProcess = () => {
    const result = professionalProcess.map((value) => {
      return (
        <div className="space-y-6" key={value.step}>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-purple-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
              {value.step}
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">{value.title}</h4>
              <p className="text-gray-600 text-sm font-light">
                {value.description}
              </p>
            </div>
          </div>
        </div>
      );
    });
    return result;
  };

  return (
    <section id="registration-process" className="py-20 px-5 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Registration Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Simple steps to get started on our platform
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div id="client-process">
              <h3 className="text-2xl font-bold text-black mb-8 text-center">
                For Clients
              </h3>
              <div className="space-y-6">{displayClientProcess()}</div>
            </div>
            <div id="professional-process">
              <h3 className="text-2xl font-bold text-black mb-8 text-center">
                For Professionals
              </h3>
              <div className="space-y-6">{displayProffesionalProcess()}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationProcess;
