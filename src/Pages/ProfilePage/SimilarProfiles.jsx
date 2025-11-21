import { useNavigate } from "react-router-dom";
import { useProfessionals } from "../../hooks/queries";
import AppButton from "../../components/AppButton";
import AppSpinner from "../../components/AppSpinner";
import AppError from "../../components/AppError";
import ProffesionalCard from "../../components/ProffesionalCard";

const SimilarProfiles = () => {
  const { data, isLoading, isError } = useProfessionals();
  const navigate = useNavigate();

  const Professionals = data ? data.slice(0, 4) : [];
  const displayProfessionals = () => {
    if (isLoading) return <AppSpinner />;
    if (isError)
      return (
        <AppError
          message={"Sorry, there was an error loading professionals."}
        />
      );
    return Professionals.map((professional) => (
      <ProffesionalCard key={professional.id} professional={professional} />
    ));
  };

  return (
    <section id="similar-professionals" className="py-16 px-5 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-black">
            Similar Professionals
          </h2>
          <AppButton
            className="text-purple-primary font-medium"
            label={"View All Proffesionals"}
            variant="outline"
            onClick={() => navigate("/professionals")}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayProfessionals()}
        </div>
      </div>
    </section>
  );
};

export default SimilarProfiles;
