import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "Contact", path: "/contact" },
  ];

  const currentPath = location.pathname;
  const currentActive = navItems.find(item => item.path === currentPath)?.name;

  return (
    <>
      <nav className="w-full bg-green-200 shadow-sm py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-green-900">Wellness</h1>

        <div className="hidden md:flex gap-6 text-green-900 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative pb-1 transition-all duration-200
                ${currentActive === item.name ? "text-green-900" : "text-green-700"}
              `}
            >
              {item.name}

              {currentActive === item.name && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-900 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="bg-white px-4 py-2 w-60 rounded-full border border-gray-300 shadow-sm"
          />
        </div>

        <button
          className="md:hidden text-green-900 hover:text-green-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-green-200 md:hidden transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full px-6 space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-3xl font-medium text-green-900 hover:text-green-700 ${
                currentActive === item.name ? "underline underline-offset-4" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}

          <input
            type="text"
            placeholder="Search"
            className="bg-white px-4 py-2 w-72 rounded-full border border-gray-300 shadow-sm"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
