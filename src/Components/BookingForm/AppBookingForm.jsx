import FormHeader from "./FormHeader";

const AppBookingForm = () => {
  return (
    <>
      <div
        id="booking-modal-overlay"
        class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      >
        <div
          id="booking-modal"
          class="bg-white rounded-2xl border border-black shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto"
        >
          {/* --- Form Header --- */}
          <FormHeader />

          <div id="booking-content" className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div id="professional-info" class="lg:col-span-1">
                <div class="bg-gray-50 rounded-xl border border-gray-200 p-6 sticky top-6">
                  <div class="text-center mb-6">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                      alt="Dr. Sarah Johnson"
                      class="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-purple-primary"
                    />
                    <h3 class="text-xl font-bold text-black mb-2">
                      Dr. Sarah Johnson
                    </h3>
                    <p class="text-gray-600 mb-2">Dermatologist</p>
                    <div class="flex items-center justify-center space-x-2">
                      <div class="flex text-yellow-400">
                        <i class="fa-solid fa-star text-sm"></i>
                        <i class="fa-solid fa-star text-sm"></i>
                        <i class="fa-solid fa-star text-sm"></i>
                        <i class="fa-solid fa-star text-sm"></i>
                        <i class="fa-solid fa-star text-sm"></i>
                      </div>
                      <span class="text-sm text-gray-600">
                        4.9 (127 reviews)
                      </span>
                    </div>
                  </div>

                  <div class="space-y-4 mb-6">
                    <div class="flex items-center space-x-3">
                      <i class="fa-solid fa-map-marker-alt text-purple-primary"></i>
                      <span class="text-sm text-gray-700">
                        Downtown Medical Center
                      </span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <i class="fa-solid fa-phone text-purple-primary"></i>
                      <span class="text-sm text-gray-700">(555) 123-4567</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <i class="fa-solid fa-graduation-cap text-purple-primary"></i>
                      <span class="text-sm text-gray-700">
                        15+ years experience
                      </span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <i class="fa-solid fa-certificate text-purple-primary"></i>
                      <span class="text-sm text-gray-700">Board Certified</span>
                    </div>
                  </div>

                  <div class="border-t border-gray-200 pt-4">
                    <h4 class="font-semibold text-black mb-3">
                      Specializations
                    </h4>
                    <div class="flex flex-wrap gap-2">
                      <span class="bg-purple-100 text-purple-primary px-3 py-1 rounded-full text-sm">
                        Acne Treatment
                      </span>
                      <span class="bg-purple-100 text-purple-primary px-3 py-1 rounded-full text-sm">
                        Skin Cancer
                      </span>
                      <span class="bg-purple-100 text-purple-primary px-3 py-1 rounded-full text-sm">
                        Cosmetic Dermatology
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div id="booking-form" class="lg:col-span-2">
                <div class="space-y-8">
                  <div
                    id="service-selection"
                    class="bg-white border border-gray-200 rounded-xl p-6"
                  >
                    <h3 class="text-xl font-bold text-black mb-6">
                      Select Service
                    </h3>
                    <div class="space-y-4">
                      <div class="border border-purple-primary bg-purple-50 rounded-lg p-4 cursor-pointer">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center space-x-4">
                            <input
                              type="radio"
                              name="service"
                              id="consultation"
                              class="text-purple-primary"
                              checked
                            />
                            <div>
                              <h4 class="font-semibold text-black">
                                General Consultation
                              </h4>
                              <p class="text-sm text-gray-600">
                                Comprehensive skin examination and diagnosis
                              </p>
                              <p class="text-xs text-gray-500 mt-1">
                                Duration: 45 minutes
                              </p>
                            </div>
                          </div>
                          <div class="text-right">
                            <div class="text-lg font-bold text-purple-primary">
                              $120
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-purple-primary hover:bg-purple-50 transition-colors">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center space-x-4">
                            <input
                              type="radio"
                              name="service"
                              id="acne-treatment"
                              class="text-purple-primary"
                            />
                            <div>
                              <h4 class="font-semibold text-black">
                                Acne Treatment
                              </h4>
                              <p class="text-sm text-gray-600">
                                Specialized acne evaluation and treatment plan
                              </p>
                              <p class="text-xs text-gray-500 mt-1">
                                Duration: 30 minutes
                              </p>
                            </div>
                          </div>
                          <div class="text-right">
                            <div class="text-lg font-bold text-purple-primary">
                              $95
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-purple-primary hover:bg-purple-50 transition-colors">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center space-x-4">
                            <input
                              type="radio"
                              name="service"
                              id="skin-screening"
                              class="text-purple-primary"
                            />
                            <div>
                              <h4 class="font-semibold text-black">
                                Skin Cancer Screening
                              </h4>
                              <p class="text-sm text-gray-600">
                                Full body mole and skin examination
                              </p>
                              <p class="text-xs text-gray-500 mt-1">
                                Duration: 60 minutes
                              </p>
                            </div>
                          </div>
                          <div class="text-right">
                            <div class="text-lg font-bold text-purple-primary">
                              $150
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-purple-primary hover:bg-purple-50 transition-colors">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center space-x-4">
                            <input
                              type="radio"
                              name="service"
                              id="cosmetic-consult"
                              class="text-purple-primary"
                            />
                            <div>
                              <h4 class="font-semibold text-black">
                                Cosmetic Consultation
                              </h4>
                              <p class="text-sm text-gray-600">
                                Anti-aging and cosmetic treatment options
                              </p>
                              <p class="text-xs text-gray-500 mt-1">
                                Duration: 45 minutes
                              </p>
                            </div>
                          </div>
                          <div class="text-right">
                            <div class="text-lg font-bold text-purple-primary">
                              $135
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="appointment-type"
                    class="bg-white border border-gray-200 rounded-xl p-6"
                  >
                    <h3 class="text-xl font-bold text-black mb-6">
                      Appointment Type
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div class="border border-purple-primary bg-purple-50 rounded-lg p-4 cursor-pointer">
                        <div class="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="appointment-type"
                            id="in-person"
                            class="text-purple-primary"
                            checked
                          />
                          <div>
                            <h4 class="font-semibold text-black">
                              In-Person Visit
                            </h4>
                            <p class="text-sm text-gray-600">
                              Visit the clinic for hands-on examination
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-purple-primary hover:bg-purple-50 transition-colors">
                        <div class="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="appointment-type"
                            id="virtual"
                            class="text-purple-primary"
                          />
                          <div>
                            <h4 class="font-semibold text-black">
                              Virtual Consultation
                            </h4>
                            <p class="text-sm text-gray-600">
                              Video call consultation from home
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="calendar-section"
                    class="bg-white border border-gray-200 rounded-xl p-6"
                  >
                    <h3 class="text-xl font-bold text-black mb-6">
                      Select Date & Time
                    </h3>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div id="calendar-widget">
                        <div class="bg-gray-50 rounded-lg p-4">
                          <div class="flex items-center justify-between mb-4">
                            <button class="text-gray-600 hover:text-black">
                              <i class="fa-solid fa-chevron-left"></i>
                            </button>
                            <h4 class="font-semibold text-black">
                              December 2024
                            </h4>
                            <button class="text-gray-600 hover:text-black">
                              <i class="fa-solid fa-chevron-right"></i>
                            </button>
                          </div>

                          <div class="grid grid-cols-7 gap-1 mb-2">
                            <div class="text-center text-xs font-semibold text-gray-600 py-2">
                              Sun
                            </div>
                            <div class="text-center text-xs font-semibold text-gray-600 py-2">
                              Mon
                            </div>
                            <div class="text-center text-xs font-semibold text-gray-600 py-2">
                              Tue
                            </div>
                            <div class="text-center text-xs font-semibold text-gray-600 py-2">
                              Wed
                            </div>
                            <div class="text-center text-xs font-semibold text-gray-600 py-2">
                              Thu
                            </div>
                            <div class="text-center text-xs font-semibold text-gray-600 py-2">
                              Fri
                            </div>
                            <div class="text-center text-xs font-semibold text-gray-600 py-2">
                              Sat
                            </div>
                          </div>

                          <div class="grid grid-cols-7 gap-1">
                            <div class="text-center py-3 text-gray-400 text-sm">
                              1
                            </div>
                            <div class="text-center py-3 text-gray-400 text-sm">
                              2
                            </div>
                            <div class="text-center py-3 text-gray-400 text-sm">
                              3
                            </div>
                            <div class="text-center py-3 text-gray-400 text-sm">
                              4
                            </div>
                            <div class="text-center py-3 text-gray-400 text-sm">
                              5
                            </div>
                            <div class="text-center py-3 text-gray-400 text-sm">
                              6
                            </div>
                            <div class="text-center py-3 text-gray-400 text-sm">
                              7
                            </div>
                            <div class="text-center py-3 text-gray-400 text-sm">
                              8
                            </div>
                            <div class="text-center py-3 text-gray-400 text-sm">
                              9
                            </div>
                            <div class="text-center py-3 text-gray-400 text-sm">
                              10
                            </div>
                            <div class="text-center py-3 text-gray-400 text-sm">
                              11
                            </div>
                            <div class="text-center py-3 text-gray-400 text-sm">
                              12
                            </div>
                            <div class="text-center py-3 text-gray-400 text-sm">
                              13
                            </div>
                            <div class="text-center py-3 text-gray-400 text-sm">
                              14
                            </div>
                            <div class="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                              15
                            </div>
                            <div class="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                              16
                            </div>
                            <div class="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                              17
                            </div>
                            <div class="text-center py-3 bg-purple-primary text-white rounded cursor-pointer text-sm">
                              18
                            </div>
                            <div class="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                              19
                            </div>
                            <div class="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                              20
                            </div>
                            <div class="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                              21
                            </div>
                            <div class="text-center py-3 text-gray-400 text-sm">
                              22
                            </div>
                            <div class="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                              23
                            </div>
                            <div class="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                              24
                            </div>
                            <div class="text-center py-3 text-gray-400 text-sm">
                              25
                            </div>
                            <div class="text-center py-3 text-gray-400 text-sm">
                              26
                            </div>
                            <div class="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                              27
                            </div>
                            <div class="text-center py-3 text-gray-400 text-sm">
                              28
                            </div>
                            <div class="text-center py-3 text-gray-400 text-sm">
                              29
                            </div>
                            <div class="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                              30
                            </div>
                            <div class="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                              31
                            </div>
                          </div>
                        </div>
                      </div>

                      <div id="time-slots">
                        <h4 class="font-semibold text-black mb-4">
                          Available Times - December 18
                        </h4>
                        <div class="space-y-3 max-h-80 overflow-y-auto">
                          <h5 class="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                            Morning
                          </h5>
                          <div class="grid grid-cols-2 gap-2">
                            <button class="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                              9:00 AM
                            </button>
                            <button class="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                              9:30 AM
                            </button>
                            <button class="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                              10:00 AM
                            </button>
                            <button class="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                              10:30 AM
                            </button>
                            <button class="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                              11:00 AM
                            </button>
                            <button class="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                              11:30 AM
                            </button>
                          </div>

                          <h5 class="text-sm font-semibold text-gray-600 uppercase tracking-wide pt-4">
                            Afternoon
                          </h5>
                          <div class="grid grid-cols-2 gap-2">
                            <button class="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                              1:00 PM
                            </button>
                            <button class="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                              1:30 PM
                            </button>
                            <button class="border border-purple-primary bg-purple-50 rounded-lg py-3 px-4 text-sm text-purple-primary font-semibold">
                              2:00 PM
                            </button>
                            <button class="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                              2:30 PM
                            </button>
                            <button class="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                              3:00 PM
                            </button>
                            <button class="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                              3:30 PM
                            </button>
                            <button class="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                              4:00 PM
                            </button>
                            <button class="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                              4:30 PM
                            </button>
                          </div>

                          <h5 class="text-sm font-semibold text-gray-600 uppercase tracking-wide pt-4">
                            Evening
                          </h5>
                          <div class="grid grid-cols-2 gap-2">
                            <button class="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                              5:00 PM
                            </button>
                            <button class="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                              5:30 PM
                            </button>
                            <button class="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                              6:00 PM
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="personal-details"
                    class="bg-white border border-gray-200 rounded-xl p-6"
                  >
                    <h3 class="text-xl font-bold text-black mb-6">
                      Personal Details
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label class="block text-sm font-semibold text-black mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label class="block text-sm font-semibold text-black mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                          placeholder="Enter your last name"
                        />
                      </div>
                      <div>
                        <label class="block text-sm font-semibold text-black mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label class="block text-sm font-semibold text-black mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div class="md:col-span-2">
                        <label class="block text-sm font-semibold text-black mb-2">
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    id="medical-information"
                    class="bg-white border border-gray-200 rounded-xl p-6"
                  >
                    <h3 class="text-xl font-bold text-black mb-6">
                      Medical Information
                    </h3>
                    <div class="space-y-6">
                      <div>
                        <label class="block text-sm font-semibold text-black mb-2">
                          Chief Concern
                        </label>
                        <textarea
                          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none h-24"
                          placeholder="Please describe your main concern or reason for this appointment"
                        ></textarea>
                      </div>

                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label class="block text-sm font-semibold text-black mb-2">
                            Current Medications
                          </label>
                          <textarea
                            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none h-20"
                            placeholder="List any current medications"
                          ></textarea>
                        </div>
                        <div>
                          <label class="block text-sm font-semibold text-black mb-2">
                            Known Allergies
                          </label>
                          <textarea
                            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none h-20"
                            placeholder="List any known allergies"
                          ></textarea>
                        </div>
                      </div>

                      <div>
                        <label class="block text-sm font-semibold text-black mb-3">
                          Previous Skin Conditions
                        </label>
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                          <label class="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              class="text-purple-primary"
                            />
                            <span class="text-sm">Acne</span>
                          </label>
                          <label class="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              class="text-purple-primary"
                            />
                            <span class="text-sm">Eczema</span>
                          </label>
                          <label class="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              class="text-purple-primary"
                            />
                            <span class="text-sm">Psoriasis</span>
                          </label>
                          <label class="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              class="text-purple-primary"
                            />
                            <span class="text-sm">Rosacea</span>
                          </label>
                          <label class="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              class="text-purple-primary"
                            />
                            <span class="text-sm">Skin Cancer</span>
                          </label>
                          <label class="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              class="text-purple-primary"
                            />
                            <span class="text-sm">Other</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="insurance-information"
                    class="bg-white border border-gray-200 rounded-xl p-6"
                  >
                    <h3 class="text-xl font-bold text-black mb-6">
                      Insurance Information
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label class="block text-sm font-semibold text-black mb-2">
                          Insurance Provider
                        </label>
                        <select class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none">
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
                        <label class="block text-sm font-semibold text-black mb-2">
                          Policy Number
                        </label>
                        <input
                          type="text"
                          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                          placeholder="Enter your policy number"
                        />
                      </div>
                      <div>
                        <label class="block text-sm font-semibold text-black mb-2">
                          Group Number
                        </label>
                        <input
                          type="text"
                          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                          placeholder="Enter your group number"
                        />
                      </div>
                      <div>
                        <label class="block text-sm font-semibold text-black mb-2">
                          Subscriber ID
                        </label>
                        <input
                          type="text"
                          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                          placeholder="Enter your subscriber ID"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    id="preferences"
                    class="bg-white border border-gray-200 rounded-xl p-6"
                  >
                    <h3 class="text-xl font-bold text-black mb-6">
                      Appointment Preferences
                    </h3>
                    <div class="space-y-6">
                      <div>
                        <label class="block text-sm font-semibold text-black mb-3">
                          Communication Preferences
                        </label>
                        <div class="space-y-2">
                          <label class="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              class="text-purple-primary"
                              checked
                            />
                            <span class="text-sm">
                              Email appointment reminders
                            </span>
                          </label>
                          <label class="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              class="text-purple-primary"
                              checked
                            />
                            <span class="text-sm">
                              SMS appointment reminders
                            </span>
                          </label>
                          <label class="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              class="text-purple-primary"
                            />
                            <span class="text-sm">
                              Marketing communications
                            </span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label class="block text-sm font-semibold text-black mb-2">
                          Special Accommodations
                        </label>
                        <textarea
                          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none h-20"
                          placeholder="Please describe any special accommodations needed"
                        ></textarea>
                      </div>

                      <div>
                        <label class="block text-sm font-semibold text-black mb-2">
                          Additional Notes
                        </label>
                        <textarea
                          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none h-20"
                          placeholder="Any additional information you'd like to share"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div
                    id="emergency-contact"
                    class="bg-white border border-gray-200 rounded-xl p-6"
                  >
                    <h3 class="text-xl font-bold text-black mb-6">
                      Emergency Contact
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label class="block text-sm font-semibold text-black mb-2">
                          Contact Name
                        </label>
                        <input
                          type="text"
                          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                          placeholder="Emergency contact name"
                        />
                      </div>
                      <div>
                        <label class="block text-sm font-semibold text-black mb-2">
                          Relationship
                        </label>
                        <select class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none">
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
                        <label class="block text-sm font-semibold text-black mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                          placeholder="Emergency contact phone"
                        />
                      </div>
                      <div>
                        <label class="block text-sm font-semibold text-black mb-2">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                          placeholder="Emergency contact email"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    id="payment-section"
                    class="bg-white border border-gray-200 rounded-xl p-6"
                  >
                    <h3 class="text-xl font-bold text-black mb-6">
                      Payment Information
                    </h3>
                    <div class="space-y-6">
                      <div>
                        <label class="block text-sm font-semibold text-black mb-3">
                          Payment Method
                        </label>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div class="border border-purple-primary bg-purple-50 rounded-lg p-4 cursor-pointer">
                            <div class="flex items-center space-x-3">
                              <input
                                type="radio"
                                name="payment-method"
                                id="credit-card"
                                class="text-purple-primary"
                                checked
                              />
                              <div class="flex items-center space-x-2">
                                <i class="fa-solid fa-credit-card text-purple-primary"></i>
                                <span class="font-semibold">Credit Card</span>
                              </div>
                            </div>
                          </div>
                          <div class="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-purple-primary hover:bg-purple-50 transition-colors">
                            <div class="flex items-center space-x-3">
                              <input
                                type="radio"
                                name="payment-method"
                                id="debit-card"
                                class="text-purple-primary"
                              />
                              <div class="flex items-center space-x-2">
                                <i class="fa-solid fa-money-check text-purple-primary"></i>
                                <span class="font-semibold">Debit Card</span>
                              </div>
                            </div>
                          </div>
                          <div class="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-purple-primary hover:bg-purple-50 transition-colors">
                            <div class="flex items-center space-x-3">
                              <input
                                type="radio"
                                name="payment-method"
                                id="insurance"
                                class="text-purple-primary"
                              />
                              <div class="flex items-center space-x-2">
                                <i class="fa-solid fa-shield-halved text-purple-primary"></i>
                                <span class="font-semibold">Insurance</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        id="card-details"
                        class="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <div class="md:col-span-2">
                          <label class="block text-sm font-semibold text-black mb-2">
                            Card Number
                          </label>
                          <input
                            type="text"
                            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div>
                          <label class="block text-sm font-semibold text-black mb-2">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label class="block text-sm font-semibold text-black mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                            placeholder="123"
                          />
                        </div>
                        <div class="md:col-span-2">
                          <label class="block text-sm font-semibold text-black mb-2">
                            Cardholder Name
                          </label>
                          <input
                            type="text"
                            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-purple-primary focus:outline-none"
                            placeholder="Name as it appears on card"
                          />
                        </div>
                      </div>

                      <div class="bg-gray-50 rounded-lg p-4">
                        <h4 class="font-semibold text-black mb-3">
                          Payment Summary
                        </h4>
                        <div class="space-y-2">
                          <div class="flex justify-between items-center">
                            <span class="text-gray-700">
                              General Consultation (45 min)
                            </span>
                            <span class="font-semibold">$120.00</span>
                          </div>
                          <div class="flex justify-between items-center">
                            <span class="text-gray-700">Booking Fee</span>
                            <span class="font-semibold">$5.00</span>
                          </div>
                          <div class="flex justify-between items-center">
                            <span class="text-gray-700">Tax</span>
                            <span class="font-semibold">$10.00</span>
                          </div>
                          <hr class="border-gray-300" />
                          <div class="flex justify-between items-center text-lg">
                            <span class="font-bold text-black">Total</span>
                            <span class="font-bold text-purple-primary">
                              $135.00
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    id="terms-and-conditions"
                    class="bg-white border border-gray-200 rounded-xl p-6"
                  >
                    <h3 class="text-xl font-bold text-black mb-6">
                      Terms & Conditions
                    </h3>
                    <div class="space-y-4">
                      <div class="bg-gray-50 rounded-lg p-4 max-h-40 overflow-y-auto">
                        <p class="text-sm text-gray-700 leading-relaxed">
                          By booking this appointment, you agree to the
                          following terms and conditions:
                          <br />
                          1. <strong>Cancellation Policy:</strong> Appointments
                          must be cancelled at least 24 hours in advance to
                          avoid a cancellation fee.
                          <br />
                          2. <strong>No-Show Policy:</strong> Failure to attend
                          your scheduled appointment may result in a no-show fee
                          equal to 50% of the service cost.
                          <br />
                          3. <strong>Rescheduling:</strong> Appointments can be
                          rescheduled up to 24 hours before the scheduled time
                          subject to availability.
                          <br />
                          4. <strong>Privacy Policy:</strong> Your personal and
                          medical information will be kept confidential and used
                          only for providing healthcare services.
                          <br />
                          5. <strong>Payment Terms:</strong> Payment is due at
                          the time of service. We accept cash, credit cards, and
                          most insurance plans.
                        </p>
                      </div>

                      <div class="space-y-3">
                        <label class="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            class="text-purple-primary mt-1"
                            required
                          />
                          <span class="text-sm text-gray-700">
                            I have read and agree to the terms and conditions
                          </span>
                        </label>
                        <label class="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            class="text-purple-primary mt-1"
                            required
                          />
                          <span class="text-sm text-gray-700">
                            I consent to the collection and use of my personal
                            information for healthcare purposes
                          </span>
                        </label>
                        <label class="flex items-start space-x-3">
                          <span class="text-sm text-gray-700">
                            I would like to receive promotional emails about new
                            services and offers
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div
                    id="booking-actions"
                    class="bg-gray-50 rounded-xl p-6 border border-gray-200"
                  >
                    <div class="flex flex-col md:flex-row gap-4 justify-between items-center">
                      <div class="text-center md:text-left">
                        <p class="text-sm text-gray-600 mb-1">
                          Your appointment is almost ready!
                        </p>
                        <p class="font-semibold text-black">
                          December 18, 2024 at 2:00 PM
                        </p>
                        <p class="text-sm text-gray-600">
                          General Consultation with Dr. Sarah Johnson
                        </p>
                      </div>
                      <div class="flex flex-col md:flex-row gap-3">
                        <button class="bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-300 font-semibold hover:bg-gray-50 transition-colors">
                          Save as Draft
                        </button>
                        <button class="bg-purple-primary text-white px-8 py-3 rounded-lg border border-black font-semibold hover:bg-purple-dark transition-colors">
                          Book Appointment - $135.00
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="confirmation-section" class="hidden">
        <div class="bg-white rounded-2xl border border-black shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
          <div class="text-center p-8">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="fa-solid fa-check-circle text-green-500 text-3xl"></i>
            </div>
            <h2 class="text-3xl font-bold text-black mb-4">
              Appointment Confirmed!
            </h2>
            <p class="text-xl text-gray-600 mb-8">
              Your appointment has been successfully booked.
            </p>

            <div class="bg-gray-50 rounded-xl p-6 mb-8 text-left">
              <h3 class="text-xl font-bold text-black mb-4">
                Appointment Details
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div class="flex items-center space-x-3 mb-3">
                    <i class="fa-solid fa-user-md text-purple-primary"></i>
                    <div>
                      <p class="font-semibold text-black">Dr. Sarah Johnson</p>
                      <p class="text-sm text-gray-600">Dermatologist</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-3 mb-3">
                    <i class="fa-solid fa-calendar text-purple-primary"></i>
                    <div>
                      <p class="font-semibold text-black">December 18, 2024</p>
                      <p class="text-sm text-gray-600">2:00 PM - 2:45 PM</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-3 mb-3">
                    <i class="fa-solid fa-stethoscope text-purple-primary"></i>
                    <div>
                      <p class="font-semibold text-black">
                        General Consultation
                      </p>
                      <p class="text-sm text-gray-600">45 minutes</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-3 mb-3">
                    <i class="fa-solid fa-map-marker-alt text-purple-primary"></i>
                    <div>
                      <p class="font-semibold text-black">
                        Downtown Medical Center
                      </p>
                      <p class="text-sm text-gray-600">In-person visit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col md:flex-row gap-4 justify-center">
              <button class="bg-purple-primary text-white px-8 py-3 rounded-lg border border-black font-semibold hover:bg-purple-dark transition-colors">
                <i class="fa-solid fa-calendar-plus mr-2"></i>
                Add to Calendar
              </button>
              <button class="bg-white text-purple-primary px-8 py-3 rounded-lg border border-black font-semibold hover:bg-purple-50 transition-colors">
                <i class="fa-solid fa-download mr-2"></i>
                Download Receipt
              </button>
              <button class="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg border border-gray-300 font-semibold hover:bg-gray-200 transition-colors">
                <i class="fa-solid fa-home mr-2"></i>
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
