import AppButton from "../../../Components/AppButton";
import AppError from "../../../Components/AppError";
import AppSpinner from "../../../Components/AppSpinner";
import AppStarRatings from "../../../Components/AppStarRatings";
import { useProfessionals } from "../../../hooks";

const FavProffesionalCard = ({ data }) => {
  const { avatar, name, rating, profession } = data;

  return (
    <div className="text-center">
      <div className="relative mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-20 h-20 rounded-full mx-auto border-3 border-purple-primary"
        />
        <div className="absolute -top-1 -right-1 bg-purple-primary text-white rounded-full p-1 cursor-pointer">
          <i className="fa-solid fa-heart text-xs"></i>
        </div>
      </div>
      <h4 className="font-semibold text-black mb-1">{name}</h4>
      <p className="text-sm text-gray-600 mb-2">{profession}</p>
      <div className="flex justify-center items-center space-x-1 mb-3">
        <AppStarRatings rating={rating} />
        <span className="text-xs text-gray-500">{rating}</span>
      </div>
      <AppButton
        label="Book Now"
        className="w-full bg-purple-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-dark transition-colors"
      />
    </div>
  );
};

const FavProffesionals = () => {
  const { data, isLoading, isError } = useProfessionals();
  const Professionals = data ? data.slice(0, 4) : [];

  const displayProffesionls = () => {
    if (isLoading) return <AppSpinner />;
    if (isError) return <AppError />;
    return Professionals.map((value) => {
      return <FavProffesionalCard data={value} key={value.id} />;
    });
  };

  return (
    <section id="Professionals" className="mb-8">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-black">
              Your Favorite Professionals
            </h2>
            <button className="text-purple-primary hover:text-purple-dark font-medium">
              Manage Favorites
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayProffesionls()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavProffesionals;
