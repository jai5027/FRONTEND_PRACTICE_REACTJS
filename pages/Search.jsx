import React, { useState, useEffect, useRef } from 'react'

const Search = () => {
   const [query, setQuery] = useState('')
   const boxRef = useRef()
   
   const data = ["apple", "boy", "cat", "dog", "emiway"]

useEffect(() => {
  const handleClick = (e) => {
    if(!boxRef.current.contains(e.target)){
        setQuery("")
    }
  }
  window.addEventListener("click", handleClick);
  return () => window.removeEventListener("click", handleClick);
}, []);

  return (
    <>
    <div ref={boxRef}>
       <input 
        placeholder='Enter Something...'
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
       />
 
        {query && (
        <div className="absolute w-full bg-white border mt-1 rounded shadow">
          {data.length > 0 ? (
            data.map((item, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setQuery(item)}
              >
                {item}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No results</div>
          )}
        </div>
      )}
</div>
   </>
  )
}

export default Search
