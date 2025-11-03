const AppStarRatings = ({ rating }) => {
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

export default AppStarRatings;
