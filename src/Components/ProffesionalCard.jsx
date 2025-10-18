import AppButton from "./AppButton";

// --- PROFESSIONAL CARD COMPONENT --- //
const ProffesionalCard = ({ professional }) => {
  const {
    name,
    online,
    location,
    distance,
    availability,
    profession,
    avatar,
    price,
    rating,
    reviews,
    skills,
    verified,
  } = professional || {};

  console.log(professional);

  return (
    <>
      <div className="bg-white rounded-xl border border-black shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
        <div className="relative">
          <img
            src={avatar}
            alt="Emily Rodriguez"
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {verified && (
            <div className="absolute top-4 left-4 bg-purple-primary text-white px-2 py-1 rounded-full text-xs font-semibold">
              VERIFIED
            </div>
          )}

          <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full border border-black">
            <div className="flex items-center">
              <i className="fa-solid fa-star text-yellow-400 text-sm mr-1"></i>
              <span className="text-sm font-semibold">{rating}</span>
            </div>
          </div>
          <div className="absolute bottom-4 right-4">
            <button className="w-10 h-10 bg-white rounded-full border border-black flex items-center justify-center hover:bg-purple-primary hover:text-white transition-colors">
              <i className="fa-solid fa-heart text-sm"></i>
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-black">{name}</h3>
            {online ? (
              <span className="text-green-600 text-xs font-semibold bg-green-100 px-2 py-1 rounded-full">
                ONLINE
              </span>
            ) : (
              <span className="text-red-600 text-xs font-semibold bg-red-100 px-2 py-1 rounded-full">
                OFFLINE
              </span>
            )}
          </div>
          <p className="text-purple-primary font-semibold mb-2">{profession}</p>
          <div className="flex items-center text-gray-600 text-sm mb-3">
            <i className="fa-solid fa-location-dot mr-1"></i>
            <span>
              {location} • {distance}
            </span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-purple-primary">
                ${price}
              </span>
              <span className="text-gray-500 text-sm ml-1">/session</span>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Next available:</p>
              <p className="text-sm font-semibold text-black">{availability}</p>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <i className="fa-solid fa-users mr-1"></i>
              <span>{reviews} reviews</span>
            </div>
            <div className="flex space-x-1">
              <span className="bg-purple-100 text-purple-primary text-xs px-2 py-1 rounded-full">
                {skills[0]}
              </span>
              <span className="bg-purple-100 text-purple-primary text-xs px-2 py-1 rounded-full">
                +{skills.length - 1} more
              </span>
            </div>
          </div>
          <AppButton label="Book Appointment" />
        </div>
      </div>
    </>
  );
};

export default ProffesionalCard;
