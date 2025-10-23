import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <section
      id="login-hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-100 relative overflow-hidden"
    >
      <div className="absolute w-96 h-96 rounded-full bg-purple-100/40 -top-20 -left-20 blur-3xl"></div>
      <div className="absolute w-96 h-96 rounded-full bg-purple-200/30 -bottom-20 -right-20 blur-3xl"></div>
      <div className="absolute w-64 h-64 rounded-full bg-purple-primary/10 top-1/2 left-1/4 blur-2xl"></div>
      <div className="w-full max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div id="login-branding" className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start space-x-4 mb-8">
            <div className="w-16 h-16 bg-purple-primary rounded-2xl flex items-center justify-center shadow-lg">
              <i className="fa-solid fa-palette text-white text-2xl"></i>
            </div>
            <h1 className="text-4xl font-bold text-black">Bookfy</h1>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
            Welcome Back to Your Professional Network
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
            Access your dashboard, manage appointments, and connect with
            thousands of verified professionals in our secure platform.
          </p>

          <div id="platform-stats" className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-primary mb-2">
                10K+
              </div>
              <div className="text-sm text-gray-600 font-light ">
                Active Professionals
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-primary mb-2">
                50K+
              </div>
              <div className="text-sm text-gray-600 font-light ">
                Happy Users
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-primary mb-2">
                4.9★
              </div>
              <div className="text-sm text-gray-600 font-light">
                Platform Rating
              </div>
            </div>
          </div>
        </div>

        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
