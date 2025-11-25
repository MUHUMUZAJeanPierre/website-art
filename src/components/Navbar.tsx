import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Determine active item based on URL path
  const currentPath = location.pathname;
  const currentActive = navItems.find(item => item.path === currentPath)?.name;

  return (
    <nav className="w-full bg-green-200 shadow-sm py-4 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-green-900">Wellness</h1>

      {/* Navigation */}
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

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search"
        className="bg-white px-4 py-2 w-60 rounded-full border border-gray-300 shadow-sm"
      />
    </nav>
  );
};

export default Navbar;
