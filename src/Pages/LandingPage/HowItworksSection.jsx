const HowItworksSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-5 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started is simple. Follow these three easy steps to book
            your first appointment.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-purple-primary rounded-full flex items-center justify-center mx-auto border-4 border-white shadow-lg">
                <i className="fa-solid fa-search text-white text-2xl"></i>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">
              Search & Browse
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Browse through our extensive directory of verified professionals.
              Use filters to find exactly what you're looking for in your area.
            </p>
          </div>
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-purple-primary rounded-full flex items-center justify-center mx-auto border-4 border-white shadow-lg">
                <i className="fa-solid fa-calendar-plus text-white text-2xl"></i>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">
              Select & Schedule
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Choose your preferred professional and select from their available
              time slots. Pick a date and time that works best for your
              schedule.
            </p>
          </div>
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-purple-primary rounded-full flex items-center justify-center mx-auto border-4 border-white shadow-lg">
                <i className="fa-solid fa-check-circle text-white text-2xl"></i>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">
              Confirm & Attend
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Complete your booking with secure payment. Receive confirmation
              and reminders. Show up and enjoy your service!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItworksSection;
