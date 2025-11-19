import { useParams } from "react-router-dom";
import { useProffessDetailsCache } from "../../Hooks/Cache";

const ProfileEducationSection = () => {
  const { id } = useParams();
  const data = useProffessDetailsCache(id);

  const displayCredentials = () => {
    return data?.credentials.map((value, index) => {
      return (
        <div className="flex items-start space-x-4" key={index}>
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <i className="fa-solid fa-graduation-cap text-purple-primary text-xl"></i>
          </div>
          <div>
            <h3 className="font-semibold text-black">{value.title}</h3>
            <p className="text-gray-600 font-medium">{value.institution}</p>
            <p className="text-sm text-gray-500 font-light">{value.details}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div
      id="credentials-section"
      className="bg-white rounded-xl border border-gray-200 shadow-lg p-8"
    >
      <h2 className="text-2xl font-bold text-black mb-6">
        Education & Credentials
      </h2>
      <div className="space-y-6">{displayCredentials()}</div>
    </div>
  );
};

export default ProfileEducationSection;
