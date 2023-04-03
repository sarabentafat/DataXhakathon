import React from "react";
import About from "./sections/About";


import Mentors from "./sections/Mentors";
import Agenda from "./sections/Agenda";

function App() {
  return (
    <div  className="w-full overflow-hidden bg-bgColor text-white">
<About/>
   <Mentors/>
 <Agenda/>

 
    </div>
  );
}

export default App;
