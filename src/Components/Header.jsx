import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
    const [toggle, setToggle] = useState(false)

    const showLay = () => {
        setToggle(!toggle)
    }

    const links = [
      {
        icon: <IoIosSearch />,
        link: "Search"
      },
      {
        icon: <BiSolidOffer />,
        link: "Offers",
        sup: "New"
      },
      {
        icon: <IoMdHelpCircleOutline />,
        link: "Help"
      },
      {
        icon: <IoMdContact />,
        link: "Sign in"
      },
      {
        icon: <FaCartShopping />,
        link: "Cart"
      },
    ]

  return (
    <>
    <div className='black-overlay h-full w-full fixed duration-500' onClick={() => setToggle(false)}
     style={{ opacity: toggle ? 1 : 0,
              visibility: toggle ? "visible" : "hidden"
      }}
    >
        <div className='w-150 bg-white h-full duration-500 absolute' 
        style={{ left: toggle ? '0%' : '-100%' }}
        onClick={(e) => e.stopPropagation()}
        >
            
        </div>
    </div>


    <header className='p-5 px-30  shadow-xl'>

        <div className='max-w-300 mx-auto flex items-center gap-2'>
            <div className='w-10'>
                <img src='https://cdn.iconscout.com/icon/free/png-256/free-swiggy-logo-icon-svg-download-png-1369418.png?f=webp'
                  className='w-full'
                />
            </div>

            <div className=''>
             <span className='font-bold border-b-2'>Mansarowar</span> Jaipur, Rajasthan, india
             <RxCaretDown onClick={showLay} size={25} className='cursor-pointer stroke-[0.3px] inline text-[0.9rem] text-[#fc8019]'/>
            </div>

            <nav className='list-none flex ml-auto gap-10 font-semibold opacity-60'>
              {links.map((item, index) => {
                return <li key={index} className='flex items-center gap-2 cursor-pointer hover:text-[#fc8019]'>
                  {item.icon}
                  {item.link}
                  <sup>{item.sup}</sup>
                </li>
              })}
            </nav>  

            </div>

    </header>
    </>
  )
}

export default Header
