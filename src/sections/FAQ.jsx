import React from "react";
import Card from "../components/Card";
import { faq } from "../constants/data";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

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
    <div className="text-white  container mx-auto ">
      <div className="flex items-center justify-center  mb-10 ">
        <motion.nav variants={navVariants} initial="hidden" whileInView="show">
          <div className="flex justify-center items-center">
            <div className="relative  h-16 w-24">
              <div className="absolute  w-full h-full border-2 border-yellow-400 rounded-rcorners1"></div>
              <div
                className=" absolute  w-full h-full border-2 border-yellow-400  rounded-special2 
  "
              >
                <h2 className="font-extrabold pt-2 pl-2 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                  FAQ
                </h2>
              </div>
            </div>
          </div>
        </motion.nav>
        <img
          src={robot}
          alt=" "
          className="md:h-[250px] h-[200px] absolute md:right-[15%] left-0 "
        />
      </div>
      <div className="hidden items-center md:flex  justify-center w-[70%] h-full sm:py-8 mx-auto">
        <CarouselProvider
          isIntrinsicHeight={true}
          totalSlides={4}
          visibleSlides={1.25}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute  z-30 top-[35%] left-20 ml-[-40px] focus:outline-none  cursor-pointer"
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
            <Slider className="w-[70%]">
              {faq.map((post) => {
                return (
                  <Slide key={post.index} className="">
                    <Card title={post.title} desc={post.description} />.
                  </Slide>
                );
              })}
            </Slider>

            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 top-[35%] right-20 mr-[-40px] focus:outline-none cursor-pointer "
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
          </div>
        </CarouselProvider>
      </div>

      <div className="flex items-center md:hidden  justify-center w-[100%] h-full sm:py-8 mx-auto">
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
            className="absolute cursor-pointer left-[10%] mt-[30%]"
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
          <div className=" relative flex items-center justify-center">
            <Slider className=" w-[40%]">
              {faq.map((post) => {
                return (
                  <Slide
                    key={post.index}
                    className="justify-center items-center mx-auto"
                  >
                    <Card title={post.title} desc={post.description} />.
                  </Slide>
                );
              })}
            </Slider>
          </div>
          <ButtonNext
            role="button"
            aria-label="slide forward"
            className="absolute right-[10%] mt-[30%] "
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
  );
}

export default FAQ;
