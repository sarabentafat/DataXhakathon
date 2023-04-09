import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../index.css";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import datax from "../assets/5.png";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  let Links = [
    { name: "About", link: "#about" },
    { name: "Mentors", link: "#mentors" },
    { name: "Sponsors", link: "#sponsors" },
    { name: "Agenda", link: "#agenda" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <BrowserRouter>
      <div className=" bg-bgColor z-50 text-white md:fixed w-[100%] md:bg-gradient-to-b from-[#00996664] to-[#00022F] flex justify-between h-24 overflow-hidden mx-auto px-4 hello py-3">

        <Link to='#home'> <img src={logo} alt="" className=" h-20 pt-2" /></Link>

        <ul className="justify-end hidden left-0  gap-8 text-[25px] md:flex mt-4 mr-3">
          {Links.map((link) => (
            <div className=" p-1 w-fit cursor-pointer mx-auto mb-5  hover:bg-gradient-to-r from-[#00A9D1]  to-[#009861] bg-[length:100%_2px] bg-no-repeat bg-bottom">
              <Link smooth className=" mr-3" to={link.link}>
                {link.name}
              </Link>
            </div>
          ))}
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
        
            {Links.map((link) => (
            <li  className="p-1 w-fit cursor-pointer mx-auto mb-5 text-[20px] hover:bg-gradient-to-r from-[#00A9D1]  to-[#009861] bg-[length:100%_2px] bg-no-repeat bg-bottom ">
              <Link smooth className=" mr-3" to={link.link} onClick={()=>setNav(!nav)}>
                {link.name}
              </Link>
            </li>
          ))}
            
          </ul>
        </div>
      </div>
    </BrowserRouter>

  );
};

export default Navbar;
