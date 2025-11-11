const footerData = [
  {
    title: "Platform",
    links: [
      { label: "Browse Professionals", href: "/browse-professionals" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Mobile App", href: "/mobile-app" },
    ],
  },
  {
    title: "For Professionals",
    links: [
      { label: "Join Platform", href: "/join" },
      { label: "Professional Dashboard", href: "/dashboard" },
      { label: "Resources", href: "/resources" },
      { label: "Success Stories", href: "/success-stories" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help-center" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

const socialLinks = [
  { icon: "fa-facebook", href: "https://facebook.com" },
  { icon: "fa-twitter", href: "https://twitter.com" },
  { icon: "fa-instagram", href: "https://instagram.com" },
  { icon: "fa-linkedin", href: "https://linkedin.com" },
];

const footerBottomLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

const Footer = () => {
  const renderPlatformLinks = () => {
    const displayLinks = (links) => {
      if (!links || links.length === 0) return null;
      return links.map((link) => {
        return (
          <li key={link.label}>
            <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              {link.label}
            </span>
          </li>
        );
      });
    };
    return footerData.map((section) => {
      return (
        <div key={section.title}>
          <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
          <ul className="space-y-3">{displayLinks(section.links)}</ul>
        </div>
      );
    });
  };

  const renderSocialLinks = () => {
    return socialLinks.map((social) => {
      return (
        <span
          key={social.icon}
          className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-primary transition-colors cursor-pointer"
        >
          <i className={`fa-brands ${social.icon} text-white`}></i>
        </span>
      );
    });
  };

  const renderFooterBottomLinks = () => {
    return footerBottomLinks.map((link) => {
      return (
        <span
          key={link.label}
          className="text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          {link.label}
        </span>
      );
    });
  };

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
            <div className="flex space-x-4">{renderSocialLinks()}</div>
          </div>
          {renderPlatformLinks()}
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 bookfy. All rights reserved.
          </p>
          <div className="flex space-x-6">{renderFooterBottomLinks()}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
