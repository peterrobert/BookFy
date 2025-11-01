import AppButton from "../../../Components/AppButton";

const WelcomeSection = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black mb-2">
            Welcome back, Sarah!
          </h1>
          <p className="text-gray-600 font-light">
            Manage your appointments and explore new services
          </p>
        </div>
        <AppButton
          icon={<i className="fa-solid fa-plus mr-2"></i>}
          label={"Book New Appointment"}
          className="bg-purple-primary text-white px-6 py-3 rounded-lg border border-black font-semibold hover:bg-purple-dark transition-colors flex items-center"
        />
      </div>
    </div>
  );
};

export default WelcomeSection;
