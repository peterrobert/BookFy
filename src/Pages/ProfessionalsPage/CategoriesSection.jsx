import AppCategories from "../../Components/AppCategories";
import AppSpinner from "../../Components/AppSpinner";
import { useCategories } from "../../hooks";

const CategoriesSection = () => {
  const { data, isLoading, error } = useCategories();
  const categories = data ? data.slice(0, 6) : [];

  const displayCategories = () => {
    if (isLoading) return <AppSpinner />;
    if (error)
      return (
        <p className="text-red-500">
          Sorry, there was an error loading categories.
        </p>
      );
    return categories.map((category) => (
      <AppCategories key={category.id} category={category} />
    ));
  };
  return (
    <>
      <section id="featured-categories" className="py-20 px-5 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              Browse by Popular Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Explore our most sought-after professional services across various
              industries.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {displayCategories()}
          </div>
          <div className="text-center">
            <button className="bg-purple-primary text-white px-8 py-3 rounded-lg border border-black font-semibold hover:bg-purple-dark transition-colors">
              View All Categories
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesSection;
