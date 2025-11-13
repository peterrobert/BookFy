import { useNavigate } from "react-router-dom";
import AppButton from "../../../Components/AppButton";
const statsData = [
  {
    title: "Upcoming Appointments",
    value: 3,
    subtitle: "Next: Today 2:00 PM",
    subtitleColor: "text-green-500",
    icon: "fa-solid fa-calendar-check",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-primary",
  },
  {
    title: "Total Appointments",
    value: 47,
    subtitle: "This year",
    subtitleColor: "text-blue-500",
    icon: "fa-solid fa-clock",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    title: "Favorite Professionals",
    value: 8,
    subtitle: "Saved for quick booking",
    subtitleColor: "text-yellow-500",
    icon: "fa-solid fa-heart",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
  },
  {
    title: "Rewards Points",
    value: 1240,
    subtitle: "Earn more points",
    subtitleColor: "text-green-500",
    icon: "fa-solid fa-coins",
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
  },
];

const WelcomeSection = () => {
  const navigate = useNavigate();
  const displayStatistics = () => {
    const result = statsData.map((value) => {
      return (
        <div
          className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
          key={value.title}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">{value.title}</p>
              <p className="text-3xl font-bold text-black mt-2">
                {value.value}
              </p>
              <p className={`${value.subtitleColor} text-sm mt-1`}>
                <i className={`${value.icon} mr-1`}></i>
                {value.subtitle}
              </p>
            </div>
            <div
              className={`w-12 h-12 ${value.iconBg} rounded-lg flex items-center justify-center`}
            >
              <i className={`${value.icon} ${value.iconColor} text-xl`}></i>
            </div>
          </div>
        </div>
      );
    });
    return result;
  };

  return (
    <>
      <div className="mb-8" id="Dashboard">
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
            onClick={() => navigate("/professionals")}
            icon={<i className="fa-solid fa-plus mr-2"></i>}
            label={"Book New Appointment"}
            className="bg-purple-primary text-white px-6 py-3 rounded-lg border border-black font-semibold hover:bg-purple-dark transition-colors flex items-center"
          />
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {displayStatistics()}
      </section>
    </>
  );
};

export default WelcomeSection;
