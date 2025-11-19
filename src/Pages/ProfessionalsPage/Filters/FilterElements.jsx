import React from "react";

const FilterElements = () => {
  return (
    <>
      <div className="space-y-6">
        <div id="category-filter">
          <h4 className="font-semibold text-gray-800 mb-3">Category</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">Healthcare (1,250)</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">Beauty & Spa (890)</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">Fitness (670)</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">Consulting (540)</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">Education (780)</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">Home Services (920)</span>
            </label>
          </div>
        </div>

        <div id="price-filter" className="border-t border-gray-200 pt-6">
          <h4 className="font-semibold text-gray-800 mb-3">Price Range</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="price"
                className="text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">Under $50</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="price"
                className="text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">$50 - $100</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="price"
                className="text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">$100 - $200</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="price"
                className="text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">$200+</span>
            </label>
          </div>
        </div>

        <div id="rating-filter" className="border-t border-gray-200 pt-6">
          <h4 className="font-semibold text-gray-800 mb-3">Rating</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
              />
              <div className="ml-2 flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <span className="text-gray-700">5 Stars (420)</span>
              </div>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
              />
              <div className="ml-2 flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <span className="text-gray-700">4+ Stars (890)</span>
              </div>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
              />
              <div className="ml-2 flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <span className="text-gray-700">3+ Stars (1,200)</span>
              </div>
            </label>
          </div>
        </div>

        <div id="availability-filter" className="border-t border-gray-200 pt-6">
          <h4 className="font-semibold text-gray-800 mb-3">Availability</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">Available Today</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">Available This Week</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">Weekend Available</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">Evening Hours</span>
            </label>
          </div>
        </div>

        <div id="distance-filter" className="border-t border-gray-200 pt-6">
          <h4 className="font-semibold text-gray-800 mb-3">Distance</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="distance"
                className="text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">Within 5 miles</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="distance"
                className="text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">Within 10 miles</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="distance"
                className="text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">Within 25 miles</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="distance"
                className="text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">Any distance</span>
            </label>
          </div>
        </div>

        <div id="services-filter" className="border-t border-gray-200 pt-6">
          <h4 className="font-semibold text-gray-800 mb-3">Special Services</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">Home Visits</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">Virtual Consultations</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">Group Sessions</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
              />
              <span className="ml-2 text-gray-700">Emergency Services</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterElements;
