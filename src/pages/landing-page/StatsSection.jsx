const StatsSection = () => {
  return (
    <section id="stats-section" className="py-20 px-5 bg-purple-primary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Our platform continues to grow, connecting more professionals with
            clients every day.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-4">10,000+</div>
            <div className="text-purple-100">Verified Professionals</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-4">50,000+</div>
            <div className="text-purple-100">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-4">100,000+</div>
            <div className="text-purple-100">Appointments Booked</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-4">98%</div>
            <div className="text-purple-100">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
