// --- LANDING PAGE FEATURES SECTION COMPONENT --- //
const FeaturesSection = () => {
  return (
    <section id="features-section" className="py-20 px-5 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Why Choose Appointment Palette?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience seamless appointment booking with our comprehensive
            platform designed for both clients and professionals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl border border-black shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <i className="fa-solid fa-clock text-purple-primary text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-black mb-4">24/7 Booking</h3>
            <p className="text-gray-600">
              Book appointments anytime, anywhere. Our platform is available
              round the clock for your convenience.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-black shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <i className="fa-solid fa-shield-halved text-purple-primary text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-black mb-4">
              Verified Professionals
            </h3>
            <p className="text-gray-600">
              All professionals are thoroughly vetted and verified to ensure you
              receive the highest quality service.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-black shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <i className="fa-solid fa-bell text-purple-primary text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-black mb-4">
              Smart Reminders
            </h3>
            <p className="text-gray-600">
              Never miss an appointment with our intelligent reminder system via
              email and SMS notifications.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-black shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <i className="fa-solid fa-credit-card text-purple-primary text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-black mb-4">
              Secure Payments
            </h3>
            <p className="text-gray-600">
              Safe and secure payment processing with multiple payment options
              and full transaction protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
