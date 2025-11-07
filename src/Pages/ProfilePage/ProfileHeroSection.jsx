import AppButton from "../../Components/AppButton";
import AppStarRatings from "../../Components/AppStarRatings";
import AppBookingForm from "../../Components/BookingForm";
import FormHeader from "../../Components/BookingForm/FormHeader";
import { useModal } from "../../Context/ModalContext";

const ProfileHeroSection = ({ professionalData }) => {
  const {
    name,
    profession,
    location,
    rating,
    reviews,
    avatar,
    online,
    price,
    skills,
  } = professionalData;

  const { openModal } = useModal();
  return (
    <section id="professional-hero" className="bg-white py-12 px-5">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-purple-50 to-white rounded-2xl border border-gray-200 p-8 shadow-lg">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src={avatar}
                  alt={name}
                  className="w-48 h-48 rounded-2xl object-cover border-4 border-white shadow-xl"
                />
                {online ? (
                  <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <i className="fa-solid fa-circle text-xs mr-2"></i>
                    Available Today
                  </div>
                ) : (
                  <div className="absolute -bottom-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    Not Available Today
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-black mb-2">{name}</h1>
                  <p className="text-xl text-gray-600 mb-4 font-light">
                    {profession}
                  </p>
                  <div className="flex items-center space-x-6 mb-4">
                    <div className="flex items-center">
                      <AppStarRatings rating={rating} />
                      <span className=" text-black font-light">{rating}</span>
                      <span className="text-gray-500 ml-1 font-light">
                        ({reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fa-solid fa-map-marker-alt mr-2"></i>
                      <span className="font-light">{location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fa-solid fa-clock mr-2"></i>
                      <span className="font-light">15+ years experience</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-primary mb-2">
                    ${price}
                  </div>
                  <div className="text-gray-500">per session</div>
                  <div className="mt-4 space-x-2">
                    <button className="bg-white border border-gray-300 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <i className="fa-solid fa-heart text-gray-400"></i>
                    </button>
                    <button className="bg-white border border-gray-300 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <i className="fa-solid fa-share text-gray-400"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {skills.map((skill, index) => {
                  if (index < 3)
                    return (
                      <span
                        className="bg-purple-100 text-purple-primary text-xs px-2 py-1 rounded-full"
                        key={index}
                      >
                        {skill.name}
                      </span>
                    );

                  return null;
                })}

                <span className="bg-purple-100 text-purple-primary text-xs px-2 py-1 rounded-full">
                  +{skills.length - 1} more
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <AppButton
                  label="Book Appointment"
                  icon={<i className="fa-solid fa-calendar-plus mr-2"></i>}
                  onClick={() => {
                    openModal(<AppBookingForm />, {
                      title: <FormHeader />,
                      professionalId: professionalData.id,
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeroSection;
