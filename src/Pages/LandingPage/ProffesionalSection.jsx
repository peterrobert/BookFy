import { useProfessionals } from "../../hooks/queries";
// --- LANDING PAGE PROFESSIONAL SECTION COMPONENT --- //
import AppButton from "../../components/AppButton";
import AppSpinner from "../../components/AppSpinner";
import ProffesionalCard from "../../components/ProffesionalCard";

const ProffesionalSection = () => {
  const { data, isLoading, isError } = useProfessionals();

  const Professionals = data ? data.slice(0, 4) : [];

  const displayProfessionals = () => {
    if (isLoading) return <AppSpinner />;
    if (isError)
      return (
        <p className="text-red-500">
          Sorry, there was an error loading professionals.
        </p>
      );
    return Professionals.map((professional) => (
      <ProffesionalCard key={professional.id} professional={professional} />
    ));
  };

  return (
    <section id="featured-professionals" className="py-20 px-5 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-black mb-4">
              Featured Professionals
            </h2>
            <p className="text-xl text-gray-600">
              Meet some of our top-rated professionals ready to serve you.
            </p>
          </div>
          <AppButton label="View All Professionals" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayProfessionals()}
        </div>
      </div>
    </section>
  );
};

export default ProffesionalSection;
