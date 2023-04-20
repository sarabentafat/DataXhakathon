import React from 'react'
import About from '../sections/About'
import Hero from '../sections/Hero'
import Mentors from '../sections/Mentors'
import Sponsors from '../sections/Sponsors'
import Agenda from '../sections/Agenda'
import Navbar from '../components/Navbar'
import Contact from '../sections/Contact'
 import Faq from '../sections/Faq'
import styles from '../style/style'
function Home() {
  return (
    <div className='relative z-10 bg-homi bg-cover sm:bg-home '>
    <Navbar/>
    <div className={`${styles.padding}  `}> 
     <Hero/>
     <About/>
     <Mentors/>
     <Sponsors/>
     <Agenda/> 
     <Faq/>
     <Contact/> 
    </div>
    </div>
  )
}

export default Home