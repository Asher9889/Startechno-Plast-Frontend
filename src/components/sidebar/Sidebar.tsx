import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems } from "../../routes";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleSubMenu = (menuName: string) =>
    setOpenMenu(openMenu === menuName ? null : menuName);

  return (
    <>
      {/* --- Mobile Menu Button --- */}
      <div className="lg:hidden text-center">
        <button
          onClick={toggleSidebar}
          className="py-2 px-3 inline-flex justify-center items-center gap-x-2"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* --- Sidebar --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="fixed top-0 left-0 h-full w-64 bg-(--color-main-bg) z-50 lg:translate-x-0 shadow-xl"
          >
            {/* --- Header --- */}
            <header className="p-4 flex justify-between items-center border-b border-white/10">
              <p className="font-semibold text-xl text-white">Menu</p>
              <button
                onClick={toggleSidebar}
                className="lg:hidden w-8 h-8 rounded-full  hover:bg-white/20 text-white transition"
              >
                ✕
              </button>
            </header>

            {/* --- Navigation --- */}
            <nav className="px-2 overflow-y-auto h-full mt-4">
              <ul className="space-y-1">
                {navItems
                  .filter((nav) => !nav.skip)
                  .map(({ name, icon: Icon, path, children }, index) =>
                    children ? (
                      <li key={name + index}>
                        <div className="flex items-center justify-between rounded-lg hover:bg-(--sidebar-hover-bg) transition">
                          {/* Parent Link (navigates to path) */}
                          <Link
                            to={path || ""}
                            onClick={() => setIsOpen(false)} // auto close on mobile
                            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white w-full"
                          >
                            <Icon className="size-4" />
                            <span>{name}</span>
                          </Link>

                          {/* Arrow Button (toggles submenu) */}
                          {children.length > 0 && <button
                            onClick={() => toggleSubMenu(name)}
                            className="p-2 text-white hover:text-gray-300 transition"
                          >
                            <motion.div
                              animate={{ rotate: openMenu === name ? 180 : 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              <ChevronDown size={18} />
                            </motion.div>
                          </button>}
                          
                        </div>

                        {/* --- Animated Submenu --- */}
                        <AnimatePresence initial={false}>
                          {openMenu === name && (
                            <motion.ul
                              key={name}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="ps-9 overflow-hidden space-y-1"
                            >
                              {children.map(({ name, path }) => (
                                <li key={name}>
                                  <Link
                                    to={path}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 px-2.5 text-sm rounded-lg text-(--sidebar-text) hover:bg-(--sidebar-hover-bg) hover:text-(--sidebar-text-hover) transition"
                                  >
                                    { name}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    ) : (
                      <li key={name + index}>
                        <Link
                          to={path}
                          onClick={() => setIsOpen(false)} // auto-close on mobile
                          className="flex items-center gap-x-3.5 py-2 px-2.5 rounded-lg text-sm text-white hover:bg-(--sidebar-hover-bg) transition"
                        >
                          <Icon className="size-4" />
                          {name}
                        </Link>
                      </li>
                    )
                  )}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
