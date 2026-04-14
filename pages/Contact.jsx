import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeByValue, decrement, changeName, increment } from '../src/store/features/counter/counter.Slice'

const Contact = () => {
  const [naam, setNaam] = useState('')
  const state = useSelector(state => state.counter)
  const dispatch = useDispatch()

  
  const handleChange = (e) => {
     setNaam(e.target.value)
  }

  const onHandleClick = () => {
    dispatch(changeName(naam))
    setNaam("")
  }

  return (
    <div>
      <h1>{state.value}</h1>
      <h1>{state.name}</h1>
      <input onChange={handleChange} value={naam}/>
      <button className='font-bold' onClick={onHandleClick}>CHANGE</button>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(changeByValue(5))}>CHANGE BY VALUE</button>
    </div>
  )
}

export default Contact
