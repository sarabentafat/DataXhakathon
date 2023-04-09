import React from "react";
import About from "./sections/About";
import Mentors from "./sections/Mentors";
import Agenda from "./sections/Agenda";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Sponsors from "./sections/Sponsors";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import datax from "./assets/datax.png";
function App() {
  return (
    <div className="w-full overflow-hidden bg-bgColor text-white">
      <Navbar />
      <Hero />
      <About />
      <Mentors />
      <Sponsors />
      <Agenda />
      <FAQ />
      <div className="md:h-screen h-fit py-20 md:py-3 mx-auto">
        {" "}
        <img src={datax} alt="" className="mx-auto w-[60%]" />{" "}
      </div>
      <Contact />
    </div>
  );
}

export default App;
