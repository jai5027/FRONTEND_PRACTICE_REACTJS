import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
  const [menubar, setMenubar] = useState(false)
  return (
    <>
    <div className='fixed top-0 left-0 right-0 bg-black/50 font-semibold z-50'>
      <div className='max-[650px]:hidden flex justify-evenly items-center p-2'>
      <Link to='/'>HOME</Link>
      <Link to='/wishlist'>WISHLIST</Link>
      <Link to='/products'>PRODUCTS</Link>
      <Link to='/contact'>CONTACT</Link>
      </div>

      <div className='min-[650px]:hidden flex justify-between items-center mx-12 p-2'>
        <div className='text-xl'>LOGO</div>

        <div onClick={() => setMenubar(true)}>
           <i className="ri-menu-line text-xl"></i>
        </div>
      </div>
    </div>

    <div className={`fixed w-full top-0 right-0 h-screen bg-white border-l border-black 
  shadow-[-8px_0_20px_rgba(0,0,0,0.15)]
  transform transition-transform duration-300 ease-in-out
  ${menubar ? "translate-x-0" : "translate-x-full"}`}>
        <div onClick={() => setMenubar(false)} className='text-2xl fixed right-0 font-semibold mx-5'><i className="ri-close-line"></i></div>
      <div className='flex flex-col mt-10 mx-5 gap-5'>
       <Link onClick={() => setMenubar(false)} className='bg-black text-white p-2 rounded-lg text-center' to='/'>HOME</Link>
       <Link onClick={() => setMenubar(false)} className='bg-black text-white p-2 rounded-lg text-center' to='/wishlist'>WISHLIST</Link>
       <Link onClick={() => setMenubar(false)} className='bg-black text-white p-2 rounded-lg text-center' to='/products'>PRODUCTS</Link>
       <Link onClick={() => setMenubar(false)} className='bg-black text-white p-2 rounded-lg text-center' to='/contact'>CONTACT</Link>
      </div>
     </div> 
     </>
  )
}

export default Navbar
