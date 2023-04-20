import React from "react";
import datax from "../assets/5.png";
import { motion } from "framer-motion";
import Typed from "react-typed";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id='home' className="mb-36"  >
    <div className="md:flex  h-fit md:mt-[10px]">
      <div className=" md:w-[35%]  md:ml-20 mx-auto  ">
        <img
          src={datax}
          alt=""
          className="md:h-[50%] h-[40%]  mt-10  mx-auto "
        />


        <div  className=" mb-1 sm:mb-[10%] mt-[-10%] ml-[-50px] w-[120%] h-[170px]
         sm:w-[100%] sm:h-[200px] md:h-[98px] lg:h-[20%] 
          md:w-[120%]   bg-blur bg-no-repeat bg-cover">

        </div>
     
     
        <p className=" text-5xl mt-[-18%]  md:mt-[-20px] z-40 bg-gradient-to-r from-[#00A9D1] to-[#009861] text-transparent bg-clip-text  font-bold text-center">
          <Typed
            strings={[" Make Your Data Experience Count"]}
            typeSpeed={20}
          />
        </p>
      </div>
      <div className="md:flex-1  mt-[-80px] md:my-[15%]">
        <p className="text-white text-3xl md:px-8 mt-24
         text-center mb-16">
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
              <span class="absolute top-[7px] right-[7px] w-[125%] sm:w-[110%] md:height-0 height-[90%] bg-gradient-to-r from-[#00A9D1] to-[#009861] border-y-2 border-transparent  min-[300px]:py-4 min-[600px]:py-3 px-4 text-white font-medium md:text-[25px] text-[20px] ">
              <Link to='/form' className=" whitespace-nowrap">  Join now</Link>
              
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Hero;