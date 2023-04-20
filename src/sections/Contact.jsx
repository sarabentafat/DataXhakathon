
import { socials } from "../constants/data";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { HashLink as Link } from "react-router-hash-link";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ArrowTop from "../assets/ArrowTop.svg"
import ArrowToRight from "../assets/ArrowToRight.svg"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('soaisara', 
    'template_btxsotf', form.current, 
    'MmzvpF0vhqnvSeR7d')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
       <section  id="contact"  >
    <div>
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
      </div>
          <h4 className="mt-8 underline underline-offset-2 md:text-[30px] text-[25px] pt-10  text-white ">
         Feel free to get in touch with us !
      </h4>
      <div className="flex  text-white ">
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
          </ul>
        </div>
        <div className="flex-1">
        <form ref={form} onSubmit={sendEmail}
    className=" space-y-20 py-6"
    >
      <input type="email" name="user_email"
      required
      placeholder="Email address"
          className="border-b-2 border-white bg-transparent w-[90%] py-2 md:text-[25px] focus:outline-none "
      /> 
      <div className="flex relative  mr-[5px]">
      <input name="message" required
      placeholder="Your text"
          className=" border-b-2  border-white bg-transparent w-[75%]
     
          md:w-[82%] lg:w-[85%]
          sm:w-[80%]
          md:text-[25px] focus:outline-none "
      />

     <button  type="submit" value="Send">
                <img 
                 src={ArrowToRight} alt="" className="
                 border-b-2  border-white pb-2
                 absolute  right-[10%] bottom-0 " />
              </button>
       </div>
    </form>

        </div>
      </div>
  
   
    <div className="flex justify-center items-center">
      <Link smooth to='#home'>   
      <img src={ArrowTop} alt="scrolltop"  className="mb-4 "/>
      </Link>
  
    </div>
   

      </section>


  );
};
export default Contact