import React from 'react'
import styles from '../style'
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import Cards from '../components/Cards';
function Mentors() {
    return (
        <section id='mentors'>
        <div className='max-w-[1400px] w-full m-auto py-16 px-4  text-center'>
            <div className="flex justify-center items-center">
                <motion.nav
                    variants={navVariants}
                    initial="hidden"
                    whileInView="show"
                    className={`${styles.xPaddings}  `}
                >

                    <div className='flex justify-center items-center mb-[-40px]'>
                        <div className="relative  h-16 w-52">
                            <div className="absolute  w-full h-full border-2 border-yellow-400 rounded-rcorners1"></div>
                            <div className=" absolute  w-full h-full border-2 border-yellow-400  rounded-special2 
  ">
                                <h2 className="font-extrabold pt-2 pl-2 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                                    MENTORS
                                </h2>

                            </div>

                        </div>
                    </div>

                </motion.nav>
            </div>
            <Cards />


        </div>
        </section>
    )
}

export default Mentors