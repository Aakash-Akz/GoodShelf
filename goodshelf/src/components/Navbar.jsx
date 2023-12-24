import React, { useState } from "react";
import {FaBarsStaggered, FaXmark} from 'react-icons/fa6'
import { FaWallet } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GoQuestion } from "react-icons/go";
import { MdRemoveShoppingCart } from "react-icons/md";
import "../App.css";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggler = () => {
      setIsMenuOpen(!isMenuOpen);
    };



  return (
    <div>
      <header className="bg-white container mt-3 mx-auto px-4">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div>
            <img
              className="w-32 cursor-pointer"
              src="https://goodshelf.app/assets/images/logo.png"
              alt="logo"
            />
          </div>
          <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
            <ul className="hidden md:flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a className="hover:text-red-300 text-red-500 underline-animation flex items-center" href="#">
                <span className="mr-2"><FaHandHoldingUsd/></span>
                  Refer & Save
                </a>
              </li>
              <li>
                <a className="hover:text-red-300 text-red-500 underline-animation flex items-center" href="#">
                <span className="mr-2"><FaWallet/></span>
                  Wallet
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400 underline-animation flex items-center" href="#">
                <span className="mr-2"><HiOutlineBuildingOffice2/></span>
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400 underline-animation flex items-center" href="#">
                <span className="mr-2"><GoQuestion/></span>
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400 underline-animation flex items-center" href="#">
                <span className="mr-2"><MdRemoveShoppingCart/></span>
                  Refunds/Cancellations
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-red-400 hidden lg:block text-white px-5 py-2 rounded-full hover:bg-black">
              Sign in
            </button>

            {/* Mobile Menu */}
            <div className="md:hidden block">
              <button onClick={handleMenuToggler}>
                {isMenuOpen ? (
                  <FaXmark className="w-5 h-5 text-primary " />
                ) : (
                  <FaBarsStaggered className="w-5 h-5 text-primary " />
                )}
              </button>
            </div>
          </div>
        </nav>


        <div className={`px-4 py-5 ${isMenuOpen ? "" : "hidden"} bg-white rounded-sm`}>
        <ul className="flex flex-col items-center md:gap-[4vw] gap-8">
        <li>
                <a className="hover:text-red-300 text-red-500 underline-animation flex items-center" href="#">
                <span className="mr-2"><FaHandHoldingUsd/></span>
                  Refer & Save
                </a>
              </li>
              <li>
                <a className="hover:text-red-300 text-red-500 underline-animation flex items-center" href="#">
                <span className="mr-2"><FaWallet/></span>
                  Wallet
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400 underline-animation flex items-center" href="#">
                <span className="mr-2"><HiOutlineBuildingOffice2/></span>
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400 underline-animation flex items-center" href="#">
                <span className="mr-2"><GoQuestion/></span>
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400 underline-animation flex items-center" href="#">
                <span className="mr-2"><MdRemoveShoppingCart/></span>
                  Refunds/Cancellations
                </a>
              </li>
              <li>
              <a className=" text-red-500 hover:text-red-400 px-5 py-2 ">
              Sign in
            </a>
              </li>
            </ul>

            
        </div>
      </header>
    </div>
  );
};

export default Navbar;
