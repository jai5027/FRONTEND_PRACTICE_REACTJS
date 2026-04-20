import { useDispatch, useSelector } from 'react-redux'
import { fetchPhoto, fetchVideos } from '../api/mediaApi.js'
import { setResults, setError, setLoading} from '../redux/features/searchSlice.js'
import { useEffect } from 'react'
import ResultCard from "../components/ResultCrad.jsx"

const ResultGrid = () => {
    const dispatch = useDispatch()
    const {query, activeTab, results, loading, error} = useSelector((store) => store.search)
    
    useEffect(() => {
        if(!query) return
    const getData = async () => { 
          
        try {
        dispatch(setLoading())  
        let data = []
        if(activeTab == 'Photos'){
            let response = await fetchPhoto(query)
            data = response.results.map((item) => ({
                id: item.id,
                type: 'photo',
                title: item.alt_description,
                thumbnail: item.urls.small,
                src: item.urls.full,
                url: item.links.html
            }))
        }

        if(activeTab == 'Videos'){
            let response = await fetchVideos(query)
            data = response.videos.map((item) => ({
                id: item.id,
                type: 'video',
                title: item.user.name || 'video',
                thumbnail: item.image,
                src: item.video_files[0].link,
                url: item.url              
            }))
        }
      dispatch(setResults(data))
    
        } catch (error) {
          dispatch(setError(error.message))
        }
      }
    getData()
    }, [activeTab, query, dispatch])

    if(error) return <h1>Error</h1>
    if(loading) return <h1>Loading....</h1>

  return (
    <div className='flex flex-wrap justify-center gap-5 w-full overflow-auto mx-auto'>
      {results.map((item, idx) => {
        return <div key={idx}>
          <ResultCard item={item}/>
        </div>
      })}
      
    </div>
  )
}

export default ResultGrid
