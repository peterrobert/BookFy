const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white py-16 px-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-purple-primary rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-palette text-white text-lg"></i>
              </div>
              <h1 className="text-2xl font-bold">Bookfy</h1>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              The modern way to book appointments with verified professionals.
              Simple, secure, and seamless.
            </p>
            <div className="flex space-x-4">
              <span className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-primary transition-colors cursor-pointer">
                <i className="fa-brands fa-facebook text-white"></i>
              </span>
              <span className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-primary transition-colors cursor-pointer">
                <i className="fa-brands fa-twitter text-white"></i>
              </span>
              <span className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-primary transition-colors cursor-pointer">
                <i className="fa-brands fa-instagram text-white"></i>
              </span>
              <span className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-primary transition-colors cursor-pointer">
                <i className="fa-brands fa-linkedin text-white"></i>
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Browse Professionals
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  How It Works
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Pricing
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Mobile App
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">For Professionals</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Join Platform
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Professional Dashboard
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Resources
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Success Stories
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Help Center
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 bookfy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              Privacy
            </span>
            <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              Terms
            </span>
            <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
