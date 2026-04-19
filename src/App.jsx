import { fetchPhoto } from './api/mediaApi.js'
import { fetchVideos } from './api/mediaApi.js';

function App() {


  return (
    <>
 <div className='h-screen text-white bg-gray-950'>
  <button onClick={async () =>{ await fetchPhoto('cat')}}
   className='bg-sky-500 px-4 py-2 m-5 rounded-sm cursor-pointer hover:bg-sky-600'  
  >GET PHOTO</button>

  <button onClick={async () =>{ await fetchVideos('cat')}}
   className='bg-sky-500 px-4 py-2 m-5 rounded-sm cursor-pointer hover:bg-sky-600'    
  >
GET VIDEOS
  </button>
  </div>
    </>
  )
}

export default App
