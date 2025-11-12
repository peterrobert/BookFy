import { NavLink, useNavigate } from "react-router-dom";
import AppButton from "../Components/AppButton";

const NavItems = [
  {
    label: "Landing page",
    href: "/",
  },
  {
    label: "Client Dashboard",
    href: "/home",
  },
  {
    label: "Browse Professionals",
    href: "/professionals",
  },
  {
    label: "Proffesional Dashboard",
    href: "/proffessionalDashboard",
  },
  {
    label: "404 Page",
    href: "/how-it-works",
  },
];

const Navigation = () => {
  const navigate = useNavigate();

  const navItems = () => {
    return NavItems.map((item) => {
      return (
        <NavLink
          to={item.href}
          className={({ isActive }) =>
            `pb-1  text-gray-700 relative font-light ${
              isActive ? "text-purple-600" : ""
            }`
          }
          key={item.label}
        >
          <span>{item.label}</span>
        </NavLink>
      );
    });
  };

  return (
    <header
      id="header"
      className="bg-white border-b border-gray-200 px-5 py-4 sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-primary rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-palette text-white text-lg"></i>
            </div>
            <h1 className="text-2xl font-bold text-black">Bookfy</h1>
          </div>
        </div>
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems()}
        </nav>
        <div className="flex items-center space-x-4">
          <AppButton
            label="Log In"
            variant="text"
            onClick={() => navigate("/login")}
          />
          <AppButton
            label="Sign Up"
            variant="primary"
            onClick={() => navigate("/signup")}
          />
        </div>
        <button className="lg:hidden text-gray-700">
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
      </div>
    </header>
  );
};

export default Navigation;
