import React from "react";
import saa from "../assets/saa.png";
import { motion } from "framer-motion";
import Typed from "react-typed";
import { navVariants } from "../utils/motion";
import { sponsors } from "../constants/data";
import styles from "../style";
import line1 from '../assets/LineVer.svg'
import line2 from '../assets/Linehor.svg'


function Sponsors() {
  return (
    <section id='about' className={`${styles.padding} relative z-10 mt-10`}>
      <motion.nav variants={navVariants} initial="hidden" whileInView="show">
        <div className="flex justify-center items-center">
          <div className="relative  h-[80px] w-[200px]">
            <div className="absolute  w-full h-full border-2 border-yellow-400 rounded-rcorners1"></div>
            <div className=" absolute  w-full h-full border-2 border-yellow-400  rounded-special2">
              <h2 className="font-extrabold pt-3 pl-4 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                Sponsors
              </h2>
            </div>
          </div>
        </div>
      </motion.nav>
      
      <div className="mt-20">
        <img className="absolute w-[88%] top-[55%]" src={line1} alt="" />
        <img className=" top-[26%] h-[380px] absolute right-[48%]" src={line2} alt="" />
        <div className="grid grid-cols-2 gap-6  ">
          {sponsors.map((sponsor) => (
                <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.1,
                }}
              >
            <div className="mb-20 ml-4 ">
              <div className="flex flex-row">
                <div className="flex-1">
                  <img src={sponsor.image} className="w-[50%]" alt="sponsor imagone " /></div>
                <div className="flex-1"> <p className="ml-2 md:ml-10 ">{sponsor.name}</p></div>
              </div>
              <p className="whitespace-wrap m-1   "> {sponsor.details}</p>


            </div>
            </motion.div>


          ))}

        </div>
      </div>


      <p className="text-[#F7D121] text-center mb-5  md:text-[35px] text-[25px] ">

        <Typed
          strings={["BIG THANKS TO OUR SPONSORS"]}
          typeSpeed={20}
          backSpeed={10}
          className="text-[#F7D121]  mb-5   md:text-[35px] text-[25px] "
          loop
        />
      </p>

    </section>
  );
}

export default Sponsors;
