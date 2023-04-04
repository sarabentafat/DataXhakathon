import React from "react";
import saa from "../assets/saa.png";
import { motion } from "framer-motion";
import Typed from "react-typed";
import { navVariants } from "../utils/motion";

function Sponsor(props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay: props.delay,
      }}
    >
      <div className="md:flex">
        <div className="flex md:w-[100%] md:mx-6  gap-3">
          <img src={saa} alt="" className="md:h-[100px] h-[70px] mb-4" />
          <h2 className="md:hidden block mt-3 text-[20px]">SAA ASSURANCES</h2>
        </div>
        <div>
          <h2 className="hidden md:block p-6">SAA ASSURANCES</h2>
          <p className="md:pl-4">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            asperiores, minima cum vero libero sequi eum velit!
          </p>
        </div>
      </div>
    </motion.div>
  );
}
function Sponsors() {
  return (
    <div className=" h-fit overflow-hidden ">
      <motion.nav variants={navVariants} initial="hidden" whileInView="show">
        <div className="flex justify-center items-center">
          <div className="relative  h-[80px] w-[200px]">
            <div className="absolute  w-full h-full border-2 border-yellow-400 rounded-rcorners1"></div>
            <div className=" absolute  w-full h-full border-2 border-yellow-400  rounded-special2">
              <h2 className="font-extrabold pt-2 pl-2 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                Sponsors
              </h2>
            </div>
          </div>
        </div>
      </motion.nav>
      <div className="mt-20 mb-20">
        <div className="spb  mx-auto text-white flex w-[90%]  gap-10">
          {" "}
          <div className="ml-5">
            <Sponsor delay={0.3} />
          </div>{" "}
          <div className="line h-[200%]"></div>
          <div className="ml-5 md:ml-20">
            <Sponsor delay={0.5} />
          </div>
        </div>
        <div className=" mx-auto text-white flex w-[90%]  gap-10 mt-6">
          <div className="ml-5">
            {" "}
            <Sponsor delay={0.7} />
          </div>{" "}
          <div className="ml-5 md:ml-20">
            <Sponsor delay={0.9} />
          </div>
        </div>
      </div>
      <p className="text-[#F7D121] text-center mb-5  md:text-[35px] text-[25px] ">
        {" "}
        <Typed
          strings={["BIG THANKS TO OUR SPONSORS"]}
          typeSpeed={20}
          backSpeed={10}
          className="text-[#F7D121]  mb-5   md:text-[35px] text-[25px] "
          loop
        />
      </p>
    </div>
  );
}

export default Sponsors;
