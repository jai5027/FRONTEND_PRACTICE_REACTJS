import React, { useState } from 'react'

const Home = () => {
  const [val, setVal] = useState({task: ""})
  const [con, setCon] = useState([])
  const [edit, setEdit] = useState([])

  const onHandleChange = (e) => {
    const { name, value } = e.target
    setVal({...val, [name]: value})
  }
  const conVal = () => {
    if(val.task.trim() === "") return

    if(edit !== null){
      const update = con.map((item, index) => 
       index === edit ? val.task : item
      )
      setCon(update)
      setEdit(null)
    } else {
    setCon([...con, val.task])
    }
    setVal({ task: "" })
  }

  const deleteBtn = (index) => {
    const allitem = con.filter((_, i) => i !== index)
    setCon(allitem)
  }

  const editBtn = (index) => {
    setVal({ task: con[index] })
    setEdit(index)
  }
  
  return (
    <div className='mt-20 flex flex-col gap-5 justify-center items-center bg-gray-400 p-10'>
      <input className='bg-amber-100 text-center rounded-xl border border-none outline-none p-2' 
      placeholder='enter something' 
      type='text'
      name='task'
      value={val.task}
      onChange={onHandleChange}
      />
    <button onClick={conVal} className='px-5 py-1 bg-gray-300 rounded-lg'>ADD</button>
   
   {con.map((item, index) => {
    return <div key={index} className='flex flex-row gap-3'><ul>
      <li>{item}</li>
      </ul>
      <button onClick={() => deleteBtn(index)} className='py-1 px-4 bg-red-400 rounded-lg'>DELETE</button>
      <button onClick={() => editBtn(index)} className='py-1 px-4 bg-green-400 rounded-lg'>EDIT</button>
      </div>
   })}
    </div>
  )
}

export default Home
