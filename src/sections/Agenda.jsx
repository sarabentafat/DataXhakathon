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
        <section id='agenda'>
            <div className='max-w-[1400px] h-screen w-full m-auto py-16 px-4 relative group text-center'>
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
                <div className='mt-16'>
                <div className='whitespace-nowrap overflow-hidden absolute mt-3 text-[#9077DB] text-2xl   '>----------------------------------------------------------------------------------------------------------------------------------------</div>

                <div className='whitespace-nowrap overflow-hidden absolute mt-[70px] text-[#9077DB] text-2xl '>-------------------------------------------------------------------------------------------------------------------------------------</div>
                <div className='whitespace-nowrap overflow-hidden absolute mt-32 text-[#9077DB] text-2xl '>----------------------------------------------------------------------------------------------------------------------------------------</div>
                <div className='relative flex items-center'>
                    <div className='flex flex-col mr-10 '>
                        <div className=' w-[130%] font-bold text-2xl rounded-rcorners1 bg-[#9077DB] p-2 mb-2 '>DAY1

                        </div>
                        <div className=' w-[130%] font-bold text-2xl rounded-rcorners1 bg-[#9077DB] p-2 mb-2'>DAY2</div>
                        <div className=' w-[130%] font-bold text-2xl rounded-rcorners1 bg-[#9077DB] p-2'>DAY3</div>
                    </div>
                    <div
                        id='slider'
                        className='h-[200px] absolute top-[-25px] left-28  w-full  overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                    >
                        {data.map((item) => (
                      
                            <div key={item.id}        className='  w-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                            >
                                <div className=' absolute top-0 text-center  font-bold   text-2xl uppercase '>{item.hour}   </div>
                                <div className={` text-center w-[150px] absolute top-[50px]   bg-gradient-to-r rounded-sm  font-bold text-2xl from  from-[${item.color}] to-transparent `}>{item.events[0].day1}</div>
                                <div className={`p-1 absolute w-[150px] top-[100px]  bg-gradient-to-r rounded-sm  font-bold text-2xl from  from-[${item.color}] to-transparent `}>{item.events[0].day2}</div>
                                <div className={`p-1 absolute w-[150px] top-[150px]  bg-gradient-to-r rounded-sm  font-bold text-2xl from-[${item.color}] to-transparent `}>{item.events[0].day3}</div>

                   
                            </div>


                        ))}
                    </div>





                 
                </div>
                </div>

            </div>
            </section>
    );
}

export default Agenda;