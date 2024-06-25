import React from "react";
import bgimg from "./v1.png"
import bimg from "./v2.png"
import cimg from "./v3.png"
import dimg from "./v4.png"
import eimg from "./v5.png"
import fimg from "./v6.png"
 export const Category = () => {
  return (
    <div>
    <div className=" grid lg:grid-cols-3 gap-9 w-[800px] h-[600px] m-auto p-6   text-justify relative -mt-24 ">
        
      <div className="bg-gray-300 py-5 text-center  border-r-purple-50 h-[250px] p-14 rounded-md">
        <h4 className="text-left">Living Room</h4>
        <h5 className=" text-left">items 26</h5>
        <img src={bgimg}/>
       </div>
      <div className="bg-gray-300 py-5  text-center h-[250px] p-9 rounded-md ">
      <h4 className="text-left"> Dining Room</h4>
        <h5 className="text-left">21 items</h5>
        <img src={bimg}/>
      </div>

      <div className="bg-gray-300 py-5 text-center h-[250px] p-16 rounded-md">
      <h4 className="text-left"> Bed Room</h4>
        <h5 className=" text-left">24 items</h5>
        <img src={cimg}/>
      </div>
      <div className="bg-gray-300 py-5 text-center h-[250px] p-14 rounded-md ">
      <h4 className="text-left">Kitchen</h4>
        <h5 className="text-left">items 22</h5>
        <img src={dimg}/>
      </div>
      <div className="bg-gray-300 py-5 text-center h-[250px] p-14 rounded-md ">
      <h4 className="text-left"> Office</h4>
        <h5 className="text-left">items 23</h5>
        <img src={eimg}/>
      </div>
      <div className="bg-gray-300 py-5 text-center h-[250px] p-14 rounded-md">
      <h4 className="text-left"> Outdoor</h4>
        <h5 className="text-left">items 45</h5>
        <img src={fimg}/>
      </div>
    </div>
   </div>
  );
};
