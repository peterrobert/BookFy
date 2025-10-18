// --- LANDING PAGE CATEGORIES SECTION COMPONENT --- //
const CategoriesSection = () => {
  return (
    <section id="categories-section" className="py-20 px-5 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Popular Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover professionals across various categories and book your next
            appointment in just a few clicks.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="bg-white p-6 rounded-xl border border-black shadow-lg hover:shadow-xl transition-all cursor-pointer group">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-primary transition-colors">
                <i className="fa-solid fa-user-md text-purple-primary text-2xl group-hover:text-white"></i>
              </div>
              <h3 className="font-semibold text-black mb-2">Healthcare</h3>
              <p className="text-sm text-gray-600">1,250+ Professionals</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-black shadow-lg hover:shadow-xl transition-all cursor-pointer group">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-primary transition-colors">
                <i className="fa-solid fa-cut text-purple-primary text-2xl group-hover:text-white"></i>
              </div>
              <h3 className="font-semibold text-black mb-2">Beauty & Spa</h3>
              <p className="text-sm text-gray-600">890+ Professionals</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-black shadow-lg hover:shadow-xl transition-all cursor-pointer group">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-primary transition-colors">
                <i className="fa-solid fa-dumbbell text-purple-primary text-2xl group-hover:text-white"></i>
              </div>
              <h3 className="font-semibold text-black mb-2">Fitness</h3>
              <p className="text-sm text-gray-600">670+ Professionals</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-black shadow-lg hover:shadow-xl transition-all cursor-pointer group">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-primary transition-colors">
                <i className="fa-solid fa-briefcase text-purple-primary text-2xl group-hover:text-white"></i>
              </div>
              <h3 className="font-semibold text-black mb-2">Consulting</h3>
              <p className="text-sm text-gray-600">540+ Professionals</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-black shadow-lg hover:shadow-xl transition-all cursor-pointer group">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-primary transition-colors">
                <i className="fa-solid fa-graduation-cap text-purple-primary text-2xl group-hover:text-white"></i>
              </div>
              <h3 className="font-semibold text-black mb-2">Education</h3>
              <p className="text-sm text-gray-600">780+ Professionals</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-black shadow-lg hover:shadow-xl transition-all cursor-pointer group">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-primary transition-colors">
                <i className="fa-solid fa-hammer text-purple-primary text-2xl group-hover:text-white"></i>
              </div>
              <h3 className="font-semibold text-black mb-2">Home Services</h3>
              <p className="text-sm text-gray-600">920+ Professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
