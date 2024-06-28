import React from "react";
 import listing from "./Data"
 
 export const Category = () => {

   return (
    <div>
    <div className=" grid lg:grid-cols-3 gap-9 w-[800px] h-[600px] m-auto p-6   text-justify relative -mt-24 ">
             {listing.map((room, index) => (
                <div className="bg-gray-300 py-5 text-center  border-r-purple-50 h-[250px] p-14 rounded-md  shadow-md shadow-stone-700" key={index}>
                    <h2>{room.Room}</h2>
                    <p>{room.item}</p>
                   <img src={room.image} alt={room.Room} />
                  
                </div>
            ))}
        </div>
       
      </div>
    );
};