// --- LANDING PAGE HERO SECTION COMPONENT --- //
import HeroImg from "../../assets/hero.png";
import AppButton from "../../Components/AppButton";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="bg-gradient-to-br from-purple-50 to-white py-20 px-5 h-[700px] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                Book Your Perfect
                <span className="text-purple-primary"> Appointment</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Connect with verified professionals instantly. From healthcare
                to beauty, fitness to consulting - find and book appointments
                with ease.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <AppButton
                label="Browse Professionals"
                icon={<i className="fa-solid fa-search mr-2"></i>}
              />
            </div>
            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-primary">
                  10K+
                </div>
                <div className="text-sm text-gray-600">Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-primary">
                  50K+
                </div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-primary">
                  4.9★
                </div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative mt-10 lg:mt-0">
            <div className="relative">
              <img
                className="w-full h-96 object-cover rounded-2xl border border-black shadow-2xl"
                src={HeroImg}
                alt="clean calendar view"
              />
              <div className="absolute -top-6 -right-6 bg-purple-primary text-white p-4 rounded-xl border border-black shadow-lg">
                <i className="fa-solid fa-calendar-check text-2xl"></i>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl border border-black shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-user text-purple-primary"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">
                      Appointment Booked
                    </div>
                    <div className="text-xs text-gray-500">Just now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
