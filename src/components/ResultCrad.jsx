import React from 'react'

const ResultCrad = ({ item }) => {

  const addToCollection = (item) => {
       
      const oldData = JSON.parse(localStorage.getItem('collection')) || []

      const newData = [...oldData, item]

      localStorage.setItem('collection', JSON.stringify(newData))
  }

  return (
    <div className='w-72 h-72 relative rounded-xl overflow-hidden'>
         <a target='_blank' href={item.url}>
        {item.type == 'photo' ? <img className='w-full h-full object-cover object-center' src={item.src} alt=''/> : ''}
        {/* {item.type == 'video' ? <video className='w-full h-full object-cover object-center' autoPlay muted loop src={item.src} /> : ''} */}
        </a>

        <div id='bottom' className='w-full flex justify-center gap-5 px-6 py-10 absolute bottom-0'>
      <h2 className='line-clamp-1 text-xl font-semibold capitalize'>{item.title}</h2>
      <button onClick={() => addToCollection(item)} 
      className='bg-indigo-600 px-3 py-1 cursor-pointer rounded font-medium'>SAVE</button>
        </div>
    </div>
  )
}

export default ResultCrad
