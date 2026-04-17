import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";

const Header = () => {
    const [toggle, setToggle] = useState(false)

    const showLay = () => {
        setToggle(!toggle)
    }

  return (
    <>
    <div className='black-overlay h-full w-full fixed duration-500' 
     style={{ opacity: toggle ? 1 : 0,
              visibility: toggle ? "visible" : "hidden"
      }}
    >
        <div className='w-150 bg-white h-full'>
            
        </div>
    </div>


    <header className='p-5 shadow-xl'>

        <div className='max-w-300 mx-auto flex items-center gap-2 border border-amber-200'>
            <div className='w-10'>
                <img src='https://cdn.iconscout.com/icon/free/png-256/free-swiggy-logo-icon-svg-download-png-1369418.png?f=webp'
                  className='w-full'
                />
            </div>

            <div className=''>
             <span className='font-bold border-b-2'>Mansarowar</span> Jaipur, Rajasthan, india
             <RxCaretDown onClick={showLay} size={25} className='cursor-pointer stroke-[0.3px] inline text-[0.9rem] text-[#fc8019]'/>
            </div>
            </div>

    </header>
    </>
  )
}

export default Header
