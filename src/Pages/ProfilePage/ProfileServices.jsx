import { useParams } from "react-router-dom";
import { useProffessDetailsCache } from "../../hooks/cache";
import { useModal } from "../../Context/ModalContext";

import AppButton from "../../Components/AppButton";
import AppBookingForm from "../../Components/BookingForm";
import FormHeader from "../../Components/BookingForm/FormHeader";

const ProfileServices = () => {
  const { id } = useParams();
  const { isOpen } = useModal();
  const data = useProffessDetailsCache(id);

  const displayServices = () => {
    if (!data || !data?.skills || data?.skills.length === 0) {
      return <p className="text-gray-600">No services available.</p>;
    }
    return data?.skills.map((service, index) => {
      return (
        <div
          className="border border-gray-200 rounded-lg p-6 hover:border-purple-primary transition-colors"
          key={index}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-semibold text-black mb-2">{service.name}</h3>
              <p className="text-sm text-gray-600 mb-3 font-light">
                {service.description}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <i className="fa-solid fa-clock mr-1"></i>
                <span> {service.duration}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-purple-primary">
                ${data?.price}
              </div>
            </div>
          </div>
          <AppButton
            label="Book Now"
            onClick={() =>
              isOpen(<AppBookingForm />, {
                title: <FormHeader />,
                professionalId: id,
              })
            }
          />
        </div>
      );
    });
  };

  return (
    <div
      id="services-section"
      className="bg-white rounded-xl border border-gray-200 shadow-lg p-8"
    >
      <h2 className="text-2xl font-bold text-black mb-6">
        Services & Treatments
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayServices()}
      </div>
    </div>
  );
};

export default ProfileServices;
