import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../index.css";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import datax from "../assets/5.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white md:fixed w-[100%] md:bg-gradient-to-b from-[#00996664] to-[#00022F] flex justify-between h-24 overflow-hidden mx-auto px-4 hello py-3">
      <img src={logo} alt="" className=" h-20 pt-2" />

      <ul className="justify-end hidden left-0  gap-8 text-[25px] md:flex mt-4 mr-3">
        <li className="p-1 w-fit cursor-pointer mx-auto mb-5  hover:bg-gradient-to-r from-[#00A9D1]  to-[#009861] bg-[length:100%_2px] bg-no-repeat bg-bottom">
          About
        </li>
        <li className="p-1 w-fit cursor-pointer mx-auto mb-5  hover:bg-gradient-to-r from-[#00A9D1]  to-[#009861] bg-[length:100%_2px] bg-no-repeat bg-bottom">
          Mentors
        </li>
        <li className="p-1 w-fit cursor-pointer mx-auto mb-5  hover:bg-gradient-to-r from-[#00A9D1]  to-[#009861] bg-[length:100%_2px] bg-no-repeat bg-bottom">
          Sponsors
        </li>
        <li className="p-1 w-fit cursor-pointer mx-auto mb-5  hover:bg-gradient-to-r from-[#00A9D1]  to-[#009861] bg-[length:100%_2px] bg-no-repeat bg-bottom">
          Agenda
        </li>
        <li className="p-1 w-fit cursor-pointer mx-auto mb-5  hover:bg-gradient-to-r from-[#00A9D1]  to-[#009861] bg-[length:100%_2px] bg-no-repeat bg-bottom mr-4 ">
          Contact us
        </li>
      </ul>
      <div onClick={handleNav} className="block  mt-4 md:hidden">
        {nav ? null : (
          <img src={menu} alt="" className="h-5 cursor-pointer mt-3 " />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed  left-0 top-0 w-[100%] h-fit border-r-gray-900 bg-bgColor ease-in-out duration-500"
            : "fixed top-[-100%] w-[100%] m-4 left-0 ease-in-out duration-1000"
        }
      >
        <div className="flex ">
          <img src={datax} alt="" className="h-9 mt-5 ml-5" />
          <div
            onClick={handleNav}
            className="block absolute right-10 mt-4 md:hidden"
          >
            {nav ? (
              <AiOutlineClose
                size={20}
                className="h-5 mt-3 mr-3 fill-green-600 stroke-[20px] cursor-pointer"
              />
            ) : null}
          </div>
        </div>
        <ul className="p-4  text-center">
          <li className="p-1 w-fit cursor-pointer mx-auto mb-5 text-[20px] hover:bg-gradient-to-r from-[#00A9D1]  to-[#009861] bg-[length:100%_2px] bg-no-repeat bg-bottom ">
            About
          </li>
          <li className="p-1 w-fit cursor-pointer mx-auto mb-5 text-[20px] hover:bg-gradient-to-r from-[#00A9D1]  to-[#009861] bg-[length:100%_2px] bg-no-repeat bg-bottom ">
            Mentors
          </li>
          <li className="p-1 w-fit cursor-pointer mx-auto mb-5 text-[20px] hover:bg-gradient-to-r from-[#00A9D1]  to-[#009861] bg-[length:100%_2px] bg-no-repeat bg-bottom ">
            Sponsors
          </li>
          <li className="p-1 w-fit cursor-pointer mx-auto mb-5 text-[20px] hover:bg-gradient-to-r from-[#00A9D1]  to-[#009861] bg-[length:100%_2px] bg-no-repeat bg-bottom ">
            Agenda
          </li>
          <li className="p-1 w-fit cursor-pointer mx-auto mb-5 text-[20px] hover:bg-gradient-to-r from-[#00A9D1]  to-[#009861] bg-[length:100%_2px] bg-no-repeat bg-bottom ">
            Contact us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
