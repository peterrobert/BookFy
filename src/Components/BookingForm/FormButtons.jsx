const FormButtons = () => {
  return (
    <div
      id="booking-actions"
      className="bg-gray-50 rounded-xl p-6 border border-gray-200"
    >
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-600 mb-1">
            Your appointment is almost ready!
          </p>
          <p className="font-semibold text-black">
            December 18, 2024 at 2:00 PM
          </p>
          <p className="text-sm text-gray-600">
            General Consultation with Dr. Sarah Johnson
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <button className="bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-300 font-semibold hover:bg-gray-50 transition-colors">
            Save as Draft
          </button>
          <button className="bg-purple-primary text-white px-8 py-3 rounded-lg border border-black font-semibold hover:bg-purple-dark transition-colors">
            Book Appointment - $135.00
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormButtons;
