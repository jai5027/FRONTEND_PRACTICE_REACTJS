import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice.js'

const SearchBar = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setQuery(text))
    setText('')
  }

  return (
    <div>
       <form onSubmit={handleSubmit} className='flex gap-5 p-7 px-50'>
          <input className='w-full border-2 px-6 text-xl'
          required
          value={text}
          onChange={(e) => setText(e.target.value)} 
          type='text' 
          placeholder='Enter Something....'/>
          <button
           className='border-2 p-2 active:scale-95 '
          >SEARCH</button>
       </form>
    </div>
  )
}

export default SearchBar
