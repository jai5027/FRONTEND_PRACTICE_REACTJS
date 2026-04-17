import React, { useState } from 'react'

const Input = () => {

    const [data, setData] = useState({ name: "", email: "", message: "" })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value})
    } 

    const formSubmit = (e) => {
        e.preventDefault()
        setData({ name: "", email: "", message: "" })
        localStorage.setItem("formData", JSON.stringify(data))
    }

  return (
    <div className='flex justify-center items-center mt-10'>
    <div className='bg-amber-300 p-10 rounded-2xl'>

     <form onSubmit={formSubmit} 
     className='flex flex-col justify-center items-center gap-5'>
     
     <div className='flex flex-col'>
     <label htmlFor='name' className='text-sm ml-1'>Name</label>
      <input className='bg-amber-50 p-2 rounded-2xl outline-none'
      placeholder='Enter Name...' 
      type='text'
      required
      onChange={handleChange}
      value={data.name}
      name='name'
      />
      </div>

     <div className='flex flex-col'>
     <label htmlFor='email' className='text-sm ml-1'>Email</label>  
      <input className='bg-amber-50 p-2 rounded-2xl outline-none'
      placeholder='Enter Email...'
      type='text'
      required
      onChange={handleChange}
      value={data.email}
      name='email'
      />
      </div>

     <div className='flex flex-col'>
     <label htmlFor='message' className='text-sm ml-1'>Message</label>
      <textarea className='bg-amber-50 p-2 px-4 rounded-2xl outline-none'
      placeholder='Enter Message...'
      type='text'
      required
      onChange={handleChange}
      value={data.message}
      name='message'
      />
      </div>

      <button className='bg-sky-300 w-full rounded-2xl p-1 font-semibold'
       onSubmit={formSubmit}
      >SUBMIT</button>
     </form>

    </div>
    </div>
  )
}

export default Input
