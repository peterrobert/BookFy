import { useParams } from "react-router-dom";
import { useProffessDetailsCache } from "../../hooks/cache";
import AppStarRatings from "../../Components/AppStarRatings";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";

const ProfileReviewsSection = () => {
  const { id } = useParams();
  const data = useProffessDetailsCache(id);

  const displayComments = () => {
    if (data?.reviews_list.length < 1)
      return (
        <Alert severity="success"> There are no reviews at the moment</Alert>
      );

    return data?.reviews_list.map((review) => {
      return (
        <div className="space-y-8 mt-6" key={review.id}>
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-start space-x-4">
              {review.avatar ? (
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
              ) : (
                <Avatar src="/broken-image.jpg" />
              )}

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-black">{review.name}</h4>
                    <div className="flex items-center mt-1">
                      <AppStarRatings rating={review.rating} />
                      <span className="text-sm text-gray-500">
                        {review.timeAgo}
                      </span>
                    </div>
                  </div>
                  {review.verified ? (
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      Verified Client
                    </span>
                  ) : (
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      Unverified Client
                    </span>
                  )}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {review.comment}
                </p>
                <div className="flex items-center mt-3 space-x-4">
                  <button className="text-sm text-gray-500 hover:text-purple-primary flex items-center">
                    <i className="fa-solid fa-thumbs-up mr-1"></i>
                    Helpful ({review.helpfulCount})
                  </button>
                  <button className="text-sm text-gray-500 hover:text-purple-primary">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div
      id="reviews-section"
      className="bg-white rounded-xl border border-gray-200 shadow-lg p-8"
    >
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-2xl font-bold text-black">Client Reviews</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <AppStarRatings rating={data?.rating} />
            <span className="font-bold text-xl">{data?.rating}</span>
            <span className="text-gray-500 ml-2">({data?.reviews}reviews)</span>
          </div>
        </div>
      </div>
      {displayComments()}
    </div>
  );
};

export default ProfileReviewsSection;
