import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navItems } from "@/routes";


const SpecialtyNav = () => {
  return (
    <header className="hidden lg:block bg-white shadow-sm border-t border-gray-200">
      <nav className="max-w-[85rem] mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 py-3 text-sm text-gray-800 font-medium">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {/* Trigger button */}
              <button className="flex items-center gap-2 px-4 py-3 rounded-md transition hover:text-blue-600 relative z-30">
                <item.icon className="w-4 h-4" />
                <Link to={item.path!!}>{item.name}</Link>
                {item.children && <FaCaretDown className="text-xs" />}
              </button>

              {/* Dropdown menu */}
              {item.children && (
                <div
                  className={`absolute left-0 top-full hidden group-hover:grid bg-white shadow-lg rounded-md mt-1 z-20 
      ${item.name === "Urology" ? "grid-cols-3 gap-1 w-[600px] p-4 z-100" : "grid-cols-1 w-56 p-2 z-100"}`}
                >
                  {item.children.map((child) => {
                    return (
                    <Link
                      key={child.label}
                      to={child.path}
                      className="text-nowrap block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition"
                    >
                      {child.label}
                    </Link>
                  )})}
                </div>
              )}

              {/* Invisible hover bridge (prevents flicker) */}
              {item.children && (
                <div className="absolute left-0 top-full w-full h-4 bg-transparent group-hover:block" />
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default SpecialtyNav;
