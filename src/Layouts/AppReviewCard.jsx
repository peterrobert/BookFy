// --- REVIEW CARD COMPONENT --- //
const AppReviewCard = ({ testimonial }) => {
  const { avatar, comment, name, rating, role } = testimonial || {};

  const StarRating = ({ rating }) => {
    const rounded = Math.round(rating * 2) / 2;
    return (
      <div className="flex text-yellow-400 mr-2">
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          if (rounded >= starValue) {
            return <i key={index} className="fa-solid fa-star"></i>;
          } else if (rounded + 0.5 === starValue) {
            return <i key={index} className="fa-solid fa-star-half-stroke"></i>;
          } else {
            return <i key={index} className="fa-regular fa-star"></i>;
          }
        })}
      </div>
    );
  };

  return (
    <div class="bg-white p-8 rounded-xl border border-black shadow-lg">
      <div class="flex items-center mb-4">
        <div class="flex text-yellow-400 mr-2">
          <StarRating rating={rating} />
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
