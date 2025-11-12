import { useParams } from "react-router-dom";
import { useProffessDetailsCache } from "../../hooks/cache";

const ProfileAboutSection = () => {
  const { id } = useParams();
  const data = useProffessDetailsCache(id);

  const displayDetails = () => {
    return data?.about?.details.map((value, index) => {
      return (
        <p className="text-gray-700 leading-relaxed mb-4" key={index}>
          {value}
        </p>
      );
    });
  };
  return (
    <div
      id="about-section"
      className="bg-white rounded-xl border border-gray-200 shadow-lg p-8"
    >
      <h2 className="text-2xl font-bold text-black mb-6">
        {data?.about?.title}
      </h2>
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">
          {data?.about?.summary}
        </p>
        {displayDetails()}
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-primary">
              {data?.about?.stats?.experience}
            </div>
            <div className="text-sm text-gray-600">Of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-primary">
              {" "}
              {data?.about?.stats?.clients}
            </div>
            <div className="text-sm text-gray-600">Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-primary">
              {data?.about?.stats?.success_rate}
            </div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-primary">
              {" "}
              {data?.about?.stats?.reviews}
            </div>
            <div className="text-sm text-gray-600">Client Reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAboutSection;
