import React from "react";
import datax from "../assets/5.png";
import blur from "../assets/blur.png";
import { motion } from "framer-motion";
import Typed from "react-typed";

function Hero() {
  return (
    <div className="md:flex grid h-fit md:h-screen w-[100%] md:mt-[100px]">
      <div className=" md:w-[35%]  md:ml-20 mx-auto ml-0 w-[100%]  ">
        <img
          src={datax}
          alt=""
          className="md:h-[50%] h-[40%]  mt-10  mx-auto "
        />
        <img src={blur} className="mt-[-70px] ml-12 mx-auto " alt="" />
        <p className=" mt-[-40px] bg-gradient-to-r from-[#00A9D1] to-[#009861] text-transparent bg-clip-text md:text-[45px] text-[40px] mx-10 md:mx-0 font-bold text-center">
          <Typed
            strings={[" Make your data experience count"]}
            typeSpeed={20}
          />
        </p>
      </div>
      <div className="md:py-[15%]">
        <p className="text-white md:text-[29px] text-[25px] md:px-8 px-3 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Are you ready to analyze some data ? <br /> Join DataX now and
            compete against the best !
          </motion.div>
        </p>
        <div className="mx-auto justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.6,
            }}
          >
            <button class="relative border-2 border-[#00A9D1] w-[24%]  py-[40px] px-10 ">
              <span class="absolute top-[7px] right-[7px] w-[110%] md:height-0 height-[90%] bg-gradient-to-r from-[#00A9D1] to-[#009861] border-y-2 border-transparent  min-[300px]:py-4 min-[600px]:py-3 px-4 text-white font-medium md:text-[25px] text-[20px] ">
                Join now
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
