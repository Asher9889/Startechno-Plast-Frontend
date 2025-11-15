import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems } from "../../routes"; 




const Sidebar = () => {
  return (
    <>
      {/* <!-- Navigation Toggle --> */}
      <div className="lg:hidden  text-center">
        <button
          type="button"
          className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="hs-sidebar-collapsible-group"
          aria-label="Toggle navigation"
          data-hs-overlay="#hs-sidebar-collapsible-group"
        >
          <Menu size={28} />
        </button>
      </div>
      {/* <!-- End Navigation Toggle --> */}

      {/* <!-- Sidebar --> */}
      <div
        id="hs-sidebar-collapsible-group"
        className="hs-overlay (--auto-close:lg) lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 w-64 hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform h-full hidden fixed top-0 start-0 bottom-0 z-60  bg-(--dark-blue-color)"
        role="dialog"
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col h-full max-h-full bg-(--dark-blue-color)`">
          {/* <!-- Header --> */}
          <header className=" p-4 flex justify-between items-center gap-x-2">
            <p
              className="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white "
              
              aria-label="Brand"
            >
              Menu
            </p>

            <div className="lg:hidden -me-2">
              {/* <!-- Close Button --> */}
              <button
                type="button"
                className="flex justify-center items-center gap-x-3 size-6 bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                data-hs-overlay="#hs-sidebar-collapsible-group"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Close</span>
              </button>
              {/* <!-- End Close Button --> */}
            </div>
          </header>
          {/* <!-- End Header --> */}

          {/* <!-- Body --> */}
          <nav className="h-full overflow-y-auto (&::-webkit-scrollbar):w-2 (&::-webkit-scrollbar-thumb):rounded-full (&::-webkit-scrollbar-track):bg-gray-100 (&::-webkit-scrollbar-thumb):bg-gray-300 dark:(&::-webkit-scrollbar-track):bg-neutral-700 dark:(&::-webkit-scrollbar-thumb):bg-neutral-500">
            <div
              className="hs-accordion-group pb-0 px-2  w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open
            >
              <ul className="space-y-1">
                {navItems.map(({ name, icon: Icon, path, children }) =>
                  children ? (
                    <li key={name} className="hs-accordion" id={`${name}-accordion`}>
                      <Link
                        to={path!!}
                         data-hs-overlay="#hs-sidebar-collapsible-group"
                        className="hs-accordion-toggle w-full text-start flex rounded-lg items-center gap-x-3.5 py-2 px-2.5 text-sm hover:bg-(--sidebar-hover-bg) hover:text-(--sidebar-text-hover)
             focus:outline-hidden focus:bg-(--sidebar-active-bg) focus:text-(--sidebar-text-active)"
                        aria-expanded="false"
                        aria-controls={`${name}-accordion-collapse`}
                      >
                        <Icon className="size-4" />
                        {name}
                        <svg className="hs-accordion-active:block ms-auto hidden size-4 "
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                        <svg
                          className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400 "
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </Link>

                      <div
                        id={`${name}-accordion-collapse`}
                        className="hs-accordion-content w-full overflow-hidden transition-(height) duration-300 hidden"
                        role="region"
                        aria-labelledby={`${name}-accordion`}
                      >
                        <ul className="pt-1 ps-7 space-y-1">
                          {children.map(({ name, path }) => {
                            // const link = ();
                            return (
                            <li key={name}>
                              <Link
                                to={path}
                                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg text-(--sidebar-text) hover:bg-(--sidebar-hover-bg) hover:text-(--sidebar-text-hover focus:outline-hidden focus:bg-(--sidebar-active-bg) focus:text-(--sidebar-text-active)"
                              >
                                {name}
                              </Link>
                            </li>
                          )})}

                          {/* Example of nested future sub-menu */}
                          {/*
                          <li className="hs-accordion" id={`${name}-sub-accordion`}>
                            <button
                              type="button"
                              className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                              aria-expanded="false"
                              aria-controls={`${name}-sub-accordion-collapse`}
                            >
                              Sub Menu
                            </button>
                            <div
                              id={`${name}-sub-accordion-collapse`}
                              className="hs-accordion-content w-full overflow-hidden transition-(height) duration-300 hidden"
                              role="region"
                              aria-labelledby={`${name}-sub-accordion`}
                            >
                              <ul className="pt-1 ps-2 space-y-1">
                                <li><a href="#">Link 1</a></li>
                                <li><a href="#">Link 2</a></li>
                              </ul>
                            </div>
                          </li>
                          */}
                        </ul>
                      </div>
                    </li>
                  ) : (
                    <Link
                      to={path}
                      className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg bg-(--dark-blue-color) text-(--sidebar-text) hover:bg-(--sidebar-hover-bg) hover:text-(--sidebar-text-hover) focus:outline-hidden focus:bg-(--sidebar-active-bg) focus:text-(--sidebar-text-active)"
                    >
                      <Icon className="size-4 text-(--sidebar-icon) group-hover:text-(--sidebar-icon-hover)" />
                      {name}
                    </Link>
                  )
                )}
              </ul>
            </div>
          </nav>
          {/* <!-- End Body --> */}
        </div>
      </div>
      {/* <!-- End Sidebar --> */}
    </>
  );
};

export default Sidebar;
