import React from "react";
import { motion } from "framer-motion";
import Typed from "react-typed";
import { navVariants } from "../utils/motion";
import { sponsors } from "../constants/data";
import line1 from '../assets/LineVer.svg'
import line2 from '../assets/Linehor.svg'


function Sponsors() {
  return (
    <section id='sponsors' lassName="mb-36 relative z-10 mt-10"  >
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
      
      <div className="mt-20 relative">
        <img className="absolute w-full  top-[40%]" src={line1} alt="yellowline" />
        <img className=" absolute top-[-35px] h-[95%]  right-[50%]" src={line2} alt="yellowline" />
        <div className="grid grid-cols-2 gap-6 md:gap-10 ">
          {sponsors.map((sponsor) => (
                <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.1,
                }}
              >
            <div className="mb-20 ml-4    ">
              <div className="flex flex-row  ">
                <div className="">
                  <img src={sponsor.image} className=" h-[180px] w-[170px] md: " alt="sponsor imagone " />
                  </div>
                <div className=" font-bold ml-6"> 
                <h1 className="text-2xl">{sponsor.name}</h1>
                <p className="whitespace-wrap "> {sponsor.details}</p></div>
              </div>
           


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
