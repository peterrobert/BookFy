import { useCategories } from "../../hooks/queries";
import AppCategories from "../../components/AppCategories";
import AppSpinner from "../../components/AppSpinner";

// --- LANDING PAGE CATEGORIES SECTION COMPONENT --- //
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
          {displayCategories()}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
