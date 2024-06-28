/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
 import image from "./shopping-cart-3d-render-icon.jpg"
export const Header = () => {
  return (
    <>
    <div className=' grid grid-cols-3'>
    <div className=' '>
    <a href='/' className='text-3xl font-bold h-12 text-left ml-8 '>
      Brainwave.io
    </a>
    </div>
    <div className='flex justify-between items-center text-lg font-bold pl-12 gap-15 h-12 sm:p-4 lg:p-0  '>
      <a href='/products' className=' hover:text-[#473BF0] '>Products</a>
      <a href='/plans' className=' hover:text-[#473BF0] '>Plans</a>
      <a href='/aboutus' className=' hover:text-[#473BF0] '>About</a>
      <a href='/contact-us' className=' hover:text-[#473BF0] '>Contact us</a>
    </div>

    <div className='flex justify-end h-12 mr-6'>

      <img src={image}/>
     </div>
     </div>
</>
  )
}

