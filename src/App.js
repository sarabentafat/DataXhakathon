import React from "react";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/Form"
import Mentors from "./sections/Mentors";
import Navbar from "./components/Navbar";
import About from "./sections/About";

function App() {
  return (
    <div className="bg-hero bg-no-repeat bg-contain
      text-white float-none  w-full overflow-hidden">

      <BrowserRouter>
        <Routes>
        <Route path="/" index element={<Home/> } />
          <Route path="/form" element={<Form/>  } />
        </Routes>
      </BrowserRouter>

   
 
    </div>
  );
}


export default App;
