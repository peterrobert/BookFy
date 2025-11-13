import React from "react";
import AppInputField from "../../components/AppInputField";
import AppButton from "../../components/AppButton";

const HeroSection = () => {
  return (
    <section
      id="search-hero-section"
      className="bg-gradient-to-br from-purple-50 to-white py-16 px-5"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Find Your Perfect
            <span className="text-purple-primary"> Professional</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-light">
            Browse through thousands of verified professionals across various
            categories. Use our advanced filters to find exactly what you're
            looking for.
          </p>
        </div>

        <div id="main-search-bar" className="max-w-6xl mx-auto mb-8">
          <div className="bg-white rounded-2xl border border-black shadow-xl p-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              <AppInputField
                className="lg:col-span-2"
                label="Service or Professional"
                placeholder="Hair stylist, dentist, trainer..."
                icon="fa-solid fa-search"
              />
              <AppInputField
                label="Location"
                placeholder="Enter city or zip."
                icon="fa-solid fa-location-dot"
              />
              <AppInputField
                label="Date"
                placeholder="Hair stylist, dentist, trainer..."
                icon="fa-solid fa-calendar"
                type="date"
              />
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 opacity-0">
                  Search
                </label>
                <AppButton
                  label="Search"
                  className="w-full"
                  variant="primary"
                  icon={<i className="fa-solid fa-search mr-2"></i>}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          id="quick-filters"
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          <button className="bg-purple-primary text-white px-6 py-2 rounded-full border border-black font-medium hover:bg-purple-dark transition-colors">
            All Categories
          </button>
          <button className="bg-white text-gray-700 px-6 py-2 rounded-full border border-gray-300 font-medium hover:bg-purple-50 hover:border-purple-primary hover:text-purple-primary transition-colors">
            Healthcare
          </button>
          <button className="bg-white text-gray-700 px-6 py-2 rounded-full border border-gray-300 font-medium hover:bg-purple-50 hover:border-purple-primary hover:text-purple-primary transition-colors">
            Beauty & Spa
          </button>
          <button className="bg-white text-gray-700 px-6 py-2 rounded-full border border-gray-300 font-medium hover:bg-purple-50 hover:border-purple-primary hover:text-purple-primary transition-colors">
            Fitness
          </button>
          <button className="bg-white text-gray-700 px-6 py-2 rounded-full border border-gray-300 font-medium hover:bg-purple-50 hover:border-purple-primary hover:text-purple-primary transition-colors">
            Consulting
          </button>
          <button className="bg-white text-gray-700 px-6 py-2 rounded-full border border-gray-300 font-medium hover:bg-purple-50 hover:border-purple-primary hover:text-purple-primary transition-colors">
            Education
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
