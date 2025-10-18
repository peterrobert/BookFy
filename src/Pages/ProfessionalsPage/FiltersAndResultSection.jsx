// ---- ASIDE: filters section ----- //
const FiltersSection = () => {
  return (
    <aside id="filters-sidebar" class="lg:w-1/4">
      <div class="bg-white rounded-xl border border-black shadow-lg p-6 sticky top-24">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-xl font-bold text-black">Filters</h3>
          <button class="text-purple-primary font-medium hover:text-purple-dark">
            Clear All
          </button>
        </div>

        <div class="space-y-6">
          <div id="category-filter">
            <h4 class="font-semibold text-gray-800 mb-3">Category</h4>
            <div class="space-y-2">
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">Healthcare (1,250)</span>
              </label>
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">Beauty & Spa (890)</span>
              </label>
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">Fitness (670)</span>
              </label>
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">Consulting (540)</span>
              </label>
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">Education (780)</span>
              </label>
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">Home Services (920)</span>
              </label>
            </div>
          </div>

          <div id="price-filter" class="border-t border-gray-200 pt-6">
            <h4 class="font-semibold text-gray-800 mb-3">Price Range</h4>
            <div class="space-y-2">
              <label class="flex items-center">
                <input
                  type="radio"
                  name="price"
                  class="text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">Under $50</span>
              </label>
              <label class="flex items-center">
                <input
                  type="radio"
                  name="price"
                  class="text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">$50 - $100</span>
              </label>
              <label class="flex items-center">
                <input
                  type="radio"
                  name="price"
                  class="text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">$100 - $200</span>
              </label>
              <label class="flex items-center">
                <input
                  type="radio"
                  name="price"
                  class="text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">$200+</span>
              </label>
            </div>
          </div>

          <div id="rating-filter" class="border-t border-gray-200 pt-6">
            <h4 class="font-semibold text-gray-800 mb-3">Rating</h4>
            <div class="space-y-2">
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
                />
                <div class="ml-2 flex items-center">
                  <div class="flex text-yellow-400 mr-2">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <span class="text-gray-700">5 Stars (420)</span>
                </div>
              </label>
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
                />
                <div class="ml-2 flex items-center">
                  <div class="flex text-yellow-400 mr-2">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                  <span class="text-gray-700">4+ Stars (890)</span>
                </div>
              </label>
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
                />
                <div class="ml-2 flex items-center">
                  <div class="flex text-yellow-400 mr-2">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                  <span class="text-gray-700">3+ Stars (1,200)</span>
                </div>
              </label>
            </div>
          </div>

          <div id="availability-filter" class="border-t border-gray-200 pt-6">
            <h4 class="font-semibold text-gray-800 mb-3">Availability</h4>
            <div class="space-y-2">
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">Available Today</span>
              </label>
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">Available This Week</span>
              </label>
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">Weekend Available</span>
              </label>
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">Evening Hours</span>
              </label>
            </div>
          </div>

          <div id="distance-filter" class="border-t border-gray-200 pt-6">
            <h4 class="font-semibold text-gray-800 mb-3">Distance</h4>
            <div class="space-y-2">
              <label class="flex items-center">
                <input
                  type="radio"
                  name="distance"
                  class="text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">Within 5 miles</span>
              </label>
              <label class="flex items-center">
                <input
                  type="radio"
                  name="distance"
                  class="text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">Within 10 miles</span>
              </label>
              <label class="flex items-center">
                <input
                  type="radio"
                  name="distance"
                  class="text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">Within 25 miles</span>
              </label>
              <label class="flex items-center">
                <input
                  type="radio"
                  name="distance"
                  class="text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">Any distance</span>
              </label>
            </div>
          </div>

          <div id="services-filter" class="border-t border-gray-200 pt-6">
            <h4 class="font-semibold text-gray-800 mb-3">Special Services</h4>
            <div class="space-y-2">
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">Home Visits</span>
              </label>
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">Virtual Consultations</span>
              </label>
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">Group Sessions</span>
              </label>
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="rounded border-gray-300 text-purple-primary focus:ring-purple-primary"
                />
                <span class="ml-2 text-gray-700">Emergency Services</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
// ---- ASIDE: results section ----- //

// --- PROFESSIONALS DISPLAY SECTION ---- //
const ProfessionalsDisplaySection = () => {};
// --- PROFESSIONALS DISPLAY SECTION ---- //

const FiltersAndResultSection = () => {
  return (
    <section id="filters-and-results" class="py-8 px-5 bg-gray-50">
      <div class="container mx-auto">
        <div class="flex flex-col lg:flex-row gap-8">
          <FiltersAndResultSection />
        </div>
      </div>
    </section>
  );
};

export default FiltersAndResultSection;
