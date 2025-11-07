import { useParams } from "react-router-dom";
import ProfileHeroSection from "./ProfileHeroSection";
import { useProfessionalDetails } from "../../hooks";
import AppSpinner from "../../Components/AppSpinner";
import AppError from "../../Components/AppError";
import ProfileNavigationSection from "./ProfileNavigationSection";

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
    </>
  );
};

export default ProfilePage;
