import ProfileAboutSection from "./ProfileAboutSection";
import ProfileEducationSection from "./ProfileEducationSection";
import ProfileLocationSection from "./ProfileLocationSection";

const ProfileOverviewSection = () => {
  return (
    <>
      <ProfileAboutSection />
      <div className="space-y-6 mt-5">
        <ProfileEducationSection />
      </div>
      <div className="space-y-6 mt-5">
        <ProfileLocationSection />
      </div>
    </>
  );
};

export default ProfileOverviewSection;
