import FormAppointmentType from "./FormAppointmentType";
import FormCalender from "./FormCalender";
import FormServiceSelection from "./FormServiceSelection";

const FormBody = ({ professionalData }) => {
  const { skills, price } = professionalData;

  return (
    <div id="booking-form" className="lg:col-span-2">
      <div className="space-y-8">
        <FormServiceSelection skills={skills} price={price} />
        <FormAppointmentType />
        <FormCalender />

        <div
          id="personal-details"
          className="bg-white border border-gray-200 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-black mb-6">
            Personal Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                First Name *
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Last Name *
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                placeholder="Enter your last name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Email Address *
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-black mb-2">
                Date of Birth *
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div
          id="medical-information"
          className="bg-white border border-gray-200 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-black mb-6">
            Medical Information
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Chief Concern
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none h-24"
                placeholder="Please describe your main concern or reason for this appointment"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Current Medications
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none h-20"
                  placeholder="List any current medications"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Known Allergies
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none h-20"
                  placeholder="List any known allergies"
                ></textarea>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-black mb-3">
                Previous Skin Conditions
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="text-purple-primary" />
                  <span className="text-sm">Acne</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="text-purple-primary" />
                  <span className="text-sm">Eczema</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="text-purple-primary" />
                  <span className="text-sm">Psoriasis</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="text-purple-primary" />
                  <span className="text-sm">Rosacea</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="text-purple-primary" />
                  <span className="text-sm">Skin Cancer</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="text-purple-primary" />
                  <span className="text-sm">Other</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div
          id="insurance-information"
          className="bg-white border border-gray-200 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-black mb-6">
            Insurance Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Insurance Provider
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none">
                <option>Select your insurance provider</option>
                <option>Blue Cross Blue Shield</option>
                <option>Aetna</option>
                <option>Cigna</option>
                <option>UnitedHealthcare</option>
                <option>Humana</option>
                <option>Kaiser Permanente</option>
                <option>Other</option>
                <option>No Insurance</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Policy Number
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                placeholder="Enter your policy number"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Group Number
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                placeholder="Enter your group number"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Subscriber ID
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                placeholder="Enter your subscriber ID"
              />
            </div>
          </div>
        </div>

        <div
          id="preferences"
          className="bg-white border border-gray-200 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-black mb-6">
            Appointment Preferences
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-black mb-3">
                Communication Preferences
              </label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="text-purple-primary"
                    checked
                  />
                  <span className="text-sm">Email appointment reminders</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="text-purple-primary"
                    checked
                  />
                  <span className="text-sm">SMS appointment reminders</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="text-purple-primary" />
                  <span className="text-sm">Marketing communications</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Special Accommodations
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none h-20"
                placeholder="Please describe any special accommodations needed"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Additional Notes
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none h-20"
                placeholder="Any additional information you'd like to share"
              ></textarea>
            </div>
          </div>
        </div>

        <div
          id="emergency-contact"
          className="bg-white border border-gray-200 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-black mb-6">
            Emergency Contact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Contact Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                placeholder="Emergency contact name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Relationship
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none">
                <option>Select relationship</option>
                <option>Spouse</option>
                <option>Parent</option>
                <option>Child</option>
                <option>Sibling</option>
                <option>Friend</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                placeholder="Emergency contact phone"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Email (Optional)
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                placeholder="Emergency contact email"
              />
            </div>
          </div>
        </div>

        <div
          id="payment-section"
          className="bg-white border border-gray-200 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-black mb-6">
            Payment Information
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-black mb-3">
                Payment Method
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-purple-primary bg-purple-50 rounded-lg p-4 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="payment-method"
                      id="credit-card"
                      className="text-purple-primary"
                      checked
                    />
                    <div className="flex items-center space-x-2">
                      <i className="fa-solid fa-credit-card text-purple-primary"></i>
                      <span className="font-semibold">Credit Card</span>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-purple-primary hover:bg-purple-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="payment-method"
                      id="debit-card"
                      className="text-purple-primary"
                    />
                    <div className="flex items-center space-x-2">
                      <i className="fa-solid fa-money-check text-purple-primary"></i>
                      <span className="font-semibold">Debit Card</span>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-purple-primary hover:bg-purple-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="payment-method"
                      id="insurance"
                      className="text-purple-primary"
                    />
                    <div className="flex items-center space-x-2">
                      <i className="fa-solid fa-shield-halved text-purple-primary"></i>
                      <span className="font-semibold">Insurance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="card-details"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-black mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  CVV
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                  placeholder="123"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-black mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                  placeholder="Name as it appears on card"
                />
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-black mb-3">Payment Summary</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">
                    General Consultation (45 min)
                  </span>
                  <span className="font-semibold">$120.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Booking Fee</span>
                  <span className="font-semibold">$5.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Tax</span>
                  <span className="font-semibold">$10.00</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between items-center text-lg">
                  <span className="font-bold text-black">Total</span>
                  <span className="font-bold text-purple-primary">$135.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="terms-and-conditions"
          className="bg-white border border-gray-200 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-black mb-6">
            Terms & Conditions
          </h3>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 max-h-40 overflow-y-auto">
              <p className="text-sm text-gray-700 leading-relaxed">
                By booking this appointment, you agree to the following terms
                and conditions:
                <br />
                1. <strong>Cancellation Policy:</strong> Appointments must be
                cancelled at least 24 hours in advance to avoid a cancellation
                fee.
                <br />
                2. <strong>No-Show Policy:</strong> Failure to attend your
                scheduled appointment may result in a no-show fee equal to 50%
                of the service cost.
                <br />
                3. <strong>Rescheduling:</strong> Appointments can be
                rescheduled up to 24 hours before the scheduled time subject to
                availability.
                <br />
                4. <strong>Privacy Policy:</strong> Your personal and medical
                information will be kept confidential and used only for
                providing healthcare services.
                <br />
                5. <strong>Payment Terms:</strong> Payment is due at the time of
                service. We accept cash, credit cards, and most insurance plans.
              </p>
            </div>

            <div className="space-y-3">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  className="text-purple-primary mt-1"
                  required
                />
                <span className="text-sm text-gray-700">
                  I have read and agree to the terms and conditions
                </span>
              </label>
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  className="text-purple-primary mt-1"
                  required
                />
                <span className="text-sm text-gray-700">
                  I consent to the collection and use of my personal information
                  for healthcare purposes
                </span>
              </label>
              <label className="flex items-start space-x-3">
                <span className="text-sm text-gray-700">
                  I would like to receive promotional emails about new services
                  and offers
                </span>
              </label>
            </div>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default FormBody;
