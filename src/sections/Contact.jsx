import React from "react";
import { socials } from "../constants/data";
import sub from "../assets/submit.png";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import ArrowTop from "../assets/ArrowTop.svg"
import ArrowToRight from "../assets/ArrowToRight.svg"

function Contact() {
  return (
    <BrowserRouter>
    <div className="" id="contact">
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
          {socials.map((social) => (

                    <li className="flex cursor-pointer  ">     
                    <a href={social.url} className="flex gap-3"> 
                      <img
                        src={social.image}
                        alt={social.name}
                        className=""
                      />
                      <p className="">{social.name}</p>

                    </a>
                  </li>
      ))}
                            {/* <Link to="//www.instagram.com/soai_bejaia/">test</Link>
                      <Link to="//www.instagram.com/soai_bejaia/">test</Link> */}

 
          </ul>
        </div>
        <div className="flex-1">
          <form action="" className="space-y-20 py-6">
            <input
              type="email"
              placeholder="Email address"
              className="border-b-2 border-white bg-transparent w-[90%] py-2 md:text-[25px] focus:outline-none "
            />
            <div className="flex relative  mr-[5px]">
              <input
                type="text"
                placeholder="Your text"
                className="border-b-2 border-white bg-transparent w-[90%] py-2 md:text-[25px] focus:outline-none"
              />
              <button type="submit">
                <img src={ArrowToRight} alt="" className="absolute top-0 right-[10%] bottom-0 " />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center">
      <Link to='#home'>   
      <img src={ArrowTop} alt="scrolltop"  className="mb-4"/>
      </Link>
  
    </div>
    </BrowserRouter>
  );
}

export default Contact;
