import AppStarRatings from "../AppStarRatings";

const ProffessionalInfo = ({ professionalData }) => {
  const displaySkills = () => {
    return professionalData?.skills.map((skill) => {
      return (
        <span
          className="bg-purple-100 text-purple-primary px-3 py-1 rounded-full text-sm font-light"
          key={skill.name}
        >
          {skill.name}
        </span>
      );
    });
  };

  return (
    <div id="professional-info" className="lg:col-span-1">
      <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 sticky top-6">
        <div className="text-center mb-6">
          <img
            src={professionalData?.avatar}
            alt={professionalData?.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-purple-primary"
          />
          <h3 className="text-xl font-bold text-black mb-2">
            {professionalData?.name}
          </h3>
          <p className="text-gray-600 mb-2 font-light">
            {professionalData?.profession}
          </p>
          <div className="flex items-center justify-center space-x-2">
            <AppStarRatings rating={professionalData?.rating} />
            <span className="text-sm text-gray-600 font-light">
              {professionalData?.rating} Star Ratings
            </span>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-3">
            <i className="fa-solid fa-map-marker-alt text-purple-primary"></i>
            <span className="text-sm text-gray-700 font-light">
              {professionalData?.location}
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className="fa-solid fa-phone text-purple-primary"></i>
            <span className="text-sm text-gray-700 font-light">
              (555) 123-4567
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className="fa-solid fa-graduation-cap text-purple-primary"></i>
            <span className="text-sm text-gray-700 font-light">
              15+ years experience
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className="fa-solid fa-certificate text-purple-primary"></i>
            <span className="text-sm text-gray-700 font-light">
              Board Certified
            </span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h4 className="font-semibold text-black mb-3">Specializations</h4>
          <div className="flex flex-wrap gap-2">{displaySkills()}</div>
        </div>
      </div>
    </div>
  );
};

export default ProffessionalInfo;
