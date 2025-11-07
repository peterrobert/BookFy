import AppButton from "../../Components/AppButton";
import AppBookingForm from "../../Components/BookingForm";
import FormHeader from "../../Components/BookingForm/FormHeader";
import { useModal } from "../../Context/ModalContext";

const ProfileBookingSection = ({ professionalData }) => {
  const { id, price } = professionalData;
  const { openModal } = useModal();
  return (
    <div
      id="booking-widget"
      className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 sticky top-32"
    >
      <div className="text-center mb-6">
        <div className="text-3xl font-bold text-purple-primary mb-2">
          ${price}
        </div>
        <div className="text-gray-600 font-light">
          Starting price per session
        </div>
      </div>
      <AppButton
        onClick={() =>
          openModal(<AppBookingForm />, {
            title: <FormHeader />,
            professionalId: id,
          })
        }
        label="Book Appointment"
        className="w-full bg-purple-primary text-white py-3 rounded-lg font-semibold hover:bg-purple-dark transition-colors mb-4"
      />

      <div className="flex space-x-2">
        <AppButton
          icon={<i className="fa-solid fa-message mr-2"></i>}
          variant="outline"
          label="Message"
        />
        <AppButton
          icon={<i className="fa-solid fa-video mr-2"></i>}
          variant="outline"
          label="Virtual"
        />
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span className="font-light">Response time</span>
          <span className="font-light">Within 2 hours</span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span className="font-light">Cancellation</span>
          <span className="font-light">24 hours notice</span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span className="font-light">Languages</span>
          <span className="font-light">English, Spanish</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileBookingSection;
