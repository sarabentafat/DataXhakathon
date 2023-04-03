import React from 'react';
import { motion } from 'framer-motion';
import styles from '../style';
import { navVariants } from '../utils/motion';
import { data } from '../constants/data';


function Agenda() {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <>
            <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group text-center'>
                <div className="flex justify-center items-center">
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
                                        Agenda
                                    </h2>

                                </div>

                            </div>
                        </div>

                    </motion.nav>

                </div>
                <div className='whitespace-nowrap overflow-hidden absolute mt-3 text-[#9077DB] text-2xl  '>----------------------------------------------------------------------------------------------------------------------------------------</div>

                <div className='whitespace-nowrap overflow-hidden absolute mt-[70px] text-[#9077DB] text-2xl '>-------------------------------------------------------------------------------------------------------------------------------------</div>
                <div className='whitespace-nowrap overflow-hidden absolute mt-32 text-[#9077DB] text-2xl '>----------------------------------------------------------------------------------------------------------------------------------------</div>
                <div className='relative flex items-center'>
                    <div className='flex flex-col mr-10'>
                        <div className=' w-[130%] font-bold text-2xl rounded-rcorners1 bg-[#9077DB] p-2 mb-2 '>DAY1

                        </div>
                        <div className=' w-[130%] font-bold text-2xl rounded-rcorners1 bg-[#9077DB] p-2 mb-2'>DAY2</div>
                        <div className=' w-[130%] font-bold text-2xl rounded-rcorners1 bg-[#9077DB] p-2'>DAY3</div>
                    </div>

                    <div onClick={slideLeft} size={40} className='cursor-pointer hidden' >icon</div>
                    <div
                        id='slider'
                        className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                    >
                        {data.map((item) => (
                      
                            <div key={item.id}
                                className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                            >
                                <div className='font-bold mb-8'>{item.hour}
                                </div>
                                <div className={` mb-5 p-1 bg-gradient-to-r rounded-sm m-1 font-bold text-2xl from-[${item.color}] to-transparent `}>{item.events[0].day2}</div>
                                <div className={`p-1 bg-gradient-to-r rounded-sm m-1 font-bold text-2xl from-[${item.color}] to-transparent `}>{item.events[0].day3}</div>

                            </div>


                        ))}
                    </div>

                    <div onClick={slideRight} size={40} className='cursor-pointer hidden'>icon</div>
                </div>

            </div>
        </>
    );
}

export default Agenda;