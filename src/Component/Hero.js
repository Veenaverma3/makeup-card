import React from 'react'
import bgimg from "./veena.png"

export const Hero = () => {
  return (
    <>
    <div>
   <div className="  m-auto h-[720px] w-[98%] bg-cover rounded-md brightness-50" style={{ backgroundImage: `url(${bgimg})` }}>
   <h6 className=' absolute text-right text-red-600 mt-[300px] ml-80' >MINIMAL INTERIOR DESION</h6>
   <h1 className=' text absolute text-red-600 text-center mt-[350px] ml-80 text-5xl'  >We minimize your <br></br> waste in every step of the <br></br> process</h1>
    </div>
    
     </div>
     </>
  )
}
