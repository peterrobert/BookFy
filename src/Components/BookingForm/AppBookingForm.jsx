import { useProfessionalDetails } from "../../hooks";
import AppSpinner from "../AppSpinner";
import FormBody from "./FormBody";
import FormHeader from "./FormHeader";
import ProffessionalInfo from "./ProffessionalInfo";

const AppBookingForm = () => {
  const { data, isLoading, error, isError } = useProfessionalDetails(1);

  const displayFormContent = () => {
    if (isLoading) return <AppSpinner />;
    if (isError) return <AppError message={error.message} />;
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ProffessionalInfo professionalData={data} />
        <FormBody professionalData={data} />
      </div>
    );
  };

  return (
    <>
      <div
        id="booking-modal-overlay"
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      >
        <div
          id="booking-modal"
          className="bg-white rounded-2xl border border-black shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto"
        >
          <FormHeader />
          <div id="booking-content" className="p-6">
            {displayFormContent()}
          </div>
        </div>
      </div>

      <div id="confirmation-section" className="hidden">
        <div className="bg-white rounded-2xl border border-black shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
          <div className="text-center p-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-check-circle text-green-500 text-3xl"></i>
            </div>
            <h2 className="text-3xl font-bold text-black mb-4">
              Appointment Confirmed!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Your appointment has been successfully booked.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
              <h3 className="text-xl font-bold text-black mb-4">
                Appointment Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <i className="fa-solid fa-user-md text-purple-primary"></i>
                    <div>
                      <p className="font-semibold text-black">
                        Dr. Sarah Johnson
                      </p>
                      <p className="text-sm text-gray-600">Dermatologist</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 mb-3">
                    <i className="fa-solid fa-calendar text-purple-primary"></i>
                    <div>
                      <p className="font-semibold text-black">
                        December 18, 2024
                      </p>
                      <p className="text-sm text-gray-600">2:00 PM - 2:45 PM</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <i className="fa-solid fa-stethoscope text-purple-primary"></i>
                    <div>
                      <p className="font-semibold text-black">
                        General Consultation
                      </p>
                      <p className="text-sm text-gray-600">45 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 mb-3">
                    <i className="fa-solid fa-map-marker-alt text-purple-primary"></i>
                    <div>
                      <p className="font-semibold text-black">
                        Downtown Medical Center
                      </p>
                      <p className="text-sm text-gray-600">In-person visit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-purple-primary text-white px-8 py-3 rounded-lg border border-black font-semibold hover:bg-purple-dark transition-colors">
                <i className="fa-solid fa-calendar-plus mr-2"></i>
                Add to Calendar
              </button>
              <button className="bg-white text-purple-primary px-8 py-3 rounded-lg border border-black font-semibold hover:bg-purple-50 transition-colors">
                <i className="fa-solid fa-download mr-2"></i>
                Download Receipt
              </button>
              <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg border border-gray-300 font-semibold hover:bg-gray-200 transition-colors">
                <i className="fa-solid fa-home mr-2"></i>
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBookingForm;
