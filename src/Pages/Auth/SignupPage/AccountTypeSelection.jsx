import { useState } from "react";
import AccountTypeCard from "./AccountTypeCard";

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
  const [selectedType, setSelectedType] = useState("client");

  const handleAccountTypeSelect = (type) => {
    setSelectedType(type);
  };

  const renderAccountTypeCards = () => {
    return accountTypeData.map((type) => (
      <AccountTypeCard
        key={type.id}
        type={type}
        handleSelectedType={handleAccountTypeSelect}
      />
    ));
  };

  console.log("Selected Account Type:", selectedType);

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
