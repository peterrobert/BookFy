const AccountSettings = () => {
  return (
    <section id="account-settings" className="mb-8">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-black">Account Settings</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">
                Profile Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <i className="fa-solid fa-user text-gray-500"></i>
                    <div>
                      <p className="font-medium text-black">Full Name</p>
                      <p className="text-sm text-gray-600">Sarah Johnson</p>
                    </div>
                  </div>
                  <button className="text-purple-primary hover:text-purple-dark">
                    <i className="fa-solid fa-edit"></i>
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <i className="fa-solid fa-envelope text-gray-500"></i>
                    <div>
                      <p className="font-medium text-black">Email Address</p>
                      <p className="text-sm text-gray-600">
                        sarah.johnson@email.com
                      </p>
                    </div>
                  </div>
                  <button className="text-purple-primary hover:text-purple-dark">
                    <i className="fa-solid fa-edit"></i>
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <i className="fa-solid fa-phone text-gray-500"></i>
                    <div>
                      <p className="font-medium text-black">Phone Number</p>
                      <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <button className="text-purple-primary hover:text-purple-dark">
                    <i className="fa-solid fa-edit"></i>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-4">
                Preferences
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <i className="fa-solid fa-bell text-gray-500"></i>
                    <div>
                      <p className="font-medium text-black">
                        Email Notifications
                      </p>
                      <p className="text-sm text-gray-600">
                        Receive appointment reminders
                      </p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      checked
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-primary"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <i className="fa-solid fa-comment text-gray-500"></i>
                    <div>
                      <p className="font-medium text-black">
                        SMS Notifications
                      </p>
                      <p className="text-sm text-gray-600">
                        Get text message updates
                      </p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      checked
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-primary"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <i className="fa-solid fa-envelope-open text-gray-500"></i>
                    <div>
                      <p className="font-medium text-black">Marketing Emails</p>
                      <p className="text-sm text-gray-600">
                        Receive offers and updates
                      </p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-primary"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-black">
                  Account Actions
                </h3>
                <p className="text-gray-600">
                  Manage your account security and data
                </p>
              </div>
              <div className="flex space-x-3">
                <button className="bg-purple-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-dark transition-colors">
                  Change Password
                </button>
                <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  Export Data
                </button>
                <button className="bg-red-100 text-red-700 px-6 py-2 rounded-lg font-medium hover:bg-red-200 transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSettings;
