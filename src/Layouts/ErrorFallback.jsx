import { useNavigate } from "react-router-dom";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate();
  return (
    <section
      id="error-main-section"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl w-full">
        <section
          id="error-hero-illustration-section"
          className="text-center mb-16 fade-in"
        >
          <div className="inline-block error-float relative">
            <div className="relative w-96 h-96 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-purple-100 to-purple-200/50 rounded-full pulse-ring"></div>
              <div className="absolute inset-6 bg-gradient-to-br from-white to-purple-50 rounded-full shadow-2xl flex items-center justify-center">
                <div className="relative">
                  <div className="relative">
                    <i className="fa-solid fa-calendar-xmark text-brand-purple text-9xl opacity-90"></i>
                    <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                      <i className="fa-solid fa-exclamation text-white text-4xl font-bold"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-8 right-12 w-16 h-16 bg-brand-purple/20 rounded-full animate-pulse"></div>
              <div
                className="absolute bottom-12 left-8 w-12 h-12 bg-purple-300/40 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute top-1/2 -left-10 w-8 h-8 bg-brand-purple/15 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute -top-4 left-1/3 w-6 h-6 bg-purple-400/30 rounded-full animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-6xl font-black text-brand-dark-grey mb-6 leading-tight">
              Oops! Something Went Wrong
            </h3>
            <p className="text-2xl text-brand-dark-grey mb-5 font-light leading-relaxed ">
              We couldn't find the page you're looking for.
            </p>
            <p className="text-xl text-red-600 font-light leading-relaxed">
              ERROR: {error.message}
            </p>
          </div>
        </section>
        <section
          id="error-primary-actions-section"
          className="text-center mb-20 fade-in"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8">
            <button
              onClick={() => {
                navigate("/home");
                window.location.reload();
              }}
              className="px-12 py-5 bg-brand-purple text-black rounded-2xl hover:bg-purple-700 hover:text-white transition-all font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
            >
              <i className="fa-solid fa-home mr-3"></i>
              Go Home
            </button>
            <button
              onClick={() => {
                navigate("/professionals");
                window.location.reload();
              }}
              className="px-12 py-5 border-2 border-brand-purple text-brand-purple rounded-2xl hover:bg-brand-purple  hover:bg-purple-700 hover:text-white transition-all font-bold text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <i className="fa-solid fa-users mr-3"></i>
              Browse Professionals
            </button>
          </div>
          <div className="flex items-center justify-center gap-6">
            <button
              className="text-brand-purple hover:text-purple-700 font-bold text-lg underline flex items-center group"
              onClick={resetErrorBoundary}
            >
              <i className="fa-solid fa-rotate-right mr-2 group-hover:rotate-180 transition-transform duration-500"></i>
              Try Again
            </button>
            <span className="text-gray-400">|</span>
            <button
              className="text-brand-purple hover:text-purple-700 font-bold text-lg underline flex items-center"
              onClick={() => {
                navigate("/");
                window.location.reload();
              }}
            >
              <i className="fa-solid fa-arrow-left mr-2"></i>
              Go Back
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ErrorFallback;
