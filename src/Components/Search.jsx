import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Search = () => {
  const [users, setUsers] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    const getData = async () => {
    const response = await axios('https://jsonplaceholder.typicode.com/users')
    setUsers(response.data)
    }
    getData()
  }, [])
  
  const filterUser = users.filter((user) => {
    return user.name.toLowerCase().includes(query.toLowerCase())
  })

  return (
    <div>
      <input 
       placeholder='Enter name...'
       type='text'
       value={query}
       onChange={(e) => setQuery(e.target.value)}
      />

      {query && (
        <ul>
            {filterUser.length > 0 ? (
                filterUser.map((user) => (
                   <li key={user.id}>{user.name}</li>
                ))
            ) : (<li> No Result </li>)}
        </ul>
      )}
    </div>
  )
}

export default Search
