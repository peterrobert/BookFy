import { useParams } from "react-router-dom";
import { useProffessDetailsCache } from "../../hooks/cache";
import AppButton from "../../Components/AppButton";

const ProfileLocationSection = () => {
  const { id } = useParams();
  const data = useProffessDetailsCache(id);

  return (
    <div
      id="location-section"
      className="bg-white rounded-xl border border-gray-200 shadow-lg p-6"
    >
      <h3 className="text-lg font-bold text-black mb-4">Office Location</h3>
      <div className="space-y-3 mb-4">
        <div className="flex items-start space-x-3">
          <i className="fa-solid fa-map-marker-alt text-purple-primary mt-1"></i>
          <div>
            <div className="font-medium text-black">{data?.location}</div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <i className="fa-solid fa-phone text-purple-primary"></i>
          <span className="text-gray-700">(555) 123-4567</span>
        </div>
        <div className="flex items-center space-x-3">
          <i className="fa-solid fa-parking text-purple-primary"></i>
          <span className="text-gray-700">Valet parking available</span>
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center mb-4">
        <div className="text-center text-gray-500">
          <i className="fa-solid fa-map text-2xl mb-2"></i>
          <div className="text-sm">Interactive Map</div>
        </div>
      </div>
      <div className="flex space-x-2">
        <AppButton
          label="Get Directions"
          className="flex-1 bg-purple-primary text-white py-2 rounded-lg font-medium hover:bg-purple-dark transition-colors"
        />
        <AppButton
          label="Get Directions"
          variant="outline"
          className="flex-1 bg-white text-purple-primary py-2 rounded-lg border border-purple-primary font-medium hover:bg-purple-50 transition-colors"
        />
      </div>
    </div>
  );
};

export default ProfileLocationSection;
