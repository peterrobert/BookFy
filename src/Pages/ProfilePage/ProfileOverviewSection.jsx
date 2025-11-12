import ProfileAboutSection from "./ProfileAboutSection";
import ProfileEducationSection from "./ProfileEducationSection";

const ProfileOverviewSection = () => {
  return (
    <>
      <ProfileAboutSection />
      <div className="space-y-6 mt-5">
        <ProfileEducationSection />
      </div>
    </>
  );
};

export default ProfileOverviewSection;
