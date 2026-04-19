import { useDispatch, useSelector } from 'react-redux'
import { fetchPhoto, fetchVideos } from '../api/mediaApi.js'
import { setQuery, setResults, setError, setLoading} from '../redux/features/searchSlice.js'
import { useEffect } from 'react'

const ResultGrid = () => {
    const dispatch = useDispatch()
    const {query, activeTab, results, loading, error} = useSelector((store) => store.search)
    
    useEffect(() => {
        if(!query) return 
  const getData = async () => { 

        try {
        let data = []
        if(activeTab == 'Photos'){
            let response = await fetchPhoto(query)
            data = response.results.map((item) => ({
                id: item.id,
                type: 'photo',
                title: item.alt_description,
                thumbnail: item.urls.small,
                src: item.urls.full
            }))
        }

        if(activeTab == 'Videos'){
            let response = await fetchVideos(query)
            data = response.videos.map((item) => ({
                id: item.id,
                type: 'video',
                title: item.user.name || 'video',
                thumbnail: item.image,
                src: item.video_files[0].link              
            }))
        }
      dispatch(setResults(data))
    
        } catch (error) {
          dispatch(setError(error.message))
        }
      }
    getData()
    }, [activeTab, query])

    if(error) return <h1>Error</h1>
    if(loading) return <h1>Loading....</h1>

  return (
    <div>
      
    </div>
  )
}

export default ResultGrid
