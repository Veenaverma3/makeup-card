import React from 'react'
import bgimg from "./veena.png"

export const Hero = () => {
  return (
    <>
    <div>
   <div className="  m-auto h-[720px] w-[98%] bg-cover grid justify-center items-center rounded-md   " style={{ backgroundImage: `url(${bgimg})` }}>
   <h6 className=' mt-[150px]  text-center text-white' >MINIMAL INTERIOR DESION</h6>
   <h1 className=' mb-[250px]  text-neutral-100 text-center text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 '   >We minimize your <br></br> waste in every step of the <br></br> process</h1>
    </div>
    
     </div>
     </>
  )
}
