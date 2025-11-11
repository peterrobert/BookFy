import { useState } from "react";
import { useProfessionals } from "../../hooks/queries";

import ProfessionalCard from "../../Components/ProffesionalCard";
import AppSpinner from "../../Components/AppSpinner";
import FilterElements from "./Filters/FilterElements";

// --- PROFESSIONALS DISPLAY SECTION ---- //
const ProfessionalsDisplaySection = () => {
  const { data, isLoading, isError } = useProfessionals();
  const [currentPage, setCurrentPage] = useState(1);

  // --- PAGINATION ----
  const itemsPerPage = 6;
  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data?.slice(startIndex, startIndex + itemsPerPage);

  const displayProffessionals = () => {
    if (isLoading) return <AppSpinner />;
    if (isError) return <div>Error loading professionals.</div>;
    return currentItems.map((professional) => (
      <ProfessionalCard key={professional.id} professional={professional} />
    ));
  };

  const displayPagination = () => {
    return Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i}
        className={`px-3 py-1 border rounded ${
          currentPage === i + 1 ? "bg-purple-primary text-white" : ""
        }`}
        onClick={() => setCurrentPage(i + 1)}
      >
        {i + 1}
      </button>
    ));
  };
  return (
    <main id="professionals-grid" className="lg:w-3/4">
      <div
        id="results-header"
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
      >
        <div>
          <h2 className="text-2xl font-bold text-black mb-2">
            {data?.length} Professionals Found
          </h2>
          <p className="text-gray-600">Showing results for "All Categories"</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span className="text-gray-700 font-medium">Sort by:</span>
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-primary">
            <option>Recommended</option>
            <option>Highest Rated</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Distance</option>
            <option>Newest</option>
          </select>
          <div className="flex border border-gray-300 rounded-lg">
            <button className="p-2 bg-purple-primary text-white rounded-l-lg">
              <i className="fa-solid fa-th-large"></i>
            </button>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-r-lg">
              <i className="fa-solid fa-list"></i>
            </button>
          </div>
        </div>
      </div>

      <div
        id="professionals-cards-grid"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12"
      >
        {displayProffessionals()}
      </div>

      <div
        id="pagination-section"
        className="flex justify-center items-center space-x-2"
      >
        {displayPagination()}
      </div>
    </main>
  );
};

// ---- ASIDE: filters section ----- //
const FiltersSection = () => {
  return (
    <aside id="filters-sidebar" className="lg:w-1/4">
      <div className="bg-white rounded-xl border border-black shadow-lg p-6 sticky top-24">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-black">Filters</h3>
          <button className="text-purple-primary font-medium hover:text-purple-dark">
            Clear All
          </button>
        </div>
        <FilterElements />
      </div>
    </aside>
  );
};
// ---- ASIDE: results section ----- //

const FiltersAndResultSection = () => {
  return (
    <section id="filters-and-results" className="py-8 px-5 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <FiltersSection />
          <ProfessionalsDisplaySection />
        </div>
      </div>
    </section>
  );
};

export default FiltersAndResultSection;
