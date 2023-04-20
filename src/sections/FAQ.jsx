import React from "react";
import Card from "../components/Card";
import { faq } from "../constants/data";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import datax from "../assets/datax.png";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import robot from "../assets/roboto.png";
function FAQ() {
  return (
    <section className="mb-36" > 
    <div className="text-white  ">
      <div className="flex items-center justify-center  mb-10 ">
        <motion.nav variants={navVariants} initial="hidden" whileInView="show">
          <div className="flex justify-center items-center">
            <div className="relative  h-16 w-36">
              <div className="absolute  w-full h-full border-2 border-yellow-400 rounded-rcorners1"></div>
              <div
                className=" absolute  w-full h-full border-2 border-yellow-400  rounded-special2 "   >
                <h2 className="font-extrabold pt-2 pl-8 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                  FAQ
                </h2>
              </div>
            </div>
          </div>
        </motion.nav>
        <img
          src={robot}
          alt=" "
          className="md:h-[250px] h-[200px] absolute  
          transform -rotate-12 sm:rotate-0  left-[-50px]  sm:left-[590px] md:left-[840px]
          
          "
        />
      </div>


      <div className="flex items-center relative  justify-center">
       
        <CarouselProvider
          className="flex"
          isIntrinsicHeight={true}
          totalSlides={4}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute  z-30 left-0 sm:left-[15%] top-[40%] md:top-[50%] cursor-pointer"
              id="prev"
            >
              <svg
                width={30}
                height={30}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
          <div className=" relativ flex items-center justify-center cursor-pointer">
            <Slider className="sm:w-[35%] md:w-[40%]  w-[30%]" >
              {faq.map((post) => {
                return (
                  <Slide
                    key={post.index}
                    className="justify-center items-center "
                  >
                    <Card title={post.title} desc={post.description} />
                  </Slide>
                );
              })}
            </Slider>
          </div>
          <ButtonNext
            role="button"
            aria-label="slide forward"
            className="absolute  right-0 sm:right-[15%] top-[40%] md:top-[50%]  "
            id="next"
          >
            <svg
              width={30}
              height={30}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonNext>
        </CarouselProvider>
      </div>
    </div>
    <div className=" h-full mb-[150px] mt-4">
      <img src={datax} alt="" className="mx-auto w-[60%]" />
    </div>
    </section>
  );
}

export default FAQ;
