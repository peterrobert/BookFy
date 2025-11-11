import { useParams } from "react-router-dom";
import { useProfessionalDetails } from "../../hooks/queries";
import ProfileHeroSection from "./ProfileHeroSection";

import AppSpinner from "../../Components/AppSpinner";
import AppError from "../../Components/AppError";
import ProfileNavigationSection from "./ProfileNavigationSection";
import ProfileBookingSection from "./ProfileBookingSection";
import Footer from "../../Layouts/Footer";
import SimilarProfiles from "./SimilarProfiles";

const ProfilePage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useProfessionalDetails(id);

  if (isLoading) return <AppSpinner />;
  if (isError)
    return <AppError message={"Failed to load professional details."} />;

  return (
    <>
      <ProfileHeroSection professionalData={data} />

      <section id="main-content" className="py-12 px-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6 ">
              <ProfileNavigationSection />
            </div>
            {/* ---- Content Section ---- */}
            <div className="space-y-0 mt-36">
              <ProfileBookingSection professionalData={data} />
            </div>
          </div>
        </div>
      </section>
      <SimilarProfiles />
      <Footer />
    </>
  );
};

export default ProfilePage;
