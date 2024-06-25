import React from "react";
import img from "./v32.png";
import imag from "./v31.png";

export const Content = () => {
  return (
    < >
      <div className=" flex justify-between justify-evenly content-center  rounded-md absolute bg-blue-700 h-[600px] w-[99%] ml-4 ">
        <div className="m-auto relative ">
         <div className=" relative "> <img src={img} className="h-[350px] rounded-md bg-cover"/></div>
      
        <div className="absolute -mt-64 ml-72 size-[120px] bg-white p-3 -rotate-45">
          <img src={imag} className=" rounded-md"/>
        </div>
        </div>

        <div className=" text-left m-auto ml-3">
          <p className="text-4xl text-white text-solid ">
             Track your progress with <br></br>our advanced site.
          </p>
          <p className="text-xl text-white mt-4">We share common trends and strategies for <br></br>
          improvingg your rental income and making sure <br/>you stay in high demand. </p><br></br>
          <p className="text-2xl text-white text-solid">Start shopping &rarr;</p>
        </div>
      </div>
    </>
  );
};
