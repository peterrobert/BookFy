function AccountTypeCard() {
  return (
    <div
      id="client-account-card"
      className="bg-white p-8 rounded-xl border border-black shadow-lg hover:shadow-xl transition-all cursor-pointer group"
    >
      <div className="text-center">
        <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-primary transition-colors">
          <i className="fa-solid fa-user text-purple-primary text-3xl group-hover:text-white"></i>
        </div>
        <h3 className="text-2xl font-bold text-black mb-4">I'm a Client</h3>
        <p className="text-gray-600 mb-6">
          Book appointments with verified professionals across various
          categories
        </p>
        <ul className="text-left space-y-3 mb-8">
          <li className="flex items-center">
            <i className="fa-solid fa-check text-purple-primary mr-3"></i>
            <span className="text-gray-700">Browse and book appointments</span>
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-check text-purple-primary mr-3"></i>
            <span className="text-gray-700">Manage your bookings</span>
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-check text-purple-primary mr-3"></i>
            <span className="text-gray-700">Receive reminders</span>
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-check text-purple-primary mr-3"></i>
            <span className="text-gray-700">Rate and review services</span>
          </li>
        </ul>
        <button className="w-full bg-purple-primary text-white py-3 rounded-lg border border-black font-semibold hover:bg-purple-dark transition-colors">
          Continue as Client
        </button>
      </div>
    </div>
  );
}

export default AccountTypeCard;
