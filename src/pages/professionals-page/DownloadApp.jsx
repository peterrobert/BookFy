const DownloadApp = () => {
  return (
    <section
      id="mobile-app-promotion"
      className="py-20 px-5 bg-gradient-to-br from-purple-primary to-purple-dark"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Book On The Go with Our Mobile App
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-lg font-light">
              Download our mobile app for even easier booking, instant
              notifications, and exclusive mobile-only features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center">
                <i className="fa-brands fa-apple mr-2 text-xl"></i>
                Download for iOS
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center">
                <i className="fa-brands fa-google-play mr-2 text-xl"></i>
                Download for Android
              </button>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.8★</div>
                <div className="text-sm text-purple-100 font-light">
                  App Store Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100K+</div>
                <div className="text-sm text-purple-100 font-light">
                  Downloads
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              className="w-full max-w-md mx-auto h-96 object-cover rounded-2xl"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3d59745bb0-885edaac7bdc844d6461.png"
              alt="mobile app interface appointment booking purple design modern smartphone mockup"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
