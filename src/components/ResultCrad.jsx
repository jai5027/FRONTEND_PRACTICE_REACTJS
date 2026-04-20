import React from 'react'

const ResultCrad = ({ item }) => {
  return (
    <div className='w-72 h-72 relative rounded-lg'>
        <div className='h-full'>
        {item.type == 'photo' ? <img className='w-full h-full object-cover object-center' src={item.src} alt=''/> : ''}
        {/* {item.type == 'video' ? <video className='w-full h-full object-cover object-center' autoPlay muted loop src={item.src} /> : ''} */}
        </div>

        <div id='bottom' className='w-full px-6 py-10 absolute bottom-0'>
      <h2 className='text-xl font-semibold capitalize'>{item.title}</h2>
        </div>
    </div>
  )
}

export default ResultCrad
