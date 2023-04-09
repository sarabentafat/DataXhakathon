import React, { useState } from 'react';
import { mentors } from '../constants/data'
import ArrowLeft from '../assets/ArrowLeft.svg'
import ArrowRight from '../assets/ArrowRight.svg'

import { motion } from 'framer-motion';
import styles from '../style';
import { staggerContainer, fadeIn } from '../utils/motion';
function Cards() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstMentor = currentIndex === 0;
        const newIndex = isFirstMentor ? mentors.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastMentor = currentIndex === mentors.length - 1;
        const newIndex = isLastMentor ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className='max-w-[1400px] w-full m-auto py-16 px-4  text-center'>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} `}
            >
                <div className='mx-auto flex md:flex-row flex-col  ' >
                    <div className='flex-1'>
                        <motion.div
                            variants={fadeIn('right', 'tween', 0.2, 1)}
                            className="flex-[0.95] flex justify-center flex-col"
                        >
                            <div className='relative  flex justify-center items-center'>
                                <img src={ArrowRight} alt="" onClick={prevSlide} className="absolute bottom-[50%] left-[7%]  cursor-pointer lg:hidden" />
                                <img src={mentors[currentIndex].image} alt={mentors[currentIndex].name} />
                                <img src={ArrowLeft} alt="" onClick={nextSlide} className="absolute bottom-[50%] right-[10%] cursor-pointer lg:hidden" />
                            </div>
                        </motion.div>

                    </div>

                    <div className='flex-1 pt-10 md:pt-32 h-auto '>
                        <motion.div
                            variants={fadeIn('left', 'tween', 0.2, 1)}
                            className=" flex justify-center flex-col "
                        >


                            <div className='   font-extrabold  text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500'>
                                {mentors[currentIndex].name}
                            </div>
                            <div className='font-bold mt-5 p-3'>
                                {mentors[currentIndex].details}</div>
                            <div className='hidden   text-yellow-400 md:flex justify-center items-center  '>
                               
                                    <img src={ArrowRight} alt="" onClick={prevSlide} className="cursor-pointer" />
                                    {currentIndex} / {mentors.length}

                                <img src={ArrowLeft} alt="" onClick={nextSlide} className="cursor-pointer" />
                                </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>





        </div>
    );
}

export default Cards;