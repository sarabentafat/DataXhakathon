import React from "react";
import dots from "../assets/dots.png";

function Card(props) {
  return (
    <div className="text-white   ">
      <div className=" border-4 bg-[#00022F] border-[#219DFD] p-6  mb-5 justify-center rounded-3xl ">
        <img src={dots} alt="" className="w-[20%] " />
        <h3 className="text-[#F7D121]  text-3xl font-medium my-5">
          {props.title}
        </h3>
        <p className="text-2xl mb-7">{props.desc}</p>
      </div>
    </div>
  );
}

export default Card;