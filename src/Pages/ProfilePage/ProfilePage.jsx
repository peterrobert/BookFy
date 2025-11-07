import { useParams } from "react-router-dom";
import ProfileHeroSection from "./ProfileHeroSection";
import { useProfessionalDetails } from "../../hooks";
import AppSpinner from "../../Components/AppSpinner";
import AppError from "../../Components/AppError";
import ProfileNavigationSection from "./ProfileNavigationSection";
import ProfileBookingSection from "./ProfileBookingSection";

const ProfilePage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useProfessionalDetails(id);

  if (isLoading) return <AppSpinner />;
  if (isError)
    return <AppError message={"Failed to load professional details."} />;

  return (
    <>
      <ProfileHeroSection professionalData={data} />
      <ProfileNavigationSection />
      <section id="main-content" className="py-12 px-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8"></div>
            {/* ---- Content Section ---- */}
            <div className="space-y-6">
              <ProfileBookingSection professionalData={data} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
