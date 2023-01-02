import Link from "next/link";
import React, { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi"
import {RxCross1} from "react-icons/rx"
import { CgProfile } from "react-icons/cg";

const DropdownHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState(false)
  const [show , setShow] = useState(false)

  const hendelClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed w-full border-b-4 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div onClick={()=> {setState(!state); setShow(!show)}} className="absolute inset-y-0 left-0 flex items-center p-2 text-2xl cursor-pointer sm:hidden">
            { state ?  <i className=""><RxCross1/></i>:<GiHamburgerMenu/>}
         
          </div>
          <div className="hidden sm:block cursor-pointer ">
            <Link href={"/"}>
              <h2 className="border-b-2 font-bold border-yellow-500">
                My Port <span className="text-blue-500">folio</span>
              </h2>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href={"/home/home"}
                  className=" text-black px-3 py-2 border-b-2 border-indigo-500 w-12 text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  href={"/services"}
                  className=" text-black hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </Link>
                <Link
                  href={"/portfolio"}
                  className=" text-black hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Portfolio
                </Link>

                <Link
                  href={"/testimonials"}
                  className=" text-black hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Testimonials
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link href={"/contectForm/contectForm"}>
              <button
                className="bg-gray-500 hover:bg-blue-700 ml-10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Contect me
              </button>
            </Link>
            <button
              onClick={hendelClick}
              type="button"
              className="rounded  ml-5   p-1 text-gray-400 border-2 border-slate-400 focus:outline-none "
            >
              <CgProfile className="text-2xl hover:text-blue-700 text-gary-800" />
            </button>

            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                </button>
              </div>
              {isOpen && (
                <div
                  className="absolute top-7 right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="user-menu-item-1"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden" id="mobile-menu">
        <div className={`space-y-1 ${show ? 'block' : 'hidden'}  px-2 pt-2 pb-3`}>
          <a
            href="#"
            className="text-gray-500 text-white block px-3 py-2 rounded-md  border-blue-400 text-base font-medium"
            aria-current="page"
          >
            Home
          </a>

          <a
            href="#"
            className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Servece
          </a>

          <a
            href="#"
            className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Portfolio
          </a>

          <a
            href="#"
            className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Testimonial
          </a>
        </div>
      </div>
    </nav>
  );
};

export default DropdownHeader;
