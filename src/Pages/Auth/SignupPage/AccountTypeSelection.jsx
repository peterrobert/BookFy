const accountTypeData = [
  {
    id: "client",
    title: "I'm a Client",
    description:
      "Book appointments with verified professionals across various categories",
    features: [
      "Browse and book appointments",
      "Manage your bookings",
      "Receive reminders",
      "Rate and review services",
    ],
    buttonText: "Continue as Client",
    iconClass: "fa-solid fa-user",
  },
  {
    id: "professional",
    title: "I'm a Professional",
    description:
      "Join our platform to connect with clients and grow your business",
    features: [
      "Create professional profile",
      "Manage appointments",
      "Set availability",
      "Secure payments",
    ],
    buttonText: "Continue as Professional",
    iconClass: "fa-solid fa-briefcase",
  },
];

const AccountTypeSelection = () => {
  const renderAccountTypeCards = () => {
    return accountTypeData.map((type) => (
      <div
        key={type.id}
        id={`${type.id}-account-card`}
        className="bg-white p-8 rounded-xl border border-black shadow-lg hover:shadow-xl transition-all cursor-pointer group"
      >
        <div className="text-center">
          <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-primary transition-colors">
            <i
              className={`${type.iconClass} text-purple-primary text-3xl group-hover:text-white`}
            ></i>
          </div>
          <h3 className="text-2xl font-bold text-black mb-4">{type.title}</h3>
          <p className="text-gray-600 mb-6">{type.description}</p>
          <ul className="text-left space-y-3 mb-8">
            {type.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <i className="fa-solid fa-check text-purple-primary mr-3"></i>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="w-full bg-purple-primary text-white py-3 rounded-lg border border-black font-semibold hover:bg-purple-dark transition-colors">
            {type.buttonText}
          </button>
        </div>
      </div>
    ));
  };

  return (
    <section id="account-type-selection" className="py-16 px-5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">
              Choose Your Account Type
            </h2>
            <p className="text-lg text-gray-600">
              Select how you'd like to use Appointment Palette
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {renderAccountTypeCards()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountTypeSelection;
