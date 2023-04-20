
import robot from '../assets/robota.svg'
import React from 'react'
import { motion } from 'framer-motion';
import styles from '../style/style';
import { TypingText } from '../components/CustomTexts'
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';
import { navVariants } from '../utils/motion';
import starss from '../assets/starss.png'
function About() {
  return (
    <section id='about' lassName="mb-36"  >
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
      >
 <div className='flex justify-center items-center'>
        <div className="relative  h-16 w-40">
  <div className="absolute  w-full h-full border-2 border-yellow-400 rounded-rcorners1"></div>
  <div className=" absolute  w-full h-full border-2 border-yellow-400  rounded-special2 
  ">
           <h2 className="font-extrabold pt-2 pl-2 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
       ABOUT
      </h2>

  </div>

</div>
</div>



      </motion.nav>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex md:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TypingText title="| what's dataX ?" />
          <h1 className='font-bold text-2xl'>DataX is an ultimate datathon competition for data science enthusiasts hosted by school Of AI Bejaia club .
          </h1>
          <p>At DataX, we provide a unique platform for individuals to showcase their analytical skills, creativity, and problem-solving abilities.
            Our competition challenges participants to work on real-world data challenges and develop innovative solutions that can have a significant impact on society.</p>
        </motion.div>


        <motion.div
          variants={planetVariants('right')}
          className={`flex-1 ${styles.flexCenter} flex justify-center items-center`}
        >
          
          <img
            src={robot}
            alt="get-started"
            className='ml-[-50px] mt-[-100px] '
          
          />
        </motion.div>
      </motion.div>


    </section>


  )
};


export default About