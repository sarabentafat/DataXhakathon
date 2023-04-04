import React from "react";
import dots from "../assets/dots.png";

function Card(props) {
  return (
    <div className="text-white  ">
      <div className=" border-4 bg-[#00022F] border-[#219DFD]   w-[90%]  h-[800px]  md:h-[500px]  p-10  mb-5 mx-auto justify-center  rounded-[25px] ">
        <img src={dots} alt="" className="w-[20%] " />
        <h3 className="text-[#F7D121] lg:text-[35px] text-[30px] font-medium my-5">
          {props.title}
        </h3>
        <p className="text-[25px] mb-7">{props.desc}</p>
      </div>
    </div>
  );
}

export default Card;
