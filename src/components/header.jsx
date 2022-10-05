import { Disclosure } from "@headlessui/react";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { starLogo, menuOpen, menuClose } from "../assets";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Destination", href: "/dist" },
  { name: "Crew", href: "/crew" },
  { name: "Technology", href: "/tech" },
];

function Header({ classNaming }) {
  const page = useLocation();

  return (
    <header>
      <Disclosure as="nav" className="my-6 sm:mt-0 lg:my-12 px-4 sm:px-0">
        {({ open }) => (
          <>
            <div className="max-w-screen-3xl px-4 sm:pl-8 sm:pr-0 lg:pl-16 ml-auto">
              <div className="relative flex h-18 items-center justify-between">
                <div className="flex flex-1 items-stretch justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-8 sm:h-12 w-auto"
                      src={starLogo}
                      alt="Star"
                    />
                  </div>
                </div>

                <div className="hidden glasso sm:ml-6 sm:block">
                  <div className="flex space-x-12 justify-evenly text-white">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNaming(
                          page.pathname == item.href
                            ? "border-solid border-b-2 border-white-500"
                            : "hover:border-solid hover:border-gray-400 hover:border-b-4",
                          "py-8 font-medium uppercase"
                        )}
                        aria-current={
                          page.pathname == item.href ? "page" : undefined
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-y-0 z-10 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none">
                    {open ? (
                      <img
                        src={menuClose}
                        alt="close main menu"
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <img
                        src={menuOpen}
                        alt="Open main menu"
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="absolute top-0 right-0 h-full glasso space-y-2 pt-16 pb-3">
                {navigation.map((item, index) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={classNaming(
                      page.pathname == item.href
                        ? "bg-gray-900 text-white border-solid border-l-2 border-white-500"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 uppercase text-base font-medium"
                    )}
                  >
                    <Disclosure.Button className="w-full text-start">
                      {index < 10 ? `0${index}` : index} {item.name}
                    </Disclosure.Button>
                  </NavLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}

export default Header;
