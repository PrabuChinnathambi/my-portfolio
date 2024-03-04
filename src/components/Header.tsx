import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/P_Logo.svg";
import { useRouter } from "next/router";
import React from "react";

import { usePathname } from "next/navigation";

const NavBar = () => {
  const usePath = usePathname();
  const pathname = usePath.replace("/", "");
  console.log(pathname.replace("/", ""), " bkjh");
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState(pathname);

  const menus = [
    {
      label: "Home",
      path: "/homePage",
    },
    {
      label: "Experience",
      path: "/experience",
    },
    {
      label: "Education",
      path: "/education",
    },
    {
      label: "Contact Us",
      path: "/contact",
    },
  ];

  console.log(selectedMenu, "selectedMenu");

  return (
    <>
      <div className="relative container bg-transparent animate-fade-down animate-once animate-duration-1000 animate-delay-200 ">
        <div className="mx-auto px-4 sm:px-0">
          <div className="flex justify-between items-center py-6 md:space-x-10">
            <div className="flex justify-start cursor-pointer transform transition duration-500 hover:scale-125 ">
              <a href="/">
                <Image
                  priority
                  src={Logo}
                  className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]"
                  alt="Follow us on Twitter"
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              {menus.map((item, i) => {
                return (
                  <a
                    key={i}
                    href={item.path}
                    onClick={() => {
                      setSelectedMenu(item.path.replace("/", ""));
                    }}
                    className={` underLine_animation ${
                      item.path.replace("/", "") == selectedMenu
                        ? "selcted_menu"
                        : ""
                    }  p-2 min-w-[50px] flex justify-center items-center transform  transition duration-500 hover:scale-125`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
            <div className="hidden md:block ">
              <button className="border rounded-md p-2 bg-white text-black transform transition duration-200 hover:bg-blue hover:scale-125 ">
                Resume
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            open
              ? "opacity-100 scale-100 ease-out duration-500 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              : "opacity-0 scale-95 duration-500 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    priority
                    src={Logo}
                    className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]"
                    alt="Follow us on Twitter"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6 bg-white">
                <nav className="grid gap-y-8">
                  {menus.map((item, i) => {
                    return (
                      <a
                        key={i}
                        href={"#"}
                        onClick={() => {
                          setSelectedMenu(item.label);
                        }}
                        className={` ${
                          item.label == selectedMenu ? "selcted_menu" : ""
                        } text-black p-2 min-w-[50px] rounded-[4px] flex justify-center items-center transform  transition duration-500 hover:scale-125`}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                  {/* <a
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-black">
                      Experience
                    </span>
                  </a> */}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
