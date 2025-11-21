// --- PROFESSIONAL CALL SECTION COMPONENT --- //
import ProffesionalImage from "../../assets/proffesional.png";
import AppButton from "../../Components/AppButton";
const ProfessionalCallSection = () => {
  return (
    <section id="professionals-cta" className="py-20 px-5 bg-gray-50">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl border border-black shadow-xl p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-4xl font-bold text-black mb-6">
                Are You a Professional?
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Join our platform and connect with thousands of potential
                clients. Manage your schedule, grow your business, and focus on
                what you do best.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <i className="fa-solid fa-check-circle text-purple-primary mr-3"></i>
                  <span className="text-gray-700">
                    Easy appointment management
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-check-circle text-purple-primary mr-3"></i>
                  <span className="text-gray-700">
                    Secure payment processing
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-check-circle text-purple-primary mr-3"></i>
                  <span className="text-gray-700">Professional dashboard</span>
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-check-circle text-purple-primary mr-3"></i>
                  <span className="text-gray-700">24/7 customer support</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <AppButton label="Join as Professional" />
                <AppButton label="Learn More" variant="outline" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                className="w-full h-80 object-cover rounded-xl border border-black shadow-lg"
                src={ProffesionalImage}
                alt="professional business person using appointment scheduling software dashboard, modern office setting"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCallSection;
