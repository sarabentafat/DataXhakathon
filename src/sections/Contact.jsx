import React from "react";
import fb from "../assets/fb.png";
import lin from "../assets/in.png";
import insta from "../assets/insta.png";
import path from "../assets/map.png";
import sub from "../assets/submit.png";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

function Contact() {
  return (
    <div className="h-screen w-[100%]">
      <div className="flex justify-center items-center">
        <motion.nav variants={navVariants} initial="hidden" whileInView="show">
          <div className="flex justify-center items-center">
            <div className="relative  h-16 w-[200px]">
              <div className="absolute  w-full h-full border-2 border-yellow-400 rounded-rcorners1"></div>
              <div
                className=" absolute  w-full h-full border-2 border-yellow-400  rounded-special2 
  "
              >
                <h2 className="font-extrabold pt-2 pl-2 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                  Contact us
                </h2>
              </div>
            </div>
          </div>
        </motion.nav>
      </div>

      <h4 className="underline underline-offset-2 md:text-[30px] text-[25px] md:ml-20 ml-10 py-10  text-white ">
        Feel free to get in touch with us !
      </h4>
      <div className="flex md:pl-20 pl-10 text-white ">
        <div className="flex-1">
          <ul className="space-y-6 md:text-[22px] text-[18px] py-10 text-[#FFFFFF37] font-medium">
            <li className="flex ">
              {" "}
              <a href="" className="flex md:gap-7 gap-3">
                {" "}
                <img
                  src={insta}
                  alt=""
                  className="h-[30px] w-[30px] mt-1"
                />{" "}
                <p className="">School of ai bejaia</p>{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="" className="flex md:gap-7 gap-3 ">
                {" "}
                <img src={lin} alt="" className="h-[30px] w-[30px] mt-1" />{" "}
                <p>School of ai bejaia</p>{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="" className="flex md:gap-7 gap-3 ">
                {" "}
                <img src={fb} alt="" className="h-[30px] w-[30px] mt-1" />{" "}
                <p>School of ai bejaia</p>{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="" className="flex md:gap-7 gap-3 ">
                {" "}
                <img
                  src={path}
                  alt=""
                  className="h-[30px] w-[30px] mt-1"
                />{" "}
                <p>School of ai bejaia</p>{" "}
              </a>{" "}
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <form action="" className="space-y-20 py-6">
            <input
              type="email"
              placeholder="Email address"
              className="border-b-2 border-white bg-transparent w-[90%] py-2 md:text-[25px] focus:outline-none "
            />
            <div className="flex mr-[5px]">
              <input
                type="text"
                placeholder="Your text"
                className="border-b-2 border-white bg-transparent w-[90%] py-2 md:text-[25px] focus:outline-none"
              />
              <button type="submit">
                {" "}
                <img src={sub} alt="" className="absolute right-5 " />{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
