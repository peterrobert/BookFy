// --- REVIEW CARD COMPONENT --- //
import AppStarRatings from "../Components/AppStarRatings";

const AppReviewCard = ({ testimonial }) => {
  const { avatar, comment, name, rating, role } = testimonial || {};
  return (
    <div class="bg-white p-8 rounded-xl border border-black shadow-lg">
      <div class="flex items-center mb-4">
        <div class="flex text-yellow-400 mr-2">
          <AppStarRatings rating={rating} />
        </div>
        <span class="text-sm text-gray-500">{rating}</span>
      </div>
      <p class="text-gray-600 mb-6 leading-relaxed">{comment}</p>
      <div class="flex items-center">
        <img src={avatar} alt={name} class="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 class="font-semibold text-black">{name}</h4>
          <p class="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default AppReviewCard;
