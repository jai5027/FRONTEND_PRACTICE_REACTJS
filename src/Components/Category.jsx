import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Category = () => {
  return (
    <div className='max-w-280 mx-auto'>
        <div className='flex my-3 items-center justify-between'>
        <div className='text-[25px] font-bold'>What's on your mind?</div>
        <div className='flex'>
            <div className='flex justify-center items-center w-7.5 h-7.5 bg-[#e2e2e7] rounded-full mx-2'>
               <FaArrowLeft />
                </div>
      
            <div className='flex justify-around items-center w-7.5 h-7.5 bg-[#e2e2e7] rounded-full mx-2'>
                <FaArrowRight />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Category
